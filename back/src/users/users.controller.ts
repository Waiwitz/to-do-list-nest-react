import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginDTO, RegisterUserDTO } from './dto/user.dto';
import { User } from './entities/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async register(@Body() user: RegisterUserDTO): Promise<User> {
    return this.usersService.create(user);
  }

  @Post('login')
  async login(@Body() user: LoginDTO): Promise<User | string> {
    return this.usersService.login(user);
  }
}
