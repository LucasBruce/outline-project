export interface IApiService {
  post<E, S>(requisicao: E & { path: string }): Promise<S>;
}