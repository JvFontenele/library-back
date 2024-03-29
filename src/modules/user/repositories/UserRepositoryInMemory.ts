import { User } from '../entities/User';
import { UserRepository } from './UserRepository';

export class UserRepositoryInMemory implements UserRepository {

  public users: User[] = [];

  async create(user: User): Promise<void> {
    this.users.push(user);
  }
  findByLogin(login: string): Promise<User | null> {
    throw new Error('Method not implemented.');
  }
}