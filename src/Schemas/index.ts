import { TasksSchema } from "./Tasks";
import { UsersSchema } from "./Users";

export type Schemas =
  & TasksSchema
  & UsersSchema


type Method = 'GET' | 'POST' | 'PUT' | 'DELETE'
type FilterPathBy<M extends Method> = {
  [P in keyof Schemas]: M extends keyof Schemas[P] ? P : never
}[keyof Schemas]

export type GetPath = FilterPathBy<'GET'>
export type PostPath = FilterPathBy<'POST'>
export type PutPath = FilterPathBy<'PUT'>
export type DeletePath = FilterPathBy<'DELETE'>
