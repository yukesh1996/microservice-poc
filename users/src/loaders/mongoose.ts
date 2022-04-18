import mongoose from 'mongoose';
import config from '../config';
import Logger from './logger';

export default async (): Promise<any> => {
  Logger.info(`✌️ DB Yet to connect! ${config.databaseURL}`);
  const connection = await mongoose.connect(config.databaseURL, { useNewUrlParser: true, useCreateIndex: true });
  return connection.connection.db;
};
