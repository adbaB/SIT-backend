import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'recibos' })
export class Recibo {
  @PrimaryGeneratedColumn('increment')
  recibo_id: number;
  @Column({ type: 'int', name: 'numero_documento' })
  numeroDocumento: number;
  @Column({ type: 'date' })
  fecha: Date;
  @Column({ name: 'numero_control', nullable: true })
  numeroControl: number;
  @Column({ name: 'id_rmfi' })
  idRmfi: string;
  @Column({ name: 'id_contribuyente', nullable: true })
  idContribuyente: string;
  @Column({ nullable: true })
  denominacion: string;
  @Column({ nullable: true })
  codigo: string;
  @Column({ nullable: true })
  referencia: string;
  @Column({ nullable: true })
  detalle: string;
  @Column({ type: 'decimal', precision: 20, scale: 2, nullable: true })
  monto: number;
  @Column({ type: 'smallint', name: 'id_banco', nullable: true })
  idBanco: number;
  @Column({ nullable: true })
  observancion: string;
  @Column({ nullable: true })
  liquidador: string;
  @Column({ name: 'liquidador_referencia', nullable: true })
  liquidadorReferencia: string;
  @Column({ type: 'date', name: 'fecha_liquidacion', nullable: true })
  fechaLiquidacion: Date;
  @Column({
    type: 'decimal',
    precision: 20,
    scale: 2,
    name: 'petro_liquidacion',
    nullable: true,
  })
  petroLiquidacion: number;
  @Column({ nullable: true })
  cajero: string;
  @Column({ name: 'st_solven', nullable: true })
  stSolven: number;
  @Column({ type: 'time', nullable: true })
  hora: Date;
  @Column({ name: 'numero_caja', nullable: true })
  numeroCaja: number;
  @Column({ type: 'bool', nullable: true })
  estado: number;
}
