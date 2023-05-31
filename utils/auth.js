// This is middleware for restricting routes a user is not allowed to visit if not logged in
const withAuth = (req, res, next) => {
  //console.log(req.session);
  if (!req.session.user_id) {
    res.redirect("/login");
  } else {
    next();
  }
};

module.exports = withAuth;
