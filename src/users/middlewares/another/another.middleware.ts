import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Response, Request } from 'express';

@Injectable()
export class AnotherMiddleware implements NestMiddleware {
  use(req: Request, res:Response, next: NextFunction) {
    console.log("another middleware");
    
    next();
  }
}
