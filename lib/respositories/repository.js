function Repository() {
    const repo = this;

    return Object.assign(repo, {
        request: function request(url = '', method = 'GET', headers = {}, data = {},) {
            return new Promise(async (resolve, reject) => {
                fetch(url, {
                    method: method,
                    headers: {
                        'Content-Type': 'application/json',
                        ...headers
                    },
                    body: JSON.stringify(data)
                })
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
        }
    });
}

module.exports = Repository;