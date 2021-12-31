import { ICreateCarsImageDTO } from '@modules/cars/dtos/ICreateCarsImage';
import { CarImage } from '@modules/cars/infra/typeorm/entities/CarImage';

interface ICarsImageRepository {
  create(data: ICreateCarsImageDTO): Promise<CarImage>;
}

export { ICarsImageRepository };
