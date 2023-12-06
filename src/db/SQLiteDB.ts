import Knex from 'knex';
import path from "path";

class SQLiteDB {
  private static instance: SQLiteDB;
  private db: any | null = null;
  private readonly dbPath = path.join(__dirname, "../../database.db");

  private constructor() {
    // this.init();
  }

  static async getInstance() {
    if (!SQLiteDB.instance) {
      SQLiteDB.instance = new SQLiteDB();
      await SQLiteDB.instance.init();
    }
    return SQLiteDB.instance;
  }

  private async init() {
    this.db = Knex({
      client: "sqlite3",
      connection: {
        filename: this.dbPath,
      },
      useNullAsDefault: true,
    });

    // Ajoutez des tables ici
    await this.db.schema.createTableIfNotExists("users", (table: any) => {
      table.increments("id").primary();
      table.string("name").notNullable();
    });
  }
  async enterFakeUsers() {
    try {
      // You can adjust the number of fake users as needed
      const fakeUsers = [
        { name: "John Doe" },
        { name: "Jane Doe" },
        { name: "Bob Smith" },
      ];

      await this.db("users").insert(fakeUsers);

      console.log("Fake users added successfully.");
    } catch (error) {
      console.error("Error entering fake users:", error);
    }
  }

  getDatabase() {
    return this.db;
  }
  async disconnect() {
    await this.db?.destroy();
  }

  // async connect() {
  //   this.db = await open({
  //     filename: "database.db",
  //     driver: Database,
  //   });
  // }

  // async disconnect() {
  //   await this.db?.close();
  // }

  // async run(sql: string) {
  //   await this.db?.run(sql);
  // }

  // async all(sql: string) {
  //   return await this.db?.all(sql);
  // }
}

export default SQLiteDB;

