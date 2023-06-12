import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
  ) {}
  async create(createUserDto: CreateUserDto) {
    createUserDto.contrasena = await bcrypt.hash(
      createUserDto.contrasena,
      +process.env.HASH_SALT,
    );
    return await this.userRepo.save(createUserDto);
  }

  findAll() {
    return this.userRepo.findAndCount();
  }

  findOne(id: number) {
    return this.userRepo.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    if (updateUserDto.contrasena) {
      updateUserDto.contrasena = await bcrypt.hash(
        updateUserDto.contrasena,
        +process.env.HASH_SALT,
      );
    }

    return this.userRepo.update(id, updateUserDto);
  }

  remove(id: number) {
    return this.userRepo.delete(id);
  }
}
