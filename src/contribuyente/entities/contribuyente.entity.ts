import {
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  CreateDateColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import { Parroquia } from 'src/common/entities/parroquia.entity';
import { Sector } from 'src/common/entities/sector.entity';
import { Exclude } from 'class-transformer';

export enum Estado {
  Activo = 'activo',
  Inanctivo = 'inactivo',
  Suspendido = 'suspendido',
}
export enum TypeContribuyente {
  PN = 'persona natural',
  PNC = 'persona natural comercial',
  PJ = 'persona juridica',
}
@Entity('contribuyente')
export class Contribuyente {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'varchar', length: 11, unique: true })
  ruc: string;
  @Column({ type: 'varchar', length: 50, name: 'numero_identificacion' })
  numeroIdentificacion: string;
  @Column({ type: 'varchar', length: 250 })
  nombre: string;

  @Column({
    type: 'enum',
    enum: TypeContribuyente,
    enumName: 'TypeContribuyente',
    name: 'tipo_contibuyente',
  })
  typeContribuyente: TypeContribuyente;

  @Column({ type: 'text' })
  direccion: string;

  @ManyToOne(() => Parroquia, (parroquia) => parroquia.id)
  @JoinColumn({ name: 'parroquia_id' })
  parroquia: Parroquia;

  @ManyToOne(() => Sector, (sector) => sector.id)
  @JoinColumn({ name: 'sector_id' })
  sector: Sector;

  @Column({ type: 'varchar', length: 50 })
  telefono: string;
  @Column({ type: 'varchar', length: 150 })
  correo: string;
  @CreateDateColumn({ name: 'create_at' })
  @Exclude()
  createAt: Date;
  @UpdateDateColumn({ name: 'update_at' })
  @Exclude()
  updateAt: Date;
  @Column({
    type: 'enum',
    enum: Estado,
    enumName: 'Estado',
    default: Estado.Activo,
  })
  estado: Estado;
}
 