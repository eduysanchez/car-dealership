import { Injectable, NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    {
      id: uuid(),
      brand: 'Toyota',
      model: 'Corolla',
      price: 10000,
      year: 2018,
    },
    {
      id: uuid(),
      brand: 'BMW',
      model: 'X5',
      price: 20000,
      year: 2019,
    },
    {
      id: uuid(),
      brand: 'Mercedes',
      model: 'C-Class',
      price: 15000,
      year: 2017,
    },
  ];

  public getAllCars() {
    return this.cars;
  }

  public getCarById(id: string) {
    const car = this.cars.find((car) => car.id === id);

    if (!car) throw new NotFoundException(`Car with id ${id} not found`);

    return car;
  }

  public createCar(createCarDto: CreateCarDto) {
    const newCar = { id: uuid(), ...createCarDto };
    this.cars.push(newCar);

    return newCar;
  }

  public updateCar(id: string, updateCarDto: UpdateCarDto) {
    if (updateCarDto.id && updateCarDto.id !== id) {
      throw new NotFoundException(`Car with id ${updateCarDto.id} not found`);
    }

    const car = this.getCarById(id);

    Object.assign(car, updateCarDto);

    return car;
  }

  public deleteCar(id: string) {
    const car = this.getCarById(id);
    this.cars = this.cars.filter((car) => car.id !== id);
  }
}
