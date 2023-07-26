import { Module } from '@nestjs/common';
import { ReportService } from './services/reports.service';

@Module({
  providers: [ReportService],
  exports: [ReportService],
})
export class ReportsModule {}
