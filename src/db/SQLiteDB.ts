import { Sequelize } from 'sequelize';
import path from 'path';

class SQLiteDB {
  private static instance: SQLiteDB;
  private db: Sequelize | null = null;
  private readonly dbPath = path.join(__dirname, "../../database.db");

  private constructor() {
    this.init();
  }

  private init() {
    this.db = new Sequelize({
      dialect: 'sqlite',
      storage: this.dbPath,
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

export default SQLiteDB;