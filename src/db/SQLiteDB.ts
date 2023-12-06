import {Sequelize} from "sequelize";
import path from "path";
import {initializeUserModel} from "../models/userModel";

type SequelizeDialect = 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql';

export default class SQLiteDB {
    private static instance: SQLiteDB;
    private db: Sequelize | null = null;
    private readonly dbPath =
        process.env.DB_PATH || path.resolve(__dirname, "../../db/db.sqlite");
    private readonly dbConnection = (process.env.DB_CONNECTION || "sqlite") as SequelizeDialect;
    // private readonly dbHost = process.env.DB_HOST || "localhost";
    // private readonly dbPort = process.env.DB_PORT || 3306;
    // private readonly dbName = process.env.DB_NAME || "database";
    // private readonly dbUsername = process.env.DB_USERNAME || "root";
    // private readonly dbPassword = process.env.DB_PASSWORD || null;
    private readonly isDebug = (process.env.APP_DEBUG || true) as boolean;

    private constructor() {
        console.log("SQLiteDB constructor")
        this.init().catch((error) => {
            console.error("Une erreur est survenue lors de l'initialisation de la base de données", error);
            process.exit(1);
        });
    }

    private async init() {
        this.db = new Sequelize({
            dialect: this.dbConnection,
            storage: this.dbPath,
            logging: this.isDebug,
        });
        this.initModels();

        await this.db.sync({force: true});
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

    private initModels() {
        initializeUserModel(this.db!);
    }
}
