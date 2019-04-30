import {
  Controller,
  Post,
  Body,
  Delete,
  HttpException,
  HttpCode,
  UseGuards,
} from '@nestjs/common';
import { HeroesService } from './heroes.service';
import { FightService } from './fight.service';
import errorCodes from 'src/errorCodes';
import { AddHeroDto } from './dtos/addHero.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('fight')
@UseGuards(AuthGuard('bearer'))
export class FightController {
  constructor(
    private readonly heroesService: HeroesService,
    private readonly fightService: FightService,
  ) {}

  @Delete()
  @HttpCode(200)
  reset() {
    this.fightService.reset();
    return {
      message:
        'Fight has been deleted and now all heroes went back to Helicarrier Ship.',
    };
  }

  @Post()
  @HttpCode(200)
  fight() {
    if (!this.fightService.startFight()) {
      throw new HttpException(
        {
          errorCode: errorCodes.FIGHT_COULDNT_START_NO_HEROES,
          error: 'You can not start a fight with less than 2 heroes',
        },
        400,
      );
    }
    const winner = this.fightService.getWinner();
    return {
      message: `Heroes fought hard! The winner is ${winner.name}!`,
    };
  }

  @Post('addHero')
  @HttpCode(200)
  addHero(@Body() addHeroDto: AddHeroDto) {
    if (!addHeroDto.heroId) {
      throw new HttpException(
        {
          errorCode: errorCodes.HERO_PARAMETER_MANDATORY,
          error: 'Hero ID must be passed on the POST request',
        },
        400,
      );
    }

    // Search heroes byh its IDs
    const hero = this.heroesService.getById(addHeroDto.heroId);
    if (!hero) {
      throw new HttpException(
        {
          errorCode: errorCodes.HERO_ID_NOT_FOUND,
          error: `There is no hero with the id [${addHeroDto.heroId}]`,
        },
        400,
      );
    }

    if (this.fightService.isHeroFighting(hero)) {
      throw new HttpException(
        {
          errorCode: errorCodes.HERO_CANT_FIGHT_SAME_HERO,
          error: `${
            hero.name
          } could not be added because is already in the fight.`,
        },
        400,
      );
    }

    // Finally add the hero
    if (!this.fightService.addHero(hero)) {
      const maxHeroesAllowed = FightService.MAX_HEROES_IN_FIGHT;
      throw new HttpException(
        {
          errorCode: errorCodes.MAX_HERO_REACHED_IN_FIGHT,
          error: `A maximum of ${maxHeroesAllowed} heroes are allowed per fight.`,
        },
        400,
      );
    }
    const heroesCount = this.fightService.getHeroesCount();
    return {
      message: `Yippie! ${hero.name} added. At the moment ${heroesCount} hero${
        heroesCount > 1 ? 'es' : ''
      } waiting to fight.`,
    };
  }
}
