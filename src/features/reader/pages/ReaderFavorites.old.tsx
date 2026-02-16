import { useState } from "react";

type User = {
  id: number;
  name: string;
  age: number;
};
const ReaderFavorites = () => {
  //mock 1
  const users1: User[] = [
    { id: 1, name: "Anna", age: 20 },
    { id: 2, name: "Paul", age: 17 },
    { id: 3, name: "John", age: 25 },
  ];

  //filtrage aldulres(filter): parcourt le tableau entier, garde ce qu’on veut et retourne un NOUVEAU tableau.
  const adults = users1.filter((user) => user.age >= 18);

  //trouver un utilisateur précis(find): s’arrête dès qu’il trouve, donc il ne peut pas créer un tableau sans l’élément.
  //   Je parcours le tableau
  // dès que la condition est vraie
  // j’arrête et je retourne l’élément
  const userFound = users1.find((user) => user.name === "John");

  //mock 2
  const initialUsers: User[] = [
    { id: 1, name: "Anna", age: 20 },
    { id: 2, name: "Paul", age: 17 },
    { id: 4, name: "John", age: 25 },
    { id: 5, name: "Patric", age: 27 },
    { id: 6, name: "Richard", age: 15 },
    { id: 7, name: "Zoé", age: 18 },
    { id: 8, name: "Jullie", age: 20 },
    { id: 9, name: "Myriam", age: 22 },
  ];

  const [users2, setUsers2] = useState<User[]>(initialUsers);
  const [search, setSearch] = useState("");

  // const filteredUsers = users2.filter(user =>
  //   user.name.toLowerCase().includes(search.toLowerCase()) ||
  //   user.age.toString().includes(search)
  // );  OU

  // filtrage
  const filteredUsers = users2.filter((user) => {
    // Si search est vide, on garde tous les utilisateurs
    if (search.trim() === "") return true;

    // Sinon, on filtre
    return (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.age.toString().includes(search)
    );
  });

  //Modification
  const [editingUser, setEditingUser] = useState<User | null>(null);

  const [editName, setEditName] = useState("");
  const [editAge, setEditAge] = useState<number | "">("");

  return (
    <div>
      {/* <h1 className="text-xl font-semibold mb-4">Mes favoris</h1>
      <p>Aucun livre favori pour le moment.</p> */}

      {/* Rev1 */}
      {/* map: parcopurs de données */}
      {users1.map((user) => (
        <p key={user.id}>
          Je m'appelle {user.name} - et j'ai {user.age}
        </p>
      ))}

      <br />

      <h2>afficher seulement les adultes</h2>
      {/* filter: filtre seulement les données selon la condition et retourne un tableau */}

      {adults.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}

      <br />
      <h2>Afficher seulmement un nom des utilisateurs</h2>
      {userFound && <p>Son nom est {userFound.name}</p>}

      <br />

      {/* rev2 */}

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
        // value={users2.find(user => user.name === "")?.name || "Non trouvé"}
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
                    setUsers2(users2.filter((u) => u.id !== user.id))
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
            marginTop: '20px',
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
                  setUsers2(
                    users2.map((u) =>
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

export default ReaderFavorites;
