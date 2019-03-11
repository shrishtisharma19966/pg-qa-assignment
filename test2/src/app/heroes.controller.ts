import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('heroes')
@UseGuards(AuthGuard('bearer'))
export class HeroesController {
  constructor(private readonly heroesService: HeroesService) {}

  @Get(':id')
  getHero(@Param() params) {
    return this.heroesService.getById(params.id);
  }

  @Get()
  getAllHeroes() {
    return this.heroesService.getAll();
  }
}
