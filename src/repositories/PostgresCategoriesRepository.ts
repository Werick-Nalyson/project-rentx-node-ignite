import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  ICreateCategoryDTO,
} from './ICategoriesRepository';

class PostgresCategoriesRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }

  list(): Category[] {
    return null;
  }

  create({ name, description }: ICreateCategoryDTO): Category {
    console.log(name, description);
    return null;
  }
}

export { PostgresCategoriesRepository };
