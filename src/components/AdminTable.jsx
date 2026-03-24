import React, { useMemo, useState } from "react";

const PAGE_SIZE = 5;

const AdminTable = ({ title, columns, data, onDelete }) => {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [sortKey, setSortKey] = useState("createdAt");
  const [direction, setDirection] = useState("desc");

  const filtered = useMemo(() => {
    const text = query.toLowerCase();
    return data.filter((item) =>
      Object.values(item).some((value) => String(value || "").toLowerCase().includes(text))
    );
  }, [data, query]);

  const sorted = useMemo(() => {
    const sortedData = [...filtered].sort((a, b) => {
      const aVal = a[sortKey] || "";
      const bVal = b[sortKey] || "";
      if (aVal?.seconds && bVal?.seconds) {
        return direction === "asc" ? aVal.seconds - bVal.seconds : bVal.seconds - aVal.seconds;
      }
      if (typeof aVal === "number" && typeof bVal === "number") {
        return direction === "asc" ? aVal - bVal : bVal - aVal;
      }
      return direction === "asc"
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });
    return sortedData;
  }, [filtered, sortKey, direction]);

  const totalPages = Math.max(1, Math.ceil(sorted.length / PAGE_SIZE));
  const paginated = sorted.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleSort = (key) => {
    if (sortKey === key) {
      setDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setDirection("desc");
    }
  };

  return (
    <div className="rounded-3xl border border-neutral-100 bg-white p-6 shadow-sm">
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <h3 className="font-display text-xl font-semibold text-secondary">{title}</h3>
        <input
          className="form-field max-w-xs"
          placeholder="Search..."
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setPage(1);
          }}
        />
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="text-xs uppercase text-neutral-400">
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className="cursor-pointer py-3"
                  onClick={() => handleSort(col.key)}
                >
                  {col.label}
                </th>
              ))}
              <th className="py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((row) => (
              <tr key={row.id} className="border-t border-neutral-100">
                {columns.map((col) => (
                  <td key={col.key} className="py-3 pr-4 text-neutral-600">
                    {col.render ? col.render(row[col.key], row) : String(row[col.key] || "-")}
                  </td>
                ))}
                <td className="py-3">
                  <button
                    className="text-xs font-semibold text-accent"
                    onClick={() => onDelete(row.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-between text-xs text-neutral-500">
        <span>
          Page {page} of {totalPages}
        </span>
        <div className="flex gap-2">
          <button
            className="rounded-full border border-neutral-200 px-3 py-1"
            onClick={() => setPage((prev) => Math.max(1, prev - 1))}
            disabled={page === 1}
          >
            Prev
          </button>
          <button
            className="rounded-full border border-neutral-200 px-3 py-1"
            onClick={() => setPage((prev) => Math.min(totalPages, prev + 1))}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminTable;