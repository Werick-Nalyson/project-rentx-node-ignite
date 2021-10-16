import { Router } from 'express';
import multer from 'multer';

import upload from '@config/upload';
import { CreateCarController } from '@modules/cars/useCases/createCar/CreateCarController';
import { CreateCarSpecificationController } from '@modules/cars/useCases/createCarSpecification/createCarSpecificationController';
import { ListAvailableCarsController } from '@modules/cars/useCases/listAvailableCars/ListAvailableCarsController';
import { UploadCarImageController } from '@modules/cars/useCases/uploadCarImage/UploadCarImageController';

import { ensureAdmin } from '../middlewares/ensureAdmin';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';

const createCarController = new CreateCarController();
const listAvailableCarsController = new ListAvailableCarsController();
const createCarSpecificationController = new CreateCarSpecificationController();
const uploadCarImageController = new UploadCarImageController();

const carsRoutes = Router();

const uploadImage = multer(upload.upload('./tmp/cars'));

carsRoutes.post(
  '/',
  ensureAuthenticated,
  ensureAdmin,
  createCarController.handle,
);

carsRoutes.get('/available', listAvailableCarsController.handle);

carsRoutes.post(
  '/specifications/:id',
  ensureAuthenticated,
  ensureAdmin,
  createCarSpecificationController.handle,
);

carsRoutes.post(
  '/images/:id',
  ensureAuthenticated,
  ensureAdmin,
  uploadImage.array('images'),
  uploadCarImageController.handle,
);

export { carsRoutes };
