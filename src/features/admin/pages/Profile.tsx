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
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Utilisateurs</h1>

            <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gradient-to-r from-blue-500 to-blue-600">
                        <tr>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                Nom
                            </th>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                Nom d'utilisateur
                            </th>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                Adresse
                            </th>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                Téléphone
                            </th>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-semibold text-white uppercase tracking-wider">
                                Site web
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {users.map((user, index) => (
                            <tr
                                key={index}
                                className={`hover:bg-gray-50 transition-colors duration-150 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                                    }`}
                            >
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-800">
                                        {user.id}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                    {user.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    <span className="font-medium text-gray-900">@</span>{user.username}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    <a href={`mailto:${user.email}`} className="text-blue-600 hover:text-blue-800 hover:underline">
                                        {user.email}
                                    </a>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    adresy
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    {user.phone}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                                    <a
                                        href={`https://${user.website}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 hover:text-blue-800 hover:underline font-medium"
                                    >
                                        {user.website}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="mt-4 text-sm text-gray-500">
                Total : {users.length} utilisateur{users.length > 1 ? 's' : ''}
            </div>
        </div>
    )
}

export default Profile
