import { Sequelize } from "sequelize";
import path from "path";

type SequelizeDialect = 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql';

export default class SQLiteDB {
  private static instance: SQLiteDB;
  private db: Sequelize | null = null;
  private readonly dbPath =
    process.env.DB_PATH || path.resolve(__dirname, "../../db/db.sqlite");
  private readonly dbConnection = (process.env.DB_CONNECTION || "sqlite") as SequelizeDialect;

  private constructor() {
    this.init();
  }

  private init() {
    this.db = new Sequelize({
      dialect: this.dbConnection,
      storage: this.dbPath,
      logging: process.env.APP_DEBUG === "true",
    });
  }

  static getInstance() {
    if (!SQLiteDB.instance) {
      SQLiteDB.instance = new SQLiteDB();
    }
    return SQLiteDB.instance;
  }

  getDB() {
    return this.db;
  }
}
