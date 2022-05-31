import { Controller } from '@nestjs/common';
import { Post } from '@nestjs/common';

@Controller('api/v1/players')
export class PlayersController {
  @Post()
  async upsertPlayer() {
    return JSON.stringify({
      name: 'John Doe',
    });
  }
}
