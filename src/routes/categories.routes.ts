import { Router } from 'express';
import multer from 'multer';

import CreateCategoryController from '../modules/cars/useCases/createCategory';
import ImportCategoryController from '../modules/cars/useCases/importCategory';
import ListCategoriesController from '../modules/cars/useCases/listCategories';

const categoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

categoriesRoutes.post('/', (request, response) => {
  return CreateCategoryController().handle(request, response);
});

categoriesRoutes.get('/', (request, response) => {
  return ListCategoriesController().handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return ImportCategoryController().handle(request, response);
});

export { categoriesRoutes };
