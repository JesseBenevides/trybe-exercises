const connection = require('./connection');

// Converte o nome dos campos de snake_case para camelCase
const serialize = (authorData) => ({
  id: authorData.id,
  firstName: authorData.first_name,
  middleName: authorData.middle_name,
  lastName: authorData.last_name
});

// Cria uma string com o nome completo do autor
const getNewAuthor = ({ id, firstName, middleName, lastName }) => {
  // Note que `Boolean` é uma função que recebe um parâmetro e retorna true ou false
  // nesse caso, se middle_name for `undefined` ou uma string vazia o retorno será `false`
  const fullName = [firstName, middleName, lastName].filter(Boolean).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    fullName
  };
};

// Busca todas as pessoas autoras do banco.
const getAll = async () => {
  const [authors] = await connection.execute(
    'SELECT id, first_name, middle_name, last_name FROM model_example.authors;'
  );
  return authors.map(serialize).map(getNewAuthor);
};

const getById = async (id) => {
  const [author] = await connection.execute(
    `SELECT id, first_name, middle_name, last_name
    FROM model_example.authors
    WHERE id=?;`,
    [id]
  );
  if (author.length === 0) return null;

  return author.map(serialize).map(getNewAuthor)[0];
}

const create = async (firstName, middleName, lastName) => (
  await connection.execute(
    `INSERT INTO model_example.authors (first_name, middle_name, last_name)
    VALUES (?, ?, ?);`,
    [firstName, middleName, lastName],
  )
);

const isValid = (firstName, middleName, lastName) => {
  if (!firstName || typeof firstName !== 'string') return false;
  if (!lastName || typeof lastName !== 'string') return false;
  if (middleName && typeof middleName !== 'string') return false;

  return true;
};

module.exports = {
  getAll,
  getById,
  create,
  isValid,
};
