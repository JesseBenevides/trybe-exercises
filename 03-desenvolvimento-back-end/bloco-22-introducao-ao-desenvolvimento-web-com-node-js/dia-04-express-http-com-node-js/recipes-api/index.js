const express = require('express');
const bodyParser = require('body-parser');
const { sortRecipesByName } = require('./sortRecipes');

const app = express();
app.use(bodyParser.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Água Mineral 500 ml', price: 5.0 },
];

// ROTAS GET RECIPES

app.get('/recipes/search', function (req, res) {
  const { name, maxPrice, minPrice } = req.query;
  const filteredRecipes = recipes.filter((r) => (
    r.name.includes(name)
    && r.price < parseInt(maxPrice)
    && r.price > parseInt(minPrice)
  ));
  res.status(200).json(filteredRecipes);
});

app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

app.get('/recipes', function (req, res) {
  const sortedRecipes = sortRecipesByName(recipes);
  res.status(200).json(sortedRecipes);
});

//ROTAS POST RECIPES
app.post('/recipes', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  recipes.push({ id, name, price, waitTime});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

// ROTAS GET DRINKS
app.get('/drinks/search', function (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((d) => (
    d.name.includes(name)
  ));
  res.status(200).json(filteredDrinks);
});

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params;
  const drink = drinks.find((d) => d.id === parseInt(id));

  if (!drink) return res.status(404).json({ message: 'Drink not found!'});

  res.status(200).json(drink);
});

app.get('/drinks', function (req, res) {
  const sortedDrinks = sortRecipesByName(drinks);
  res.status(200).json(sortedDrinks);
});
//ROTAS POST DRINKS
app.post('/drinks', function (req, res) {
  const { id, name, price } = req.body;
  drinks.push({id, name, price});
  res.status(201).json({message: 'Drink created successfully!'})
});

//VALIDANDO TOKEN NO HEADER
app.get('/validateToken', function (req, res) {
  const token = req.headers.authorization;
  if (token.length !== 16) return res.status(401).json({message: 'Invalid Token!'});

  res.status(200).json({message: 'Valid Token!'})
});

// HTTP Listener
app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
});