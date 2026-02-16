export interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
}

let mockBooks: Book[] = [
  { id: 1, title: "Clean Code", author: "Robert Martin", available: true },
  { id: 2, title: "Atomic Habits", author: "James Clear", available: false },
  { id: 3, title: "Deep Work", author: "Cal Newport", available: true },
];

// GET /books
export const fetchBooksApi = (): Promise<Book[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve([...mockBooks]), 800);
  });
};

// POST /books
export const createBookApi = (book: Omit<Book, "id">): Promise<Book> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const newBook = { id: Date.now(), ...book };
      mockBooks.push(newBook);
      resolve(newBook);
    }, 800);
  });
};

// PUT /books/:id
export const updateBookApi = (id: number, data: Partial<Book>): Promise<Book> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const index = mockBooks.findIndex((b) => b.id === id);
      if (index === -1) return reject("Book not found");

      mockBooks[index] = { ...mockBooks[index], ...data };
      resolve(mockBooks[index]);
    }, 800);
  });
};

// DELETE /books/:id
export const deleteBookApi = (id: number): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      mockBooks = mockBooks.filter((b) => b.id !== id);
      resolve();
    }, 800);
  });
};
