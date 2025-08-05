import React, { useEffect, useState } from "react";
import { Trash, Eye } from "lucide-react";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [filteredContacts, setFilteredContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [contactsPerPage] = useState(10);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  useEffect(() => {
    const filtered = contacts.filter((c) =>
      `${c.firstName} ${c.lastName} ${c.email} ${c.service}`
        .toLowerCase()
        .includes(searchTerm.toLowerCase())
    );
    setFilteredContacts(filtered);
    setCurrentPage(1); // Reset to first page on search
  }, [searchTerm, contacts]);

  const fetchContacts = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/contacts`);
      if (!res.ok) throw new Error("Failed to fetch contacts");
      const data = await res.json();
      setContacts(data);
      setFilteredContacts(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?")) return;
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/contacts/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete contact");
      setContacts((prev) => prev.filter((c) => c._id !== id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete contact");
    }
  };

  const formatDate = (dateStr) =>
    new Intl.DateTimeFormat("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(dateStr));

  // Pagination logic
  const indexOfLast = currentPage * contactsPerPage;
  const indexOfFirst = indexOfLast - contactsPerPage;
  const currentContacts = filteredContacts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredContacts.length / contactsPerPage);

  return (
    <div className="p-4 sm:p-6 bg-[#f1f6ff] min-h-screen">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-blue-800">
        Contact Submissions
      </h2>

      <input
        type="text"
        placeholder="Search by name, email or service..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 w-full sm:w-1/2 px-4 py-2 border border-blue-200 rounded-md"
      />

      {loading ? (
        <div className="text-center text-gray-600 dark:text-gray-300">Loading contacts...</div>
      ) : error ? (
        <div className="text-red-600 font-medium">Error: {error}</div>
      ) : filteredContacts.length === 0 ? (
        <div className="text-gray-600">No contacts found.</div>
      ) : (
        <>
          <div className="overflow-x-auto rounded-lg shadow border border-gray-200 bg-white">
            <table className="w-full min-w-[600px] text-sm text-left">
              <thead className="bg-blue-50 text-blue-800">
                <tr>
                  <th className="px-4 py-3 font-semibold">Name</th>
                  <th className="px-4 py-3 font-semibold">Email</th>
                  <th className="px-4 py-3 font-semibold">Service</th>
                  <th className="px-4 py-3 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentContacts.map((c) => (
                  <tr key={c._id} className="odd:bg-white even:bg-blue-50 border-b">
                    <td className="px-4 py-3 font-medium text-gray-800">{c.firstName} {c.lastName}</td>
                    <td className="px-4 py-3 text-gray-600">{c.email}</td>
                    <td className="px-4 py-3 text-gray-600">{c.service}</td>
                    <td className="px-4 py-3 flex gap-2">
                      <button
                        onClick={() => setSelectedContact(selectedContact?._id === c._id ? null : c)}
                        className="w-8 h-8 flex items-center justify-center bg-blue-100 rounded hover:bg-blue-200 transition"
                      >
                        <Eye className="text-blue-600 w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(c._id)}
                        className="w-8 h-8 flex items-center justify-center bg-red-100 rounded hover:bg-red-200 transition"
                      >
                        <Trash className="text-red-500 w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-4 gap-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-3 py-1 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Prev
            </button>
            <span className="px-3 py-1 text-blue-800 font-medium">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="px-3 py-1 bg-blue-600 text-white rounded disabled:opacity-50"
            >
              Next
            </button>
          </div>
        </>
      )}

      {/* 🧊 Glassmorphic Popup */}
      {selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl shadow-xl text-white w-full max-w-md p-6 animate-fade-in">
            <button
              className="absolute top-3 right-4 text-white text-2xl hover:scale-110 transition"
              onClick={() => setSelectedContact(null)}
            >
              &times;
            </button>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              {selectedContact.firstName} {selectedContact.lastName}
            </h3>
            <p className="text-sm text-white/70 mb-4">{selectedContact.email}</p>
            <div className="space-y-3 text-white/90 text-sm">
              <p><strong>Service:</strong> {selectedContact.service}</p>
              <p><strong>Phone:</strong> {selectedContact.phone || "N/A"}</p>
              <p><strong>Message:</strong> {selectedContact.message || "N/A"}</p>
              <p className="text-xs text-white/60">
                <strong>Submitted:</strong> {formatDate(selectedContact.submittedAt)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;