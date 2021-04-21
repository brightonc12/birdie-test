import * as mysql from "mysql2";

export class MysqlCon {

    public static getConnection = async () => {
        if (!MysqlCon.pool) {
            MysqlCon.pool = mysql.createPool({
                database: process.env.MYSQL_DB || 'db',
                host: process.env.MYSQL_HOST || 'localhost',
                password: process.env.MYSQL_PASSWORD || 'root',
                user: process.env.MYSQL_USER || 'root',
                waitForConnections: true,
            })
        }

        return MysqlCon.pool
    }

    private static pool: mysql.Pool
}