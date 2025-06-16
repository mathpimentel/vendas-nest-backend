import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { User } from './interfaces/user.interface';
import { randomInt } from 'crypto';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    private users: User[] = [];

    async createUser(createUserDto : CreateUserDto): Promise<User>{
        const encryptedPassword = await hash(createUserDto.password, 10)
        const user: User = {
            ...createUserDto,
            id: randomInt(0,100),
            password: encryptedPassword
        };
        this.users.push(user)
        return user
    }

    async getAllUser(): Promise<User[]>{
        return this.users
    }
}
