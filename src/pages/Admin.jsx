import React, { useEffect, useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { deleteDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";
import { auth, db } from "../services/firebase";
import useFirestoreCollection from "../hooks/useFirestoreCollection";
import AdminTable from "../components/AdminTable";
import { buildCanonical } from "../utils/seo";

const formatTimestamp = (value) => {
  if (!value?.seconds) return "-";
  return new Date(value.seconds * 1000).toLocaleString();
};

const Admin = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [credentials, setCredentials] = useState({ email: "", password: "" });

  const { data: contacts, loading: contactsLoading } = useFirestoreCollection("contacts");
  const { data: careers, loading: careersLoading } = useFirestoreCollection("careers");
  const { data: quotes, loading: quotesLoading } = useFirestoreCollection("quotes");

  const adminEmails = useMemo(() => {
    const raw = import.meta.env.VITE_ADMIN_EMAILS || "";
    return raw.split(",").map((email) => email.trim()).filter(Boolean);
  }, []);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser && adminEmails.length && !adminEmails.includes(currentUser.email)) {
        toast.error("Access denied for this account.");
        signOut(auth);
        setUser(null);
      } else {
        setUser(currentUser);
      }
      setLoading(false);
    });
    return () => unsub();
  }, [adminEmails]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, credentials.email, credentials.password);
      toast.success("Welcome back.");
    } catch {
      toast.error("Invalid credentials.");
    }
  };

  const handleDelete = async (collectionName, id) => {
    try {
      await deleteDoc(doc(db, collectionName, id));
      toast.success("Deleted successfully.");
    } catch {
      toast.error("Unable to delete item.");
    }
  };

  if (loading) {
    return <div className="section-padding bg-white">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="section-padding bg-white">
        <Helmet>
          <title>Admin Login | BelongDigitalSolutions</title>
          <link rel="canonical" href={buildCanonical("/admin")} />
        </Helmet>
        <h1 className="font-display text-3xl font-semibold">Admin Login</h1>
        <form className="mt-6 space-y-4" onSubmit={handleLogin}>
          <input
            className="form-field"
            placeholder="Email"
            type="email"
            value={credentials.email}
            onChange={(event) => setCredentials({ ...credentials, email: event.target.value })}
          />
          <input
            className="form-field"
            placeholder="Password"
            type="password"
            value={credentials.password}
            onChange={(event) => setCredentials({ ...credentials, password: event.target.value })}
          />
          <button type="submit" className="btn-primary w-full">
            Sign In
          </button>
          <p className="text-xs text-neutral-500">
            Admin access is restricted. Only approved emails in `VITE_ADMIN_EMAILS` can view the
            dashboard.
          </p>
        </form>
      </div>
    );
  }

  return (
    <div className="section-padding bg-white">
      <Helmet>
        <title>Admin Dashboard | BelongDigitalSolutions</title>
        <link rel="canonical" href={buildCanonical("/admin")} />
      </Helmet>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold">Admin Dashboard</h1>
          <p className="text-sm text-neutral-500">Manage submissions in real time.</p>
        </div>
        <button className="btn-secondary" onClick={() => signOut(auth)}>
          Sign Out
        </button>
      </div>

      <div className="mt-10 space-y-8">
        <AdminTable
          title="Contact Submissions"
          data={contacts}
          onDelete={(id) => handleDelete("contacts", id)}
          columns={[
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
            { key: "phone", label: "Phone" },
            { key: "message", label: "Message" },
            { key: "createdAt", label: "Created", render: (value) => formatTimestamp(value) }
          ]}
        />
        <AdminTable
          title="Career Applications"
          data={careers}
          onDelete={(id) => handleDelete("careers", id)}
          columns={[
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
            { key: "phone", label: "Phone" },
            {
              key: "resumeUrl",
              label: "Resume",
              render: (value) =>
                value ? (
                  <a className="text-accent" href={value} target="_blank" rel="noreferrer">
                    View
                  </a>
                ) : (
                  "-"
                )
            },
            { key: "createdAt", label: "Created", render: (value) => formatTimestamp(value) }
          ]}
        />
        <AdminTable
          title="Quote Requests"
          data={quotes}
          onDelete={(id) => handleDelete("quotes", id)}
          columns={[
            { key: "name", label: "Name" },
            { key: "email", label: "Email" },
            { key: "phone", label: "Phone" },
            { key: "company", label: "Company" },
            { key: "service", label: "Service" },
            { key: "createdAt", label: "Created", render: (value) => formatTimestamp(value) }
          ]}
        />
      </div>

      {(contactsLoading || careersLoading || quotesLoading) && (
        <p className="mt-6 text-sm text-neutral-500">Syncing latest data...</p>
      )}
    </div>
  );
};

export default Admin;
