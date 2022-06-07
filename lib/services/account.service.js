
function AccountService() {
  const svc = this;
  const _repository = new Repository();

  const ACCOUNT_API_BASE_URL = `${"host"}`;

  return Object.assign(svc, {
    getAccounts: function getAccounts(body, params, query) {
      const url = `/${ACCOUNT_API_BASE_URL}/accounts`;
      const headers = {
        "x-id": "sample"
      };

      return new Promise(async (resolve, reject) => {
        _repository.request(url, 'GET', headers)
          .then((resp) => {
            return resp.json();
          })
          .then((resp) => {
            resolve(resp);
          })
          .catch((error) => {
            reject(error);
          });
      });
    },
    createAccount: function createAccount(body, params, query) {
      const url = `/${ACCOUNT_API_BASE_URL}/accounts`;
      const headers = {
        "x-id": "sample"
      };

      return new Promise(async (resolve, reject) => {
        _repository.request(url, 'POST', headers, body)
          .then((resp) => {
            return resp.json();
          })
          .then((resp) => {
            // Here manupulate response
            // Call other services to combine response
            // Do all manuoulation stuff here
            resolve(resp);
          })
          .catch((error) => {
            // Manupulate errors and pass to reject
            reject(error);
          });
      });
    }
  });
}

module.exports = AccountService;