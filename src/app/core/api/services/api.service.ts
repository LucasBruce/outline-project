import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IApiService } from '../interfaces/api/api.interface';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService implements IApiService{
  private readonly httpClient = inject(HttpClient);

  async post<E, S>(requisicao: E & { path: string }): Promise<S> {
    return await lastValueFrom(
      this.httpClient.post<S>(requisicao.path, requisicao, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
    );
  }
}