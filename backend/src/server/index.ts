import "module-alias/register";
import * as Hapi from "@hapi/hapi";
import path from "path";
import * as routes from "../routes/index";
import { forEach as lodashForEach } from "lodash";
import chalk from "chalk";
import logger from "./utils/logger";
import "reflect-metadata";
import { DBConnections } from "../database";
import Inert from "@hapi/inert";

const serverInit = async (): Promise<Hapi.Server> => {
  let serverRoutes: any = [];

  const server = new Hapi.Server({
    host: "localhost",
    port: 3010,
    routes: {
      cors: true,
      files: {
        relativeTo: path.join(__dirname, "public"),
      },
    },
  });

  lodashForEach(routes, (value: any, key: any) => {
    serverRoutes.push(
      ...value.map((route: any) => {
        route.path = "/api" + route.path;
        return route;
      })
    );
  });

  // @ts-ignore
  server.register(Inert);
  server.route(serverRoutes);

  return server;
};

export const startServer = async (): Promise<void> => {
  try {
    const server: Hapi.Server = await serverInit();
    server.start();
    server.events.on("response", function (request: any) {
      logger.info(
        `${chalk.cyan(
          `[${request.info.remoteAddress}]`
        )}: ${request.method.toUpperCase()} ${request.path} ${chalk.cyan(
          request.response.statusCode
        )}`
      );
    });
    console.info(chalk.white(`Server running at: ${server.info.uri} 🚀`));
    await DBConnections.init();
  } catch (e) {
    logger.error(e);
  }
};
