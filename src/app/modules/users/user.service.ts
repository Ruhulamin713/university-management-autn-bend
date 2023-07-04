import config from '../../../config';
import { User } from './user.model';
import { IUser } from './user.interface';
import { generateUserId } from './user.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
  //need auto generated auto incremental id
  const id = await generateUserId();

  user.id = id;

  // need default password
  if (!user.password) {
    user.password = config.default_user_pass as string;
  }

  //create user
  const createdUser = await User.create(user);
  if (!createdUser) {
    throw new Error('Failed to create user');
  }
  return createdUser;
};
export const userService = {
  createUser,
};
