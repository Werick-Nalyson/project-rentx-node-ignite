import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserContoller {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, password, driver_license, email } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute({
      name,
      password,
      driver_license,
      email,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserContoller };
