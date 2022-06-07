function Middlewares() {
  const mdlr = this;

  return Object.assign(mdlr, {
    isAuthenticated: function isAuthenticated(req, res, next) {
      next();
    }
  });
}

module.export = middlewares;