import { Car } from '@modules/cars/infra/typeorm/entities/Car';

import { ICreateCarDTO } from '../dtos/ICreateCarDTO';
import { IFindCars } from '../dtos/IFindCars';

interface ICarsRepository {
  create(data: ICreateCarDTO): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  findAvailable(data: IFindCars): Promise<Car[]>;
}

export { ICarsRepository };
