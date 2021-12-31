import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ProfileUserUseCase } from './ProfileUserUserCase';

class ProfileUserContoller {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const profleUserUseCase = container.resolve(ProfileUserUseCase);

    const user = await profleUserUseCase.execute(id);

    return response.json(user);
  }
}

export { ProfileUserContoller };
