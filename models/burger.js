const orm = require('../config/orm.js')

const burger = {
  selectAll(cb) 
    db.query('SELECT * FROM burgers'), (err, burgers) => {
      if (err) throw err
      cb(burgers)
    })

  insertOne(burger, cb) {
    db.query('INSERT INTO burgers SET ?', item, err => {
      if (err) throw err
      cb()
    })
  }
  updateOne(updates, id, cb) {
    db.query('UPDATE ITEMS SET? WHERE?', [updates, { id: id }], err => {
      if (err) throw err
      cb()
    })
  } 


module.exports = burger 