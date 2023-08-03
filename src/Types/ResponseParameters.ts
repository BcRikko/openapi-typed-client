import { Schemas } from "../Schemas";

/**
 * Response parameters
 */
export type ResponseParameters<
  P extends keyof Schemas,
  M extends keyof Schemas[P]
> = Schemas[P][M] extends { Response: infer R } ? R : never
