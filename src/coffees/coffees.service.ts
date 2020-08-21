import { Injectable } from '@nestjs/common';
import { Coffee } from 'src/coffees/entities/coffee.entity';
import { CreateCoffeeDTO } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';

@Injectable()
export class CoffeeService {
    private coffees: Coffee[] = [];

    findAll() {
        return this.coffees;
    }

    findOne(id: string) {
        const finded = this.coffees.find(item => item.id === +id);
        if (!finded) {
            return finded;
        }
        return finded;
    }

    update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
        const existing = this.findOne(id);
        if (existing) {
            // Update the existing entity
        }
    }

    remove(id: string) {
        const coffeeIndex = this.coffees.findIndex(item =>  item.id === +id)
        if (coffeeIndex >= 0) {
            this.coffees.splice(coffeeIndex, 1);
        }
    }

    create(coffee: CreateCoffeeDTO) {
        const newCoffee = {id: Math.floor(Math.random() * 200), ...coffee };
        this.coffees.push(newCoffee);
        return coffee;
    }


}
