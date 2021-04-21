import {Pool} from "mysql2";
import application from "./application";
import {configDependency} from './config/dependencies'
import {MysqlCon} from "./frameworks/persistance/database/MySqlCon";

const port = process.env.PORT || 4000

MysqlCon.getConnection().then((pool: Pool) => {
    const dependencies = configDependency(pool)
    const app = application(dependencies)
    app.listen(port, () => {
        // tslint:disable-next-line:no-console
        console.log(`http://localhost:${port}`)
    })
}, (err: Error) => {
    // tslint:disable-next-line:no-console
    console.log(`Database is not ready: error: ${err.message}`)
})
