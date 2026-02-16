import { useEffect, useState } from "react";


import { addBook, editBook, getBooks, removeBook } from "../services/useBooks";
import type { Book } from "../API/endPointsBooks";

const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  //GET
  const loadBooks = async () => {
    setLoading(true);
    const data = await getBooks();
    setBooks(data);
    setLoading(false);
  };

  useEffect(() => {
    loadBooks();
  }, []);

  const handleAddBook = async () => {
    await addBook({
      title: "New Book",
      author: "Unknown",
      available: true,
    });
    loadBooks();
  };

  //modification status book (PUT)
  const handleToggleAvailability = async (book: Book) => {
    await editBook(book.id, { available: !book.available });
    loadBooks();
  };

  //DELETE
  const handleDelete = async (id: number) => {
    await removeBook(id);
    loadBooks();
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase()),
  );

  return {
    books,
    setBooks,
    search,
    setSearch,
    loading,
    setLoading,
    handleAddBook,
    handleToggleAvailability,
    handleDelete,
    filteredBooks

  };
};

export default useBooks;
