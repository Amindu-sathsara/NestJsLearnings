import { IsEmail,IsEnum,IsString,IsNotEmpty} from "class-validator";



export class CreateUserDto{
    @IsString()
    @IsNotEmpty()
    name:string ;

    @IsEmail()
    email:string ;

    @IsEnum(["INTERN","ENGINEER","ADMIN"],{
        message: "Role must be INTERN, ENGINEER, or ADMIN"  //This is giving some custome massage , if roles are not obne of this

    })
    role:("INTERN"|"ENGINEER"|"ADMIN");
}