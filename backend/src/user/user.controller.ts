import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

   constructor(private userService: UserService) {}
   @Post('register')
   register(@Body() dto: CreateUserDto) {
     return this.userService.create(dto);
   }
}
