const express = require('express');
const sequelize = require('sequelize');
const routes = require('./routes');
// import sequelize connection
const sequelizeConn = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelizeConn.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`); 
})
});
