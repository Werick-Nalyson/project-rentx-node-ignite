/* eslint-disable prettier/prettier */
import { Specification } from '../model/Specification';
import { ISpecificationsRepository } from '../repositories/ISpecificationsRepository';

interface IRequest {
  name: string;
  description: string;
}

class CreateSpecificationService {
  constructor(private specificationsRepository: ISpecificationsRepository) { }

  execute({ name, description }: IRequest): Specification {
    const categoryAlreadyExists = this.specificationsRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Specification Already exists!');
    }

    const specification = this.specificationsRepository.create({ name, description });

    return specification;
  }
}

export { CreateSpecificationService };
