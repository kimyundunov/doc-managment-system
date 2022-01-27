const Sequelize = require('sequelize')
const fs = require('fs')
const files = fs.readdirSync(__dirname).map(filename => filename.slice(0, -3)).filter(filename => filename !== 'index')

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  port: process.env.DB_PORT,
  define: {
    charset: 'utf8',
    collate: 'utf8_general_ci', 
    timestamps: true
  },
  logging:false
})

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize

// models
files.forEach((filename) => {
  db[filename] = require(`./${filename}`)(sequelize, Sequelize.DataTypes)
})

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

module.exports = db