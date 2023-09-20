const express = require("express");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const path = require("path"); // Import the 'path' module

const app = express();
const port = process.env.PORT || 5000;

// Serve the OpenAPI YAML file
app.use("/openapi", express.static(path.join(__dirname, "openapi")));

// Swagger setup
const options = {
  swaggerDefinition: {
    openapi: "3.0.3",
    info: {
      title: "GCP Project, Resource, and Role API",
      version: "1.0.0",
      description:
        "API to retrieve projects, resources, roles, and permissions in Google Cloud Platform (GCP)",
    },
  },
  apis: ["./routes/*.js"], // Path to your route files
};

const specs = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Routes
app.use("/projects", require("./routes/projects"));
app.use("/projects/:projectId/resources", require("./routes/resources"));
app.use(
  "/projects/:projectId/resources/:resourceId/roles",
  require("./routes/roles")
);

app.get("*", (req, res) => {
  console.log(req.params);
  console.log(req);
  res.status(404).send("Page Not Found");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
