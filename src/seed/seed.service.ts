import { Injectable } from '@nestjs/common';
import { BrandsService } from '../brands/brands.service';
import { CarsService } from '../cars/cars.service';
import { BRAND_SEED } from './data/brand.seed';
import { CARS_SEED } from './data/cars.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly brandsService: BrandsService,
    private readonly carsService: CarsService,
  ) {}

  populateDB() {
    this.brandsService.fillBrandWithSeedData(BRAND_SEED);
    this.carsService.fillCarsWithSeedData(CARS_SEED);

    return 'Database seeded successfully';
  }
}
