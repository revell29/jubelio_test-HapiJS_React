import { getConnection, createConnection, Connection } from "typeorm";
import chalk from "chalk";

export class DBConnections {
  async getDefaultConnection(): Promise<Connection> {
    return await createConnection("default");
  }
  static async init(): Promise<void> {
    try {
      await new DBConnections().getDefaultConnection();
      console.log(chalk.white("database connected ⚡"));
      return Promise.resolve();
    } catch (e) {
      console.error(e);
      return Promise.reject(e);
    }
  }
}
