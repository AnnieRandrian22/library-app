import React, { useEffect, useState } from "react";
import { userService } from "../services/userService";

export type User = {
  id: number;
  name: string;
  age: number;
};

const useUsers = () => {


   const [users, setUsers] = useState<User[]>([]);
    const [search, setSearch] = useState("");

    //miantso anéilay service
    useEffect(() => {
        setUsers(userService.getUsers())
    }, [])
  
    // const filteredUsers = users2.filter(user =>
    //   user.name.toLowerCase().includes(search.toLowerCase()) ||
    //   user.age.toString().includes(search)
    // );  OU
  
    // filtrage
    const filteredUsers = users.filter((user) => {
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

  return {
    users,
    filteredUsers,
    search,
    setUsers,
    setSearch,
    editingUser,
    setEditingUser,
    setEditAge,
    setEditName,
    editAge,
    editName
  }
};

export default useUsers;
