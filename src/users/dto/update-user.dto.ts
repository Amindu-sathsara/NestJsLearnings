<<<<<<< HEAD
import { createUserDto } from "./create-user.dto";
=======
import { CreateUserDto } from "./create-user.dto";
>>>>>>> a038f90e2a3dc084af988231fa255f91a7331aff
import {PartialType} from "@nestjs/mapped-types";   //before this run this command   :npm i @nestjs/mapped-types -D                                                             

// using PartialType  instead of creating upadate-user.dto.ts seperately we can use the extends method because the nestjs also work with js class basically

<<<<<<< HEAD
export class updateUserDto extends PartialType(createUserDto){}
=======
export class UpdateUserDto extends PartialType(CreateUserDto){}
>>>>>>> a038f90e2a3dc084af988231fa255f91a7331aff
