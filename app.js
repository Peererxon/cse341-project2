const express = require("express");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger/swagger.json");
const db = require("./db/db");

const puppetRoutes = require("./routes/puppets");
const ownerRoutes = require("./routes/owners");

const port = process.env.PORT || 3000;

const app = express();

app.use(bodyParser.json());
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
