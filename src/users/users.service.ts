import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { NotFoundException } from '@nestjs/common';
@Injectable()
export class UsersService {
    private users = [
        {
            id: 1,
            name: 'John',
            email: 'john@gmail.com',
            role: 'ENGINEER'
        },
        {
            id: 2,
            name: 'Jane',
            email: 'jane@gmail.com',
            role: 'ENGINEER'
        },
        {
            id: 3,
            name: 'Jack',
            email: 'jack@gmail.com',
            role: 'INTERN'
        }
    ];

    // Method to get all users or filter by role
    findAll(role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        if (role) {
            const AllrolersArray=this.users.filter(user => user.role === role);
            if(AllrolersArray.length===0) throw new NotFoundException('User role not found');

        }
        return this.users;
    }

    findOne(id: number) {
        const user = this.users.find(user => user.id === id);
        if(!user) throw new NotFoundException("That user is not found");
        return user;
    }

    // Method to create a new user
    create(createUserDto: CreateUserDto) {
        const userByHighestId = [...this.users].sort((a, b) => b.id - a.id);
        const newUser = {
            id: userByHighestId[0].id + 1,
            ...createUserDto
        };
        this.users.push(newUser);
        return newUser;
    }

    // Method to update an existing user
    update(id: number, updateUserDto: UpdateUserDto) {
        this.users = this.users.map(user => {
            if (user.id === id) {
                return { ...user, ...updateUserDto };
            }
            return user;
        });
        return this.findOne(id);
    }

    // Method to delete a user
    delete(id: number) {
        const removedUser = this.findOne(id);
        this.users = this.users.filter(user => user.id !== id);
        return removedUser;
    }
}
