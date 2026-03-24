import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db, storage } from "./firebase";

export const submitContact = async (payload) => {
  const docRef = await addDoc(collection(db, "contacts"), {
    ...payload,
    createdAt: serverTimestamp()
  });
  return docRef.id;
};

export const submitQuote = async (payload) => {
  const docRef = await addDoc(collection(db, "quotes"), {
    ...payload,
    createdAt: serverTimestamp()
  });
  return docRef.id;
};

export const uploadResume = async (file, name) => {
  const storageRef = ref(storage, `resumes/${Date.now()}-${name}-${file.name}`);
  await uploadBytes(storageRef, file);
  return getDownloadURL(storageRef);
};

export const submitCareer = async (payload, file) => {
  let resumeUrl = "";
  if (file) {
    resumeUrl = await uploadResume(file, payload.name || "candidate");
  }

  const docRef = await addDoc(collection(db, "careers"), {
    ...payload,
    resumeUrl,
    createdAt: serverTimestamp()
  });
  return docRef.id;
};