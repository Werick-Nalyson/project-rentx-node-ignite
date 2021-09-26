/* eslint-disable prettier/prettier */
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { Specification } from '../../entities/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

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
