declare namespace NodeJS {
    export interface ProcessEnv {
        APP_ENV: 'development' | 'production';
        APP_DEBUG: boolean;
        APP_PORT: number;
        APP_SUPPORT: boolean;
        L5_SWAGGER_CONST_HOST: string;
        DB_CONNECTION: 'sqlite' | 'mysql' | 'postgres' | 'mssql';
        DB_PATH: string;
    }
}