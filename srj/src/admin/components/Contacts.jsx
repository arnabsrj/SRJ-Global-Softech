import React, { useEffect, useState } from "react";

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [selectedContact, setSelectedContact] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_BASE_URL}/contacts`);
      if (!res.ok) throw new Error("Failed to fetch contacts");
      const data = await res.json();
      setContacts(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err.message);
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this contact?"))
      return;
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

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100">
        Contact Submissions
      </h2>

      {loading ? (
        <div className="text-center">Loading contacts...</div>
      ) : error ? (
        <div className="text-red-600">Error: {error}</div>
      ) : contacts.length === 0 ? (
        <div>No contacts found.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border-collapse shadow rounded-lg overflow-hidden">
            <thead className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200">
              <tr>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Service</th>
                <th className="p-3 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((c) => (
                <tr
                  key={c._id}
                  className="even:bg-gray-50 dark:even:bg-gray-800 odd:bg-white dark:odd:bg-gray-900"
                >
                  <td className="p-3 font-medium">
                    {c.firstName} {c.lastName}
                  </td>
                  <td className="p-3">{c.email}</td>
                  <td className="p-3">{c.service}</td>
                  <td className="p-3 space-x-2 space-y-2 sm:space-y-0">
                    <button
                      onClick={() =>
                        setSelectedContact(
                          selectedContact?._id === c._id ? null : c
                        )
                      }
                      className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-sm"
                    >
                      More
                    </button>
                    <button
                      onClick={() => handleDelete(c._id)}
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded text-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* ✨ Glassmorphic Popup Modal */}
      {selectedContact && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="relative bg-white/20 backdrop-blur-xl border border-white/30 rounded-2xl shadow-2xl text-white w-full max-w-lg max-h-[90vh] overflow-y-auto p-6 animate-fade-in">
            <button
              className="absolute top-3 right-4 text-white text-2xl hover:scale-110 transition"
              onClick={() => setSelectedContact(null)}
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-2">
              {selectedContact.firstName} {selectedContact.lastName}
            </h3>
            <p className="text-sm text-white/80 mb-4">
              {selectedContact.email}
            </p>

            <div className="space-y-3 text-white/90 text-sm">
              <p>
                <strong>Service:</strong> {selectedContact.service}
              </p>
              <p>
                <strong>Phone:</strong> {selectedContact.phone || "N/A"}
              </p>
              <p>
                <strong>Message:</strong> {selectedContact.message || "N/A"}
              </p>
              <p className="text-xs text-white/60">
                <strong>Submitted:</strong>{" "}
                {formatDate(selectedContact.submittedAt)}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contacts;
