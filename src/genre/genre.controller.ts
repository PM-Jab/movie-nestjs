import { Body, Controller, Get, Param, Post, HttpCode } from '@nestjs/common';

@Controller('genre')
export class GenreController {
  @Get()
  findAll() {
    return 'This action returns all genres';
  }

  @Get(':genre')
  findAllByGenre(@Param('genre') genre: string) {
    return 'This action returns a genre: ' + genre;
  }

  @Post()
  @HttpCode(202)
  create(@Body('body') body) {
    return 'This action adds a new genre: ' + body.name;
  }
}
