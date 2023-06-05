import { IsOptional, IsDateString, IsString } from 'class-validator';
import { PaginationQueryDto } from './paginatio-query.dto';
export class FindReciboDto extends PaginationQueryDto {
  @IsOptional()
  @IsDateString()
  fechaInicio: Date;
  @IsOptional()
  @IsDateString()
  fechaFinal: Date;
  @IsOptional()
  @IsString()
  Ispagado: string;
}
