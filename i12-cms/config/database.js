const { parse } = require("pg-connection-string");

module.exports = ({ env }) => {
if(env('NODE_ENV') === 'production'){
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host,
          port,
          database,
          username: user,
          password,
          ssl: { rejectUnauthorized: false }
        },
        options: {
          ssl: false
        },
      },
    },
  };
}else{
  const { host, port, database, user, password } = parse(env("DATABASE_URL"));
  return {
    defaultConnection: "default",
    connections: {
      default: {
        connector: "bookshelf",
        settings: {
          client: "postgres",
          host,
          port,
          database,
          username: user,
          password,
          ssl: { rejectUnauthorized: false }
        },
        options: {
          ssl: false
        },
      },
    },
  };
}

};