import { AppError } from '@errors/AppError';
import { Category } from '@modules/cars/entities/Category';
import { CategoriesRepositoryInMemory } from '@modules/cars/repositories/in-memory/CategoriesRepositoryInMemory';

import { CreateCategoryUseCase } from './CreateCategoryUseCase';

let createCategoryUseCase: CreateCategoryUseCase;
let categoriesRepositoryInMemory: CategoriesRepositoryInMemory;

describe('Create category', () => {
  beforeEach(() => {
    categoriesRepositoryInMemory = new CategoriesRepositoryInMemory();
    createCategoryUseCase = new CreateCategoryUseCase(
      categoriesRepositoryInMemory,
    );
  });

  it('should be able to create a new category', async () => {
    const category: Omit<Category, 'created_at'> = {
      name: 'Category teste',
      description: 'Description teste',
    };

    const categoryCreated = await createCategoryUseCase.execute(category);

    expect(categoryCreated).toHaveProperty('id');
  });

  it('should not be able to create a new category if name already exists', async () => {
    expect(async () => {
      const category: Omit<Category, 'created_at'> = {
        name: 'Category teste',
        description: 'Description teste',
      };

      await createCategoryUseCase.execute(category);
      await createCategoryUseCase.execute(category);
    }).rejects.toBeInstanceOf(AppError);
  });
});
