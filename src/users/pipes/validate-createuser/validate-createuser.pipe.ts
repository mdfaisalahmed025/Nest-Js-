import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';
import { createUserDto } from 'src/users/dtos/createUSer.dto';

@Injectable()
export class ValidateCreateuserPipe implements PipeTransform {
  transform(value: createUserDto, metadata: ArgumentMetadata) {
    console.log("inside validatecreateuserpipe");
    console.log(value);
    console.log(metadata);
    const parseageIn = parseInt(value.age.toString());

    if(isNaN(parseageIn)){
      console.log(`${value.age} is not a function`);
      throw new HttpException("Invalid data type for age", HttpStatus.BAD_REQUEST);
      
    }
    console.log(`${parseageIn} is a number.Returning ....`);
    
    return {...value, age:parseageIn}
  
    
   
  }
}
