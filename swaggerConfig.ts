import { productsSwaggerDefinitions, productsSwaggerPaths } from "./src/components/products/v1/web/products.swagger";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Open Fabric API",
      version: "1.0.0",
      description: "API for managing users and products",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
      },
    ],
    components: {
      schemas: {
        ...productsSwaggerDefinitions,
      },
    },
    paths: {
      ...productsSwaggerPaths,
    },
  },
  apis: [
    "./src/components/products/v1/web/products.routes.ts",
    "./src/components/health/v1/health.routes.ts",
  ],
};

export default swaggerOptions;
