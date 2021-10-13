import { inject, injectable } from 'tsyringe';

import { IFindCars } from '@modules/cars/dtos/IFindCars';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';
import { ICarsRepository } from '@modules/cars/repositories/ICarsRepository';

@injectable()
class ListAvailableCarsUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
  ) { }

  async execute({ brand, category_id, name }: IFindCars): Promise<Car[]> {
    const cars = await this.carsRepository.findAvailable({
      brand,
      category_id,
      name,
    });

    return cars;
  }
}

export { ListAvailableCarsUseCase };
