import swaggerAutogen from "swagger-autogen";
const swagger = swaggerAutogen();
import config from "config";

const doc = {
  info: {
    app_version: config.get("app_version") ?? "1.0.0",
    title: "Socinator API`s",
    description: "Documentation",
  },
  host: config.get("swagger_host_url"),
  basePath: "/", // by default: "/"
  schemes: ["http", "https"], // by default: ['http']
  consumes: ["application/json", "application/x-www-form-urlencoded"],
  produces: ["application/json"],
  tags: [],

  securityDefinitions: {
    AccessToken: {
      type: "apiKey",
      in: "header",
      name: "x-access-token",
      description:
        "Please provide the valid access token, if you don't have please login and get the token as response!",
    },
  }, // by default: empty object
  definitions: {},
};

const outputFile = "./views/swagger-api-view.json";
const endpointsFiles = ["./server.js"];

/* NOTE: if you use the express Router, you must pass in the
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */

await swagger(outputFile, endpointsFiles, doc);
