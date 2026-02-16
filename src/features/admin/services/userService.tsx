import type { User } from "../hooks/useUsers";

 
 
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

  export class userService {
    static getUsers(): User[]{

        // // const users = axios.get('http://192.168.56.24:3000/api/users')
        // const users = axios //axios quité
        return initialUsers
    }
  }