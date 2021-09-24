import { Router } from 'express';
import multer from 'multer';

import { CreateCategoryController } from '../modules/cars/useCases/createCategory/CreateCategoryController';
import ImportCategoryController from '../modules/cars/useCases/importCategory';
import ListCategoriesController from '../modules/cars/useCases/listCategories';

const createCategoryController = new CreateCategoryController();

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', createCategoryController.handle);

categoriesRoutes.get('/', (request, response) => {
  return ListCategoriesController().handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return ImportCategoryController().handle(request, response);
});

export { categoriesRoutes };
