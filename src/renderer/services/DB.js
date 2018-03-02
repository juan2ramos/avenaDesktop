import settings from 'electron-settings'

const promise = require('bluebird')
const initOptions = {
  promiseLib: promise
}
const pgp = require('pg-promise')(initOptions)
const data = {}
data.cn = {
  user: settings.get('DB.user'),
  host: settings.get('DB.host'),
  database: settings.get('DB.database'),
  password: settings.get('DB.password'),
  port: settings.get('DB.port')
}

data.setConfig = function () {
  data.cn = {
    user: settings.get('DB.user'),
    host: settings.get('DB.host'),
    database: settings.get('DB.database'),
    password: settings.get('DB.password'),
    port: settings.get('DB.port')
  }
}
data.db = pgp(data.cn)
data.setData = function (dataUser) {
  settings.set('DB', {
    user: dataUser.user,
    host: dataUser.host,
    database: dataUser.db,
    password: dataUser.pass,
    port: dataUser.port
  })
  data.setConfig()
  data.db = pgp(data.cn)
  return data.db.connect()
}
data.check = function () {
  return data.db.connect().then(data => {
    return data.any('SELECT * FROM products', [true])
  })
}
data.products = function () {
  this.db.query('SELECT * FROM products', [true]).then((data) => {
    console.log(data)
  })
}
// data.data = db.any('SELECT * FROM products', [true])

export default data
