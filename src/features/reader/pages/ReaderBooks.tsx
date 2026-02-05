const ReaderBooks = () => {
  const books = ["React Basics", "TypeScript Guide", "Clean Code"];

  return (
    <div>
      <h1 className="text-xl font-semibold mb-4">Liste des livres</h1>

      <ul className="space-y-2">
        {books.map((book, index) => (
          <li key={index} className="p-3 bg-white rounded shadow">
            {book}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReaderBooks;
