import { User } from './user.model'

// let lastUserId = 0
export const findLastUserId = async () => {
  const lastUser = await User.findOne({}, { id: 1, _id: 0 })
    .sort({
      createdAt: -1, // for descending order
    })
    .lean() //lean make the result js object and make the query faster
  return lastUser?.id
}

export const generateUserId = async (): Promise<string> => {
  const currentId = (await findLastUserId()) || (0).toString().padStart(5, '0')
  //increment by id
  const incrementedId = (parseFloat(currentId) + 1).toString().padStart(5, '0')
  return incrementedId
}
