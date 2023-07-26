import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { configModule } from './config/config.module';
import { DatabaseModule } from './databases/database.module';
import { RecibosModule } from './recibos/recibos.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ContribuyenteModule } from './contribuyente/contribuyente.module';
import { ReportsModule } from './report/reports.module';
@Module({
  imports: [
    configModule,
    DatabaseModule,
    RecibosModule,
    UsersModule,
    CommonModule,
    AuthModule,
    ContribuyenteModule,
    ReportsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
