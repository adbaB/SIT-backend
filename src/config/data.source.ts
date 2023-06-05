import { DataSource, DataSourceOptions } from 'typeorm';

export const DataSourceConfig: DataSourceOptions = {
  type: 'mariadb',
  host: '192.160.32.35',
  port: 3306,
  username: 'usuarios',
  password: '',
  database: 'SATRICA',
  entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsRun: true,
  logging: false,
};

export const AppDS = new DataSource(DataSourceConfig);
