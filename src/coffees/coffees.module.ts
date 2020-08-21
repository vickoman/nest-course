import { Module } from '@nestjs/common';
import { CoffeesController } from './coffees.controller';
import { CoffeeService } from 'src/coffees/coffees.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Coffee } from './entities/coffee.entity';
import { Flavor } from './entities/flavor.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Coffee, Flavor])],
    controllers: [CoffeesController],
    providers: [CoffeeService]}
)

export class CoffeesModule {}
