import { Body, Controller, Post } from '@nestjs/common';
import { AddPlayerDto } from './dtos/add-player.dto';

@Controller('api/v1/players')
export class PlayersController {
  @Post()
  async upsertPlayer(@Body() addPlayerDto: AddPlayerDto) {
    const { name, email } = addPlayerDto;
    return JSON.stringify({
      name,
      email,
    });
  }
}
