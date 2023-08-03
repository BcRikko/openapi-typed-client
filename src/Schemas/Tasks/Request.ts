/**
 * Create Task
 */
export type CreateTaskRequest = {
  title: string
  description: string
  completed: boolean
}

/**
 * Edit Task
 */
export type EditTaskRequest = {
  title: string
  description: string
  completed: boolean
}
