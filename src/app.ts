import express, { Express, Request, Response, NextFunction } from "express";
import cors from "cors";
import helmet from "helmet";
import bodyParser from "body-parser";
import errorMiddleware from "./middlewares/error.middleware";
import logger from "./utils/logger.util";

export function createAppInstance(): Express {
  const app = express();

  // Middleware
  app.use(express.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cors());
  app.use(helmet());

  // Middleware for logging requests
  app.use((req: Request, res: Response, next: NextFunction) => {
    logger.info(`${req.method} ${req.url}`);
    next();
  });
  
  // Routes

  // Universal route
  app.use((req, res) => {
    res.status(404).send("404 Not Found");
  });

  // Error middleware
  app.use(errorMiddleware);

  return app;
}
