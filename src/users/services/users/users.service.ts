import { Injectable } from '@nestjs/common';
import { createUSerType } from 'src/users/utils/types';

@Injectable()
export class UsersService {
    private fakeuser= [
        {
            username: "Anson",
            email:"mdfaisal@gmail. com"
        },
        {
            username: "faisal",
            email:"mdfaisalahmed@gmail. com"
        },
        {
            username: "faisal",
            email:"mdfaisalahmed@gmail. com"
        }
        ] 
    fetchUser(){
    return this.fakeuser;
    }

    createUser(userdetails:createUSerType){
        this.fakeuser.push(userdetails)
        return;

    }

    fetchuserByid(id:Number){
        return {id, username:"Ansio",email: "Aniso@gmail.com"};

    }
    

}
