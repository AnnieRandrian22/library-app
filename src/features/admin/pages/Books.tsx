import useBooks from "../hooks/useBooks";

const Books = () => {
  const {
    books,
    setBooks,
    search,
    setSearch,
    loading,
    setLoading,
  } = useBooks();

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">Books Management</h1>

          <button
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            Add Book
          </button>
        </div>

        {/* Search */}
        <input
          type="text"
          placeholder="Search by title..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Loading */}
        {loading && <p className="text-center text-gray-500">Loading...</p>}

        {/* Books List */}
        <div className="space-y-4">
          {books.map((book) => (
            <div
              key={book.id}
              className="flex justify-between items-center bg-gray-50 p-4 rounded-lg shadow-sm hover:shadow-md transition"
            >
              {/* Info */}
              <div>
                <h2 className="font-semibold text-gray-800">{book.title}</h2>
                <p className="text-sm text-gray-600">{book.author}</p>

                {/* Status Badge */}
                <span
                  className={`inline-block mt-2 px-3 py-1 text-xs font-semibold rounded-full ${
                    book.available
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {book.available ? "Available" : "Borrowed"}
                </span>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  className="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-2 rounded-lg transition"
                >
                  Toggle
                </button>

                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
