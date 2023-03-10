// Update with your config settings.

// Arquivo que possui a conecxão com o banco de dados.

const { db } = require("./.env"); // usa o 'destructuring' para pegar apenas o atributo 'db' dentro do arquivo '.env'.

module.exports = {

  // development: {
  //   client: 'sqlite3',
  //   connection: {
  //     filename: './dev.sqlite3'
  //   }
  // },

  // staging: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // },


  // production: {
    client: 'postgresql',
    connection: db,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  // }

}

// tirou bastante coise, deixando apenas a parte de dentro de 'production' diretamento no 'module.exports'.