import { v4 as uuid } from 'uuid';
import { Car } from '../../cars/interfaces/car.interface';

export const CARS_SEED: Car[] = [
  {
    id: uuid(),
    brand: 'Toyota',
    model: 'Corolla',
    price: 15000,
    year: 2020,
  },
  {
    id: uuid(),
    brand: 'Honda',
    model: 'Civic',
    price: 20000,
    year: 2021,
  },
  {
    id: uuid(),
    brand: 'Ford',
    model: 'Fiesta',
    price: 18000,
    year: 2020,
  },
  {
    id: uuid(),
    brand: 'Chevrolet',
    model: 'Camaro',
    price: 30000,
    year: 2021,
  },
];
