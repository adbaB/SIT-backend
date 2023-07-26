import { Exclude } from 'class-transformer';
import { Contribuyente } from 'src/contribuyente/entities/contribuyente.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('sector')
export class Sector {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'int', unique: true })
  idZona: number;
  @Column({ type: 'varchar', length: 250 })
  descripcion: string;
  @Column({ type: 'int', name: 'zona_catastral' })
  zonaCatastral: number;
  @CreateDateColumn({ name: 'create_at' })
  @Exclude()
  createAt: Date;
  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @OneToMany(() => Contribuyente, (contribuyente) => contribuyente.id)
  contribuyente: Contribuyente[];
}
