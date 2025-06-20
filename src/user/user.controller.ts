import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { User } from './interfaces/user.interface';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService){}

    @Get()
    async getAllUsers(): Promise<User[]>{
        return this.userService.getAllUser()
    }

    @Post()
    async createUser(@Body() createUser: CreateUserDto): Promise<User>{
        return this.userService.createUser(createUser)
    }
}
