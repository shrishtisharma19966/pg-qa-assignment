import { Injectable } from '@nestjs/common';
import Hero from './interfaces/hero.interface';

@Injectable()
export class HeroesService {
  heroes = require('./heroes.json');

  getById(heroId: string): Hero {
    return this.heroes.find(hero => heroId === hero.id);
  }

  getAll(): Hero[] {
    return this.heroes;
  }
}
