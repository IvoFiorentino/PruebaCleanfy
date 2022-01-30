const { restart } = require('nodemon');
const db = require('../../database/models');
const Op = db.Sequelize.Op;

module.exports = {
    index: (req, res) =>{
        db.User.findAll()
            .then(users => {
                res.json(users)
            })
    },
    detail: (req,res) => {
        let id = req.params.id
        db.User.findByPk(id)
        .then(user =>{
            res.json(user)
        })  
    }
}