const express = require('express');
const Author = require('./models/Author');
const Book = require('./models/Book');


const app = express();
app.use(express.json());

app.get('/authors', async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

app.get('/authors/:id', async (req, res) => {
  const { id } = req.params;
  const author = await Author.getById(id);

  if (!author) return res.status(404).json({ message: 'Autor não encontrado' });

  return res.status(200).json(author);
});

app.post('/authors', async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;
  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: 'Dados inválidos!' });
  }
  await Author.create(first_name, middle_name, last_name);
  return res.status(404).json({ message: 'Autor criado com sucesso!' })
});

app.get('/books', async (req, res) => {
  const { id } = req.query;
  let books;

  if (id !== undefined) {
    books = await Book.getByAuthorId(id);
    if (!books) return res.status(404).json({ message: 'Livro não encontrado' });
  } else {
    books = await Book.getAll();
  }
  
  res.status(200).json(books);
});

app.get('/books/:id', async (req, res) => {
  const { id } = req.params;
  const books = await Book.getById(id);
  if (!books) return res.status(404).json({ message: 'Livro não encontrado' });
  return res.status(200).json(books);
});

app.post('/books', async (req, res) => {
  const { title, author_id } = req.body;
  const isDataValid = await Book.isValid(title, author_id);

  if (!isDataValid) return res.status(400).json({ message: 'Dados inválidos' });

  await Book.create(title, author_id);
  return res.status(200).json({ message: 'Livro criado com sucesso!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
