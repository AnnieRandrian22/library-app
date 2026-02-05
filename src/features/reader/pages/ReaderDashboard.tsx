import { useState } from "react";

const ReaderDashboard = () => {
    const [reader] = useState({ name: "Bob Reader" });

  const [borrowedBooks] = useState([
    { id: 1, title: "React Basics", dueDate: "2026-02-10" },
    { id: 2, title: "Tailwind Guide", dueDate: "2026-02-15" },
  ]);
  return (
<div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Welcome, {reader.name}</h1>

      <div className="mb-6">
        <p>Total Borrowed Books: {borrowedBooks.length}</p>
      </div>

      <h2 className="text-xl font-semibold mb-2">Borrowed Books</h2>
      <ul className="bg-white rounded shadow p-4">
        {borrowedBooks.map((book) => (
          <li key={book.id} className="border-b last:border-b-0 py-2">
            {book.title} - Due: {book.dueDate}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReaderDashboard;

