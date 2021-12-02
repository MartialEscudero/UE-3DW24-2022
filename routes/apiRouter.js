const express = require('express');
const usersCtrl = require("../controllers/usersCtrl")

exports.router = (function() {
    const apiRouter = express.Router();
    apiRouter.route('/users/').get(usersCtrl.getAllUsers);
    apiRouter.route('/users/:id/').get(usersCtrl.getUserId);
    apiRouter.route('/deleteuser/').delete(usersCtrl.deleteUser);
    apiRouter.route('/createuser/').post(usersCtrl.createUser);
    apiRouter.route('/updateuser/').put(usersCtrl.updateUser);
    return apiRouter;
})();