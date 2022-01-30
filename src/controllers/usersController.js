const path = require("path");
const fs = require("fs");
const bcrypt = require("bcryptjs");
// const { validationResult } = require("express-validator");
// const User = require("../model/User.js");
const salt = bcrypt.genSaltSync(10);
const db = require("../database/models");

const usersController = {
  login: (req, res) => res.render("login"),

  processLogin: function (req, res) {
    let promUser = db.User.findAll({
      where: {email: req.body.email}})
      .then(result=>{
        userInDB = result
      if(userInDB.length == 0){
        return res.render('login', { errors: {
          email: {
            msg: 'El email ya esta registrado'
          }
        },
        oldData: req.body
      });
    }else{
      // Chequear password
      if (!bcrypt.compareSync(req.body.password, userInDB[0].dataValues.password)){
          return res.render('login',{
              errors: {
                  password: {
                      msg: 'Contraseña incorrecta'
                  }
              },
              oldData: req.body
          });
      }else{
        // Usuario OK para loguear
        delete userInDB.password;
        req.session.user = userInDB[0].dataValues;
        if(req.body.rememberme){
            res.cookie('rememberme', req.body.email, {maxAge: (1000 * 60) * 60})
        }
     return res.render("profile", {User : userInDB[0]});
 
    }
}
}) /* Fin del select db.usuario.findAll */
},
  usersProfile: (req, res) => {
    res.render("profile",
    {user: req.session.user}
)},

register: (req, res) => res.render("register"),

  //Crea nuevo usuario//
 newUser: function (req, res) {
     let userInDB = db.User.findOne({
        where: {
          email: req.body.email,
        },
      })
      .then((user) => {
        if (user) {
          res.render("register", {
            errors: {
              email: {
                msg: "Este Email ya se encuentra registrado",
              },
            },
          });
        }
      })
      .catch((error) => console.log(error));

      db.User.create( 
          {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            image:req.file?req.file.filename:'default.png',
            password: bcrypt.hashSync(req.body.password, 10),
            users_category: 2,

          })

          .then(function () {
            res.render("login");
          })
          .catch((error) => console.log(error));
      },

  //Muestra un  usuario para editarlo//
  editUsers: function (req, res) {
    db.User.findByPk(req.params.id)
      .then(function(userToEdit) {res.render("usersEdit", {User: req.session.user})
    })
      .catch((error) => console.log(error));
  },
  //Edita un usuario//
  updateUsers: function(req, res){
    const validation = validationResult(req);
    if (validation.errors.length > 0) {
      res.render("usersEdit", {
        errors: validation.mapped(),
        oldData: req.body,
        users: {
          id: req.params.id,
        },
      });
    } else {
      db.User.update(
        {
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          image:req.file?req.file.filename:'default.png',
          password: req.session.password,
          users_category: 2,
        },
        {
            where: {id: req.params.id}
        })
        .then(()=>{ return res.redirect("/index")})
        .catch((errors) => console.log(errors));
  }},
  //Elimina un usuario//
  usersDelete: (req, res) => {
    res.render("deleteUsers")},

  deleteUsers: (req, res) => {
    db.User.destroy({where:{id: req.params.id}, force: true})
      .then(() => {return res.redirect("/index")})
      .catch((err) => console.log(err));
  },

  //para cuando cierra sesion
  logOut: (req, res) => {
    req.session.destroy();
    return res.redirect("/");
  },
  
};
module.exports = usersController;