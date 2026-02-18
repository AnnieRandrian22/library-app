import axios from "axios";
import axiosInstance from "../API/axiosInstance";

export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
  isbn: string;
  description: string;
  coverImage: string;
  available: boolean;
  createdAt: Date;
}

interface apiBookResponse {
  id: string;
  title: string;
  author: string;
  genre: string;
  publishedYear: number;
  isbn: string;
  description: string;
  coverImage: string;
  available: boolean;
  createdAt: Date;
}

export class BookService {
  static async getBook(): Promise<Book[]> {

    const result = await axiosInstance.get<apiBookResponse[]>(
      "http://192.168.178.241:3000/api/books",
    );

    return result.data;
  }
}

