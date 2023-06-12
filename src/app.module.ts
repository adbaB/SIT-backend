import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { configModule } from './config/config.module';
import { DatabaseModule } from './databases/database.module';
import { RecibosModule } from './recibos/recibos.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    configModule,
    DatabaseModule,
    RecibosModule,
    UsersModule,
    CommonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
