module.exports = {
  HOST: "localhost",
  USER: "polaris",
  PASSWORD: "polaris",
  DB: "polaris",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
