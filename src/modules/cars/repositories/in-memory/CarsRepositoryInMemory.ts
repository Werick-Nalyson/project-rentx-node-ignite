import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';
import { IFindCars } from '@modules/cars/dtos/IFindCars';
import { Car } from '@modules/cars/infra/typeorm/entities/Car';

import { ICarsRepository } from '../ICarsRepository';

class CarsRepositoryInMemory implements ICarsRepository {
  cars: Car[] = [];

  async create(data: ICreateCarDTO): Promise<Car> {
    const {
      id,
      name,
      description,
      brand,
      category_id,
      daily_rate,
      fine_ammount,
      license_plate,
      specifications,
    } = data;

    const car = new Car();

    Object.assign(car, {
      id,
      name,
      description,
      brand,
      category_id,
      daily_rate,
      fine_ammount,
      license_plate,
      specifications,
    });

    this.cars.push(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = this.cars.find(car => car.license_plate === license_plate);

    return car;
  }

  async findAvailable({ brand, category_id, name }: IFindCars): Promise<Car[]> {
    const cars = this.cars.filter(car => {
      if (
        car.available === true ||
        (brand && car.brand === brand) ||
        (category_id && car.category_id === category_id) ||
        (name && car.name === name)
      ) {
        return car;
      }
      return null;
    });

    return cars;
  }

  async findById(id: string): Promise<Car> {
    const car = this.cars.find(car => car.id === id);

    return car;
  }
}
export { CarsRepositoryInMemory };
