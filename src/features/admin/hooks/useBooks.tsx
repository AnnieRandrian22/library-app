import { useEffect, useState } from "react";
import { BookService, type Book } from "../services/bookService";




const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  //GET
  const loadBooks = async () => {
    setLoading(true);
    const data = await BookService.getBook();
    setBooks(data);
    setLoading(false);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  return {
    books,
    setBooks,
    search,
    setSearch,
    loading,
    setLoading,

  };
};

export default useBooks;
