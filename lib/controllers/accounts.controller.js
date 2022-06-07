const AccountService = require("../services/account.service");

function AccountsController() {
  const ctrl = this;
  const _accountService = new AccountService();

  return Object.assign(ctrl, {
    getAccounts: function getAccounts(req, res) {
      _accountService.getAccounts(req.body, req.params, req.query)
        .then(data => {
          res.status(200).send(data).end();
        })
        .catch(error => {
          res.status(500).send(error).end();
        });
    },
    createAccount: function createAccount(req, res) {
      _accountService.createAccount(req.body, req.params, req.query)
        .then((data) => {
          res.status(data.status).send(data).end();
        })
        .catch((error) => {
          res.status(error.status).send(error).end();
        });
    }
  });
}

module.export = AccountsController;