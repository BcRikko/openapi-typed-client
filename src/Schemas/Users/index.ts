import { EditUserRequest, RegisterUserRequest } from "./Request"
import { GetAllUsersResponse, GetUserByIdResponse } from "./Response"

export type UsersSchema = {
  '/api/1.0/users': {
    GET: {
      Request: never
      Response: GetAllUsersResponse
    }
    POST: {
      Request: RegisterUserRequest
      Response: GetUserByIdResponse
    }
  }
  '/api/1.0/users/:userID': {
    GET: {
      Request: never
      Response: GetUserByIdResponse
    }
    PUT: {
      Request: EditUserRequest
      Response: GetUserByIdResponse
    }
    DELETE: {
      Request: never
      Response: never
    }
  }
}
