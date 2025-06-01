import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {}

    async create(data: CreateUserDto) {
      const hashed = await bcrypt.hash(data.password, 10);
      const user = this.repo.create({ ...data, password: hashed });
      return this.repo.save(user);
    }
  
    async findByEmail(email: string) {
      return this.repo.findOneBy({ email });
    }

}   
