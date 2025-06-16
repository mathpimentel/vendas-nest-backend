import { Controller, Get, Post, Body } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';

@Controller('user')
export class UserController {

    @Get('/test')
    async getAllUsers() {
        return JSON.stringify( { test:'abc'})
    }

    @Post('/create')
    async createUser(@Body() createUser: CreateUserDto){
        return createUser
    }
}
