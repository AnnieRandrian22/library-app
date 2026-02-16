import { useState } from "react";

import useUsers from "../hooks/useUsers";

const Users = () => {
  //destruction
  const {
    users,
    filteredUsers,
    editAge,
    editName,
    editingUser,
    search,
    setEditAge,
    setEditName,
    setEditingUser,
    setUsers,
    setSearch,
  } = useUsers();

  return (
    <div>
      {/* Input */}
      <input
        type="text"
        placeholder="Rechercher..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          width: "500px",
          padding: "12px 40px",
          border: "2px solid #e0e0e0",
          borderRadius: "8px",
          fontSize: "16px",
          outline: "none",
          backgroundColor: "white",
          marginBottom: "10px",
        }}

        // value={users.find(user => user.name === "")?.name || "Non trouvé"}
      />

      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Id</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Nom</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Age</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.map((user) => (
            <tr key={user.id}>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {user.id}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {user.name}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                {user.age}
              </td>
              <td style={{ border: "1px solid black", padding: "8px" }}>
                <button
                  className="buttonStyle"
                  onClick={() =>
                    setUsers(users.filter((u) => u.id !== user.id))
                  }
                >
                  Supprimer
                </button>
                <button
                  className="buttonStyleEdit"
                  onClick={() => {
                    setEditingUser(user); // utilisateur sélectionné
                    setEditName(user.name); // remplit l'input nom
                    setEditAge(user.age); // remplit l'input âge
                  }}
                >
                  Modifier
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Petite formulaire de modification */}

      {editingUser && (
        <div
          style={{
            marginTop: "20px",
            marginBottom: "25px",
            padding: "15px",
            border: "1px solid #ddd",
            borderRadius: "8px",
            backgroundColor: "#f9f9f9",
          }}
        >
          <h3 style={{ marginTop: "0", marginBottom: "15px", color: "#333" }}>
            ✏️ Modifier l'utilisateur
          </h3>

          <div style={{ display: "flex", gap: "10px", marginBottom: "10px" }}>
            <input
              type="text"
              value={editName}
              onChange={(e) => setEditName(e.target.value)}
              placeholder="Nom"
              style={{
                padding: "8px 12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                flex: "1",
              }}
            />

            <input
              type="number"
              value={editAge}
              onChange={(e) => setEditAge(Number(e.target.value))}
              placeholder="Âge"
              style={{
                padding: "8px 12px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                width: "80px",
              }}
            />
          </div>

          <div style={{ display: "flex", gap: "10px" }}>
            <button
              onClick={() => {
                if (editingUser) {
                  setUsers(
                    users.map((u) =>
                      u.id === editingUser.id
                        ? { ...u, name: editName, age: Number(editAge) }
                        : u,
                    ),
                  );
                  setEditingUser(null);
                }
              }}
              style={{
                padding: "8px 16px",
                backgroundColor: "#007bff",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Enregistrer
            </button>

            <button
              onClick={() => setEditingUser(null)}
              style={{
                padding: "8px 16px",
                backgroundColor: "#6c757d",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Annuler
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
