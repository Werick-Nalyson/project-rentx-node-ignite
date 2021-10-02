/* eslint-disable prettier/prettier */
import { inject, injectable } from 'tsyringe';

import { Specification } from '@modules/cars/infra/typeorm/entities/Specification';
import { ISpecificationsRepository } from '@modules/cars/repositories/ISpecificationsRepository';
import { AppError } from '@shared/errors/AppError';

interface IRequest {
  name: string;
  description: string;
}

@injectable()
class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationsRepository: ISpecificationsRepository,
  ) { }

  async execute({ name, description }: IRequest): Promise<Specification> {
    const speficicationAlreadyExists =
      await this.specificationsRepository.findByName(name);

    if (speficicationAlreadyExists) {
      throw new AppError('Specification Already exists!');
    }

    const specification = await this.specificationsRepository.create({
      name,
      description,
    });

    return specification;
  }
}

export { CreateSpecificationUseCase };
