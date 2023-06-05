import { IsNumberString, IsOptional } from 'class-validator';
export class PaginationQueryDto {
  @IsNumberString()
  @IsOptional()
  limit: number;

  @IsNumberString()
  @IsOptional()
  page: number;
}
