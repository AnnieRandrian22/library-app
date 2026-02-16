import { createBookApi, deleteBookApi, fetchBooksApi, updateBookApi, type Book } from "../API/endPointsBooks";


export const getBooks = async (): Promise<Book[]> => {
  return await fetchBooksApi();
};

export const addBook = async (book: Omit<Book, "id">) => {
  return await createBookApi(book);
};

export const editBook = async (id: number, data: Partial<Book>) => {
  return await updateBookApi(id, data);
};

export const removeBook = async (id: number) => {
  return await deleteBookApi(id);
};
