import { Exclude } from 'class-transformer';
import { Contribuyente } from 'src/contribuyente/entities/contribuyente.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'parroquia' })
export class Parroquia {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'varchar', length: 250, unique: true })
  descripcion: string;
  @CreateDateColumn({ name: 'create_at' })
  @Exclude()
  createAt: Date;
  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @OneToMany(() => Contribuyente, (contribuyente) => contribuyente.id)
  contribuyente: Contribuyente[];
}
