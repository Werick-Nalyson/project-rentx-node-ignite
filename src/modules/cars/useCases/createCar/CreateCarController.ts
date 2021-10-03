import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ICreateCarDTO } from '@modules/cars/dtos/ICreateCarDTO';

import { CreateCarUseCase } from './CreateCarUseCase';

class CreateCarController {
  async handle(request: Request, response: Response) {
    const {
      brand,
      category_id,
      daily_rate,
      fine_ammount,
      name,
      license_plate,
      description,
    }: ICreateCarDTO = request.body;

    const createCarUseCase = container.resolve(CreateCarUseCase);

    const car = await createCarUseCase.execute({
      brand,
      category_id,
      daily_rate,
      fine_ammount,
      name,
      license_plate,
      description,
    });

    return response.status(201).json(car);
  }
}

export { CreateCarController };
