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
        const { host, databaseName, username, password, port, schema } =
          configService.database;

        return {
          type: 'postgres',
          host,
          port,
          schema,
          username,
          password,
          database: databaseName,
          entities: [],
          synchronize: true,
          logging: true,
        };
      },
    }),
  ],

  exports: [TypeOrmModule],
})
export class DatabaseModule {}
