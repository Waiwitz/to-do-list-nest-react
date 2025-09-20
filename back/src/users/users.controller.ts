import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { LoginDTO, RegisterUserDTO } from './dto/user.dto';
import { User } from './entities/user.entity';
@UseInterceptors(ClassSerializerInterceptor)
@Controller('api/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() user: RegisterUserDTO): Promise<User> {
    return this.usersService.create(user);
  }

  @Post('login')
  async login(@Body() user: LoginDTO) {
    return this.usersService.login(user);
  }
}
