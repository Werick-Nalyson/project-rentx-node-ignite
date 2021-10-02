import { ICreateUserDTO } from '@modules/accounts/dtos/ICreateUserDTO';
import { User } from '@modules/accounts/infra/entities/User';

import { IUsersRepository } from '../IUsersRepository';

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      driver_license,
      password,
    });

    this.users.push(user);

    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = this.users.find(user => user.email === email);

    return user;
  }

  async findById(id: string): Promise<User> {
    const user = this.users.find(user => user.id === id);

    return user;
  }
}

export { UsersRepositoryInMemory };
