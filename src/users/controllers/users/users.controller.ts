
import { UseGuards, ValidationPipe } from '@nestjs/common';
import { UsePipes } from '@nestjs/common';
import { ParseIntPipe } from '@nestjs/common';
import { ParseBoolPipe } from '@nestjs/common';
import { Controller, Get,Query, Post, Req, Res,Body, Param} from '@nestjs/common';
import { HttpStatus } from '@nestjs/common/enums';
import { HttpException } from '@nestjs/common/exceptions';
import express, { Request, Response } from "express";
import { getMaxListeners } from 'process';
import { createUserDto } from 'src/users/dtos/createUSer.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateuserPipe } from 'src/users/pipes/validate-createuser/validate-createuser.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {
    constructor(private userService:UsersService){}
    
    @Get()
    @UseGuards(AuthGuard)
    getusers(){
        return this.userService.fetchUser()
    }

    @Get('posts')
    getposts(){
        return [{
            username: "faisal",
            email: 'faisakl@getMaxListeners.com',
            posts:[{
                id:1,
                title: "post1",
                description: "hello this is description 1"
            },
            {
                id:2,
                title: "post 2",
                description: "this is second post"
            }
        ]
        }]
    }
    @Post('createuser')
    @UsePipes(new ValidationPipe())
    createUser(@Body(ValidateCreateuserPipe ) userData:createUserDto , @Req() req:Request, @Res() res:Response){
        console.log((userData.age.toPrecision()));
        this.userService.createUser(userData)
        res.send({userData});   

    }

    @Get(':id')
    getuserbyid(@Param('id', ParseIntPipe) id:number, @Req() req:Request, @Res() res:Response){
        console.log(id);

        const user = this.userService.fetchuserByid(id)
        if(!user){
            throw new HttpException("user does not exist",HttpStatus.BAD_REQUEST)
        }
        res.send(user)
    }
    
}

