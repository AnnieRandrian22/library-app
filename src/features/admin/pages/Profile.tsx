import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Profile = () => {

    type User = {
        id: number;
        name: string;
        username: string;
        email: string;
        phone: string;
        website: string;
    };
    const [users, setUsers] = useState<User[]>([])

    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/users')
    //         .then(response => response.json())
    //         .then(json => setUsers(json))
    // }, [])



    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/users")
            .then((response) => {
                setUsers(response.data);
            })
            .catch((error) => {
                console.error("misy erreur", error);
            });
    }, []);

    return (
        <div>
            <h1>Utilisateurs</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>Nom d'utilisateur</th>
                        <th>Email</th>
                        <th>Adresse</th>
                        <th>Phone</th>
                        <th>Site web</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>adresy</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                            </tr>
                        ))
                    }
                    <tr>

                    </tr>
                </tbody>
            </table>

        </div>
    )
}

export default Profile
