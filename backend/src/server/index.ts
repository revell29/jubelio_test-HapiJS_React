import * as Hapi from "hapi";
import * as routes from "../routes/index";
import { forEach as lodashForEach } from "lodash";
import chalk from "chalk";

const serverInit = async (): Promise<Hapi.Server> => {
  let serverRoutes: any = [];
  const server = new Hapi.Server({
    host: "localhost",
    port: 3010,
  });

  lodashForEach(routes, (value: any, key: any) => {
    serverRoutes.push(
      ...value.map((route: any) => {
        route.path = "/api" + route.path;
        return route;
      })
    );
  });

  server.route(serverRoutes);
  return server;
};

export const startServer = async (): Promise<void> => {
  try {
    const server: Hapi.Server = await serverInit();
    server.start();
    console.info(chalk.white(`Server running at: ${server.info.uri}`));
  } catch (error) {
    console.error(error);
  }
};
