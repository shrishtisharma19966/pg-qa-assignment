import { Module } from '@nestjs/common';
import { HeroesController } from './heroes.controller';
import { HeroesService } from './heroes.service';
import { FightService } from './fight.service';
import { FightController } from './fight.controller';
import { AuthService } from './auth.service';
import { HttpStrategy } from './http.strategy';

@Module({
  imports: [],
  controllers: [HeroesController, FightController],
  providers: [HeroesService, FightService, AuthService, HttpStrategy],
})
export class AppModule {}
