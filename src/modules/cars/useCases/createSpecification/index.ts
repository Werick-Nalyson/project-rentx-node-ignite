import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { CreateSpecificationController } from './CreateSpecificationController';
import { CreateSpecificationUseCase } from './CreateSpecificationUseCase';

const categoriesRepository = null;

const createSpecificationUseCase = new CreateSpecificationUseCase(
  categoriesRepository,
);

const createSpecificationController = new CreateSpecificationController(
  createSpecificationUseCase,
);

export { createSpecificationController };
