const createError = require("http-errors");
const passport = require("passport");
const router = require("express").Router();
const { httpStatus } = require("../utils/HttpStatus");

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) {
      return next(createError(httpStatus.SERVER_ERROR, err));
    }
  });
  res.redirect("/");
});

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] }),
);

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: "/api-docs" }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect("/");
  },
);

module.exports = router;
