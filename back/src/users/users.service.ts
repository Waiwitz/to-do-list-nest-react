import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDTO, RegisterUserDTO, UserDto } from './dto/user.dto';
import { compare, hash } from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(user: RegisterUserDTO): Promise<User> {
    const salt = 10;
    const hashedPw = await hash(user.password, salt);

    console.log(user);

    const newUser = this.usersRepository.create({
      ...user,
      password: hashedPw,
    });

    return this.usersRepository.save(newUser);
  }

  async login(user: LoginDTO): Promise<UserDto | string> {
    const findUser = await this.usersRepository.findOneBy({
      email: user.email,
    });

    if (!findUser) {
      return 'user not found.';
    }

    const passwordCheck = await compare(user.password, findUser.password);

    if (!passwordCheck) {
      return 'invalid credentials.';
    }

    return findUser;
  }
}
