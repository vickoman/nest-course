import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesController } from './coffees/coffees.controller';
import { CooffeeService } from './cooffe-service/cooffe.service';

@Module({
  imports: [],
  controllers: [AppController, CoffeesController],
  providers: [AppService, CooffeeService],
})
export class AppModule {}
