/**
 * Parsing URLs to create placeholder types
 * 
 * Example:
 *   '/tasks/:taskID' => { taskID: string }
 *   '/tasks/:taksID/assign/:userID' => { taskID: string, userID: string }
 */
export type ParsePathParameters<T extends string> =
  T extends `${string}/:${infer L}/${infer R}`
    ? { [P in L | keyof ParsePathParameters<`/${R}`>]: string }
    : T extends `${string}/:${infer U}`
      ? { [P in U]: string }
      : {}

