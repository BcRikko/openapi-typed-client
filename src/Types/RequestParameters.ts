import { DeletePath, GetPath, PostPath, PutPath, Schemas } from "../Schemas";
import { ParsePathParameters } from "./ParsePathParameters";

/**
 * Base RequestParameter type and Placeholder type
 */
export type RequestParameters<
  P extends keyof Schemas
> = 
  & {
    path: P
    headers?: Headers
  }
  & (
    keyof ParsePathParameters<P> extends never
      ? {}
      : {
        params: ParsePathParameters<P>
      }
  )

type QueryRequestParameters<
  P extends GetPath,
  M extends keyof Schemas[P]
> =
  & RequestParameters<P>
  & {
    queries?: Record<string, string>
  }

type CommandRequestParameters<
  P extends PostPath | PutPath | DeletePath,
  M extends keyof Schemas[P],
  Req = Schemas[P][M] extends { Request: infer R } ? R : never
> =
  & RequestParameters<P>
  & {
    body?: M extends 'DELETE' ? undefined : Req
  }

/**
 * GET request parameters
 */
export type GetParameters<
  P extends GetPath
> = QueryRequestParameters<P, 'GET'>

/**
 * POST request parameters
 */
export type PostParameters<
  P extends PostPath
> = CommandRequestParameters<P, 'POST'>

/**
 * PUT request parameters
 */
export type PutParameters<
  P extends PutPath
> = CommandRequestParameters<P, 'PUT'>

/**
 * DELETE request parameters
 */
export type DeleteParameters<
  P extends DeletePath
> = CommandRequestParameters<P, 'DELETE'> 
