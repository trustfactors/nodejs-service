const routes = require('express').Router();
const AccountsController = require("./accounts.controller");
const Middlewares = require('../middlewares/middlewares');

const fs = require("fs");

function appRoutes(config) {
    const _accountsController = new AccountsController();
    const _middlewares = new Middlewares();

    routes.get('/health-check', (request, response) => {
        return response.status(200).json({
            health: "OK"
        });
    });

    routes.get('/accounts', _middlewares.isAuthenticated, _accountsController.getAccounts);
    routes.post('/accounts', _middlewares.isAuthenticated, _accountsController.createAccount);

    return routes
}

module.exports = appRoutes;