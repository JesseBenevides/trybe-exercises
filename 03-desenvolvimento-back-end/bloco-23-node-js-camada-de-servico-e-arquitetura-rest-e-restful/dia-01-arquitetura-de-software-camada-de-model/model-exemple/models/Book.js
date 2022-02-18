const connection = require('./connection');
const Author = require('./Author');

const serialize = (bookData) => ({
  id: bookData.id,
  title: bookData.title,
  authorId: bookData.author_id,
});

// Busca todos os livros do banco.
const getAll = async () => {
  const [books] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books;'
  );
  return books.map(serialize);
};

const getById = async (id) => {
  const [bookData] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books WHERE id=? ;',
    [id],
  );
  if (bookData.length === 0) return null;
 
  return bookData.map(serialize);
}

const getByAuthorId = async (id) => {
  const [bookData] = await connection.execute(
    'SELECT id, title, author_id FROM model_example.books WHERE author_id=? ;',
    [id],
  );
  if (bookData.length === 0) return null;
 
  return bookData.map(serialize);
}

const create = async (title, author_id) => (
  await connection.execute(
    `INSERT INTO model_example.books (title, author_id)
    VALUES (?, ?);`,
    [title, author_id],
  )
);

const isValid = async (title, authorId) => {
  if (!title || title.length < 3 ) return false;
  const author = await Author.getById(authorId);
  if (!author) return false;

  return true;
}

module.exports = {
  getAll,
  getById,
  getByAuthorId,
  create,
  isValid,
};
