import axios from "axios";
import React, { useEffect, useState } from "react";

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

const Dashboard = () => {
  const [admin] = useState({ name: "Alice Admin" });

  const [books] = useState([
    { id: 1, title: "React Basics", author: "John Doe", status: "Available" },
    { id: 2, title: "JavaScript Advanced", author: "Jane Doe", status: "Borrowed" },
    { id: 3, title: "Tailwind Guide", author: "Sam Smith", status: "Available" },
  ]);

  // ✅ STATES MANQUANTS (je les ai ajoutés)
  const [users, setUsers] = useState<User[]>([]);
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setUsers(response.data);

        const user1 = response.data.find((user) => user.id === 1);

        if (user1) {
          setUserName(user1.name);
        }
      })
      .catch((error) => {
        console.error("misy erreur", error);
      });
  }, []); // ✅ IMPORTANT

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">
        Hello, {userName || admin.name}
        {/* Hello, {userName ? userName : admin.name} */}
      </h1>

      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-4 bg-white rounded shadow">
          Total Books: {books.length}
        </div>
        <div className="p-4 bg-white rounded shadow">
          Borrowed Books: {books.filter(b => b.status === "Borrowed").length}
        </div>
        <div className="p-4 bg-white rounded shadow">
          Available Books: {books.filter(b => b.status === "Available").length}
        </div>
      </div>

      <h2 className="text-xl font-semibold mb-2">Books List</h2>
      <table className="table-auto w-full bg-white rounded shadow overflow-hidden">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Author</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id} className="border-b">
              <td className="px-4 py-2">{book.id}</td>
              <td className="px-4 py-2">{book.title}</td>
              <td className="px-4 py-2">{book.author}</td>
              <td className="px-4 py-2">{book.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
