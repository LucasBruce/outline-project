export interface IApi {
  post<E, S>(requisicao: E & { path: string }): Promise<S>;
}