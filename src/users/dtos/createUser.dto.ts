
import { IsNotEmpty,IsEmail, IsNumber} from 'class-validator';


export class  createUserDto{
    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
    
    @IsNotEmpty()
    @IsNumber()
    age:number;
    
}