import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Exclude } from 'class-transformer';

@Entity({ name: 'user' })
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column({ type: 'varchar', length: 250 })
  nombre: string;
  @Column({ type: 'varchar', length: 250 })
  apellido: string;
  @Column({ type: 'varchar', length: 100 })
  cedula: string;
  @Column({ type: 'varchar', length: 50, unique: true })
  usuario: string;
  @Column({ type: 'varchar', length: 250 })
  @Exclude()
  contrasena: string;
  @Column({ type: 'varchar', length: 5 })
  rol: string;
  @Column({ type: 'boolean', default: true })
  estado: boolean;
  @CreateDateColumn({ name: 'create_at' })
  createAt: Date;
  @UpdateDateColumn({ name: 'update_at' })
  updateAt: Date;
}
