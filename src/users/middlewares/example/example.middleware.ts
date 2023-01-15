import { HttpException, HttpStatus, Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log("example of middlewares");
    console.log(req.headers.authorization);
    const {authorization} =req.headers;

    if(!authorization){
      throw new HttpException("no authorization token", HttpStatus.FORBIDDEN)
    }
    if(authorization=="fffnkbvkbndvnvnrifnifieowsdjchmc xccn")
    next();
    else{
      throw new HttpException("invalid authorization token", HttpStatus.FORBIDDEN)
    }
  
  }
}
