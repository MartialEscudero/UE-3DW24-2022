const models = require("../models")

module.exports = {
    getAllUsers: function(req, res) {
        models.User.findAll()
        .then(function(user) {
            res.status(201).json(user);
        })
    },

    getUserId: function(req, res) {
        models.User.findByPk(req.params.id)
        .then(function(user) {
            res.status(201).json(user);
        })
    },

    deleteUser: function(req, res) {
        models.User.destroy({ where: { id: req.body.id } })
        .then(function() {
            res.status(201).json({"Status" : "Utlisateur n°" + req.body.id + " supprimé"});
        })
    },

    createUser: function(req, res) {
        models.User.create({ firstname: req.body.firstname, lastname : req.body.lastname })
        .then(function() {
            res.status(201).json({"Status" : "Utlisateur " + req.body.firstname + " " + req.body.lastname + " ajouté"});
        })
    },

    updateUser: function(req, res) {
        models.User.update({ firstname: req.body.firstname, lastname : req.body.lastname } , { where: { id: req.body.id } })
        .then(function() {
            res.status(201).json({"Status" : "Utlisateur n°" + req.body.id + " mis à jour"});
        })
    }
}