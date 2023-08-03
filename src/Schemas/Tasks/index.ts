import { CreateTaskRequest, EditTaskRequest } from "./Request"
import { GetAllTasksResponse, GetTaskByIdResponse } from "./Response"

export type TasksSchema = {
  '/api/1.0/tasks': {
    GET: {
      Request: never
      Response: GetAllTasksResponse
    }
    POST: {
      Request: CreateTaskRequest
      Response: GetTaskByIdResponse
    }
  }
  '/api/1.0/tasks/:taskID': {
    GET: {
      Request: never
      Response: GetTaskByIdResponse
    }
    PUT: {
      Request: EditTaskRequest
      Response: GetTaskByIdResponse
    }
    DELETE: {
      Request: never
      Response: never
    }
  }
  '/api/1.1/tasks/:taskID/assign_user/:userID': {
    POST: {
      Request: never
      Response: GetTaskByIdResponse
    }
  }
}
