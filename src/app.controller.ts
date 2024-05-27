import { Controller, Get, Post,Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getClient(@Body() body: []): string {
    return this.appService.getClient(body);
  }

  @Post()
  postClient(@Body() body:[]): string {
    console.log(body)
    return this.appService.postClient(body)
  }

}
