import {FieldPacket, OkPacket, Pool, ResultSetHeader, RowDataPacket} from "mysql2";

export const SqlQuery = (pool: Pool, query: string) => new Promise(
    (
        (
            resolve: (
                value: {
                    rows: RowDataPacket[] |
                        (RowDataPacket[])[] |
                        OkPacket | OkPacket[] |
                        ResultSetHeader, fields: FieldPacket[]
                }) => void,
            reject: (reason: any) => void
        ) => {
            pool.query(query, (err, rows, fields) => {
                if (err || !rows) {
                    reject(err)
                }
                resolve({rows, fields})
            })
        })
)

