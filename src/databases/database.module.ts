import { Global, Module } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import config from 'src/config/configDatabase';

@Global()
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      inject: [config.KEY],
      useFactory: (configService: ConfigType<typeof config>) => {
        const { host, databaseName, username, password, port } =
          configService.database;
        console.log(host, databaseName, username, password, port);
        return {
          type: 'mariadb',
          host,
          port,
          username,
          password,
          database: databaseName,
          entities: [__dirname + '/../**/**/*.entity{.ts,.js}'],
          migrations: [__dirname + '/../**/**/*.migration{.ts,.js}'],
          synchronize: false,
          migrationsRun: true,
          logging: true,
        };
      },
    }),
  ],

  exports: [TypeOrmModule],
})
export class DatabaseModule {}
