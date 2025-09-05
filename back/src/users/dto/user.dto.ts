import { IsEmail, IsNotEmpty, IsOptional } from 'class-validator';

export class UserDto {
  id: string;
  email: string;
  name: string;
  age: number;
}

export class RegisterUserDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  fname: string;

  @IsNotEmpty()
  lname: string;

  @IsNotEmpty()
  password: string;

  @IsOptional()
  birthday: Date;
}

export class LoginDTO {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}
