import {DataSource} from 'typeorm';
import { User } from '../entities/user.entity';


export const DBDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "test",
    password: "test",
    database: "test",
    entities: [User],
    logging: true,
    synchronize: true,
})
