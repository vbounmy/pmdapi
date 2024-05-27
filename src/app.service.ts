import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getClient(body): string {
    return `Hello ${body.name}`;
  }

  postClient(body): string {
    return `Post pmd ${body.name}`
  }
}
