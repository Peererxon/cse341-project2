const express = require("express");
const bodyParser = require("body-parser");
const passport = require("passport");
const session = require("express-session");
const GithubStrategy = require("passport-github2").Strategy;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");
const db = require("./db/db");

const puppetRoutes = require("./routes/puppets");
const ownerRoutes = require("./routes/owners");
const authRoutes = require("./routes/auth");

const port = process.env.PORT || 3000;

const app = express();

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
  }),
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      CALLBACK_URL:
        "https://cse341-project2-0lo7.onrender.com/:3000/auth/github/callback",
    }, // Callback function
    (accessToken, refreshToken, profile, done) => done(null, profile),
  ),
);

// Serialize and Deserialize user cookies session
passport.serializeUser((user, done) => done(null, user));
passport.deserializeUser((user, done) => done(null, user));

app.use(bodyParser.json());

app.get("/", (req, res) => {
  // return login status from passport
  if (!req.isAuthenticated()) {
    return res.send("You are not logged in");
  }
  res.send(`You are logged as ${req.user.displayName}`);
});

app.use("/auth", authRoutes);
app.use("/puppets", puppetRoutes); // http://localhost:3000/puppets
app.use("/owners", ownerRoutes); // http://localhost:3000/owners
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// Error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    error: {
      message: err.message || "Internal Server Error",
    },
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
