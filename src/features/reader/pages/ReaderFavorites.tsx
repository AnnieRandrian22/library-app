import { useState } from "react";

type User = {
  id: number,
  name: string,
  age: number
}
const ReaderFavorites = () => {

  //mock 1
  const users1: User[] = [
    { id: 1, name: "Anna", age: 20 },
    { id: 2, name: "Paul", age: 17 },
    { id: 3, name: "John", age: 25 },
  ];

  //filtrage aldulres(filter): parcourt le tableau entier, garde ce qu’on veut et retourne un NOUVEAU tableau.
  const adults = users1.filter(user => user.age >= 18);

  //trouver un utilisateur précis(find): s’arrête dès qu’il trouve, donc il ne peut pas créer un tableau sans l’élément.
  //   Je parcours le tableau
  // dès que la condition est vraie
  // j’arrête et je retourne l’élément
  const userFound = users1.find(user => user.name === "John")


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


  return (
    <div>
      {/* <h1 className="text-xl font-semibold mb-4">Mes favoris</h1>
      <p>Aucun livre favori pour le moment.</p> */}


      {/* Rev1 */}
      {/* map: parcopurs de données */}
      {users1.map(user => (
        <p key={user.id}>
          Je m'appelle {user.name} - et j'ai {user.age}
        </p>
      ))}

      <br />

      <h2>afficher seulement les adultes</h2>
      {/* filter: filtre seulement les données selon la condition et retourne un tableau */}

      {adults.map(user => (
        <p key={user.id}>
          {user.name}
        </p>
      ))}

      <br />
      <h2>Afficher seulmement un nom des utilisateurs</h2>
      {userFound && <p>Son nom est {userFound.name}</p>}


      <br />


      {/* rev2 */}

      <table style={{ borderCollapse: 'collapse', width: '100%' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Id</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Nom</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Age</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {users2.map(user =>
            <tr key={user.id}>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.id}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.name}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>{user.age}</td>
              <td style={{ border: '1px solid black', padding: '8px' }}>
                <button className="buttonStyle">Supprimer</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>



  );
};

export default ReaderFavorites;
