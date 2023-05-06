import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";

export function createAppInstance(): Express {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  app.use(helmet());

  // Routes

  // Universal route
  app.use((req, res) => {
    res.status(404).send("404 Not Found");
  });

  return app;
}
