import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

mongoose.set('strictQuery', false);
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

if (dbPassword) {
    const mongoDB = 'mongodb://127.0.0.1:27017/capas';
    mongoose.connect(mongoDB, {
        useNewUrlParser: true,
    });
    mongoose.connection.on('error', err => console.log(`DB connection ERR! ${err}`));
    mongoose.connection.once('open', () => console.log(`DB ${dbName} connected successfully at ${mongoDB}\n`));
} else {
    console.error(`DB connection ERR!`);
}