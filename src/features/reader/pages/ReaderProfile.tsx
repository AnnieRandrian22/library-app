import { useState } from "react";

const ReaderProfile = () => {

  type Product = {
    id: number;
    name: string;
    price: number;
    category: string;
  };

  const products: Product[] = [
    { id: 1, name: "PC", price: 1200, category: "tech" },
    { id: 2, name: "Clavier", price: 50, category: "tech" },
    { id: 3, name: "Chaise", price: 80, category: "meuble" },
    { id: 4, name: "Table", price: 200, category: "meuble" }
  ];

  const nameProduit = products.find(produit => produit.name === "PC")

  const [prodTech, setProdTech] = useState([]);
  const produitTech = products.filter(produit => produit.category === "tech")

  const chaise = products.find(produit => produit.name == "Chaise")
  const filterdChaiseTransform = chaise ? { label: chaise.name, cost: chaise.price } : null;

  return (
    <div>
      {/* <h1 className="text-xl font-semibold mb-4">Mon profil</h1>

      <p><strong>Email :</strong> reader@test.com</p>
      <p><strong>Rôle :</strong> Reader</p> */}

      {nameProduit && <p>{nameProduit.name}</p>}

      {produitTech.map((produit) =>
        <ul>
          <li>{produit.id}</li>
          <li>{produit.name}</li>
          <li>{produit.price}</li>
          <li>{produit.category}</li>
        </ul>
      )
      }

      {filterdChaiseTransform && (
        <p>{filterdChaiseTransform.label} - {filterdChaiseTransform.cost} €</p>
      )}

    </div>
  );
};

export default ReaderProfile;

