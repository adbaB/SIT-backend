import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { configModule } from './config/config.module';
import { DatabaseModule } from './databases/database.module';

@Module({
  imports: [configModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
