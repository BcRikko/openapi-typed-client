import { DeletePath, GetPath, PostPath, PutPath, Schemas } from "./Schemas";
import { DeleteParameters, GetParameters, PostParameters, PutParameters, RequestParameters } from "./Types/RequestParameters";
import { ResponseParameters } from "./Types/ResponseParameters";

export class Client {
  async get<
    P extends GetPath
  >(params: GetParameters<P>): Promise<ResponseParameters<P, 'GET'>> {
    return this.#request('GET', params)
  }

  async post<
    P extends PostPath
  >(params: PostParameters<P>): Promise<ResponseParameters<P, 'POST'>> {
    return this.#request('POST', params)
  }

  async put<
    P extends PutPath
  >(params: PutParameters<P>): Promise<ResponseParameters<P, 'PUT'>> {
    return this.#request('PUT', params)
  }

  async delete<
    P extends DeletePath
  >(params: DeleteParameters<P>): Promise<ResponseParameters<P, 'DELETE'>> {
    return this.#request('DELETE', params)
  }

  #request<
    P extends keyof Schemas,
    M extends keyof Schemas[P]
  >(method: M, params: RequestParameters<P>): Promise<ResponseParameters<P, M>> {
    return {} as any
  }
}
