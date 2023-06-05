import {
  IsDateString,
  IsNumber,
  IsString,
  IsPositive,
  IsNotEmpty,
} from 'class-validator';

export class CreateReciboDto {
  recibo_id: number;
  numeroDocumento: number;
  fecha: Date;
  numeroControl: number;
  idRmfi: string;
  idContribuyente: string;
  denominacion: string;
  codigo: string;
  referencia: string;
  detalle: string;
  monto: number;
  idBanco: number;
  observancion: string;
  liquidador: string;
  liquidadorReferencia: string;
  fechaLiquidacion: Date;
  petroLiquidacion: number;
  cajero: string;
  stSolven: number;
  hora: Date;
  numeroCaja: number;
  estado: number;
}
