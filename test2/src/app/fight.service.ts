import { Injectable } from '@nestjs/common';
import Fight from './interfaces/fight.interface';
import Hero from './interfaces/hero.interface';
import { HeroesController } from './heroes.controller';

@Injectable()
export class FightService {
  static MAX_HEROES_IN_FIGHT: number = 3;
  private readonly fight: Fight = {
    heroes: [],
    winner: null,
  };

  getHeroesCount(): number {
    return this.fight.heroes.length;
  }

  reset(): void {
    this.fight.heroes = [];
    this.fight.winner = null;
  }

  addHero(hero: Hero): boolean {
    if (this.fight.heroes.length === FightService.MAX_HEROES_IN_FIGHT) {
      return false;
    }
    this.fight.heroes.push(hero);
    return true;
  }

  isHeroFighting(hero: Hero): boolean {
    return this.fight.heroes.some(h => h.id === hero.id);
  }

  startFight(): boolean {
    if (this.fight.heroes.length < 2) {
      return false;
    }
    // Simple Fight logic
    this.fight.winner = this.fight.heroes.reduce((winner, hero: Hero) => {
      if (!winner || hero.powerlevel > winner.powerlevel) {
        winner = hero;
        return winner;
      }
    }, null);

    return true;
  }

  getWinner(): Hero {
    return this.fight.winner;
  }
}
