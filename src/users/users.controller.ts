import { Body, Controller, Delete, Get,Param,Patch,Post,Query } from '@nestjs/common';
import { UsersService } from './users.service';


@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) {}
@Get()
findAll(@Query('role') role?:'INTERN'|'ENGINEER'|'ADMIN'){
    return this.usersService.findAll(role)
    
}

@Get(':id')
findOne(@Param('id') id: string){
    return this.usersService.findOne(+id)  ///id is string to convert it into number can use unary plus by adding plus in front of Id

}

//create another route for users to find all intern users 

@Get('interns')
findAllInterns(){
    return []
}

@Post()
create(@Body() user:{name:string,email:string,role:'INTERN'|'ENGINEER'|'ADMIN'}){
    return this.usersService.create(user)
}

@Patch('id')
update(@Param('id') id:string, @Body() userUpdate:{name?:string,email?:string,role?:'INTERN'|'ENGINEER'|'ADMIN'}){
    return this.usersService.update(+id,userUpdate)
}



@Delete(':id')  //Delete /user/:id
delete(@Param('id') id:string){
    return this.usersService.delete(+id)
}  



}

