type TaskResponseType = {
  title: string
  description: string
  status: string
  completed: boolean
  assignedUser?: string
}


/**
 * Get Task by ID
 */
export type GetTaskByIdResponse = TaskResponseType

/**
 * Get All Tasks
 */
export type GetAllTasksResponse = TaskResponseType[]
