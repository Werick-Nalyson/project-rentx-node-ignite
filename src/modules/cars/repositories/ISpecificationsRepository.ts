import { Category } from '../model/Category';
import { Specification } from '../model/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): Specification;
  findByName(name: string): Category;
}

export { ICreateSpecificationDTO, ISpecificationsRepository };
