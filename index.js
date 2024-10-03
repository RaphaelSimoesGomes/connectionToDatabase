const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'mysql',
})

connection.connect();

connection.query('SELECT * FROM users', (error, results, fields) => {
  if (error) throw error;
  console.log(results);
});

// const user = { id: 1, name: 'João', age: 28 };

// // Query de INSERT
// const query = 'INSERT INTO users (id, name, age) VALUES (1, "Robertinho", 12)';

// // Executa a query
// connection.query(query, [user.id, user.name, user.age], (error, results, fields) => {
//   if (error) {
//     console.error('Erro ao inserir os dados: ' + error.stack);
//     return;
//   }
//   console.log('ID do novo registro: ' + results.insertId);
// });


// connection.query(query, (error, results, fields) => {
//   if (error) throw error;
//   console.log(results);
// });

connection.end();