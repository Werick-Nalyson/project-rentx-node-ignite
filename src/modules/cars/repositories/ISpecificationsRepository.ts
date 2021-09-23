import { Category } from '../entities/Category';
import { Specification } from '../entities/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Specification;
  findByName(name: string): Category;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
