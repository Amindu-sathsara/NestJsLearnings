import { Body, Controller, Delete, Get,Param,Patch,Post,Query,ParseIntPipe,ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
<<<<<<< HEAD
import { createUserDto } from './dto/create-user.dto';
import { updateUserDto } from './dto/update-user.dto';
=======
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
>>>>>>> a038f90e2a3dc084af988231fa255f91a7331aff



@Controller('users') // ?users =it is therouter that handled by here...
export class UsersController {
    /*
    In here I am trying to creater several routes 
    GET /users = this is for getting a list of users data 
    GET/users/:id = this is for getting one user data
    POST/users = this is for creating a new user 
    DELETE/users/:id = this is for deleting a user 
    
    */

    constructor(private readonly usersService: UsersService) {}   // this one create instance of user service
@Get()   //Get /users or /users?role=value
findAll(@Query('role') role?:'INTERN'|'ENGINEER'|'ADMIN'){
    return this.usersService.findAll(role)
    
}

@Get('interns')  //GET  - users/interns    //if I put  this after :id route then  here id takes param into there...
findAllInterns(){
    return []
}

@Get(':id')   //this is work as dynamic param , if any value comes here they it will get in to here...
findOne(@Param('id',ParseIntPipe) id: number){
    return this.usersService.findOne(id)  ///id is string to convert it into number can use unary plus by adding plus in front of Id

}

//create another route for users to find all intern users 



@Post()
create(@Body(ValidationPipe) createUserDto:CreateUserDto){
    return this.usersService.create(createUserDto);
}

@Patch(':id')      //patch  /users/:id
update(@Param('id', ParseIntPipe) id: number, @Body(ValidationPipe) updateUserDto:UpdateUserDto){
    return this.usersService.update(id, updateUserDto)
}



@Delete(':id')  //Delete /user/:id
delete(@Param('id',ParseIntPipe) id:number){
    return this.usersService.delete(id)
}  



}

