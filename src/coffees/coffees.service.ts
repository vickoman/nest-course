import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from 'src/coffees/entities/coffee.entity';
import { CreateCoffeeDTO } from './dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Flavor } from './entities/flavor.entity';
import { PaginationQueryDto } from 'src/common/dto/pagination-query.dto';

@Injectable()
export class CoffeeService {

    constructor(
        @InjectRepository(Coffee)
        private readonly coffeeRepository: Repository<Coffee>,
        @InjectRepository(Flavor)
        private readonly flavorRepository: Repository<Flavor>,
    ){}

    findAll(paginationQuery: PaginationQueryDto) {
        const { limit, offset } = paginationQuery;
        return this.coffeeRepository.find({
            relations: ["flavors"],
            skip: offset,
            take: limit,
        });
    }

    async findOne(id: string) {
        const coffee = this.coffeeRepository.findOne(id, {
            relations: ["flavors"],
        });
        if (!coffee) {
            throw new NotFoundException(`Coffee #${id} not found`);
        }
        return coffee;
    }

    async update(id: string, updateCoffeeDto: UpdateCoffeeDto) {
        const flavors = updateCoffeeDto.flavors &&
        (await Promise.all(
            updateCoffeeDto.flavors.map( name => this.preloadFlavorByName(name)),
        ));

        const coffee = await this.coffeeRepository.preload({
            id: +id,
            ...updateCoffeeDto,
            flavors
        });
        if (!coffee) {
            throw new NotFoundException(`Coffee #${id} not found`);
        }
        return this.coffeeRepository.save(coffee);
    }


    async create(createCoffeeDTO: CreateCoffeeDTO) {
        const flavors =  await Promise.all(
            createCoffeeDTO.flavors.map( name => this.preloadFlavorByName(name)),
        );
        const coffee = this.coffeeRepository.create({
            ...createCoffeeDTO,
            flavors,
        });
        return this.coffeeRepository.save(coffee);
    }

    async remove(id: string) {
        const coffee = await this.findOne(id);
        return this.coffeeRepository.remove(coffee);
    }


    private async preloadFlavorByName(name: string): Promise<Flavor> {
        const existintFlavor = await this.flavorRepository.findOne({ name });
        if (existintFlavor) {
            return existintFlavor;
        }
        return this.flavorRepository.create({ name });
    }
}
