const db = require('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    index: (req, res) =>{
        db.Product.findAll()
        .then(products =>{
            res.json(products)
        })
        .catch(() => "error")
  },
  detail: (req, res) => {
      let id = req.params.id;
      db.Product.findByPk(id)
      .then(product => {
          res.json(product)
      })
  }
}