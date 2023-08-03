type UserResponseType = {
  name: string
  email: string
}


/**
 * Get User by ID
 */
export type GetUserByIdResponse = UserResponseType

/**
 * Get All Users
 */
export type GetAllUsersResponse = UserResponseType[]
