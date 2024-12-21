import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // @Get('poppular')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get('playing')
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  // @Get('upcoming')
  // getHello(): string {
  //   return this.appService.getHello();
  // }
}
