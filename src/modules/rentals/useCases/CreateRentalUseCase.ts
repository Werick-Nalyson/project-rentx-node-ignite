import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import { AppError } from '@shared/errors/AppError';

import { ICreateRentalDTO } from '../dtos/ICreateRentalDTO';
import { Rental } from '../infra/entities/Rental';
import { IRentalsRepository } from '../repositories/IRentalsRepository';

dayjs.extend(utc);

class CreateRentalUseCase {
  constructor(private rentalsRepository: IRentalsRepository) { }

  async execute({
    car_id,
    user_id,
    expected_return_date,
  }: ICreateRentalDTO): Promise<Rental> {
    const minimumHour = 24;

    const carUnavailable = await this.rentalsRepository.findOpenRentalByCar(
      car_id,
    );

    if (carUnavailable) {
      throw new AppError('Car is unavailable!');
    }

    const rentalOpenToUser = await this.rentalsRepository.findOpenRentalByUser(
      user_id,
    );

    if (rentalOpenToUser) {
      throw new AppError('There is a rental in progress for user!');
    }

    const expectedReturnDateFormat = dayjs(expected_return_date);
    const dateNow = dayjs().utc().local().format();
    const compare = dayjs(expectedReturnDateFormat).diff(dateNow, 'hours');

    if (compare < minimumHour) {
      throw new AppError('Invalid return time!');
    }

    const rental = await this.rentalsRepository.create({
      user_id,
      car_id,
      expected_return_date,
    });

    return rental;
  }
}

export { CreateRentalUseCase };
