import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { IApi } from '../../core/domain/interfaces/api/api.interface';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Api implements IApi{
  private readonly httpClient = inject(HttpClient);

  async post<E, S>(requisicao: E & { path: string }): Promise<S> {
    return await lastValueFrom(
      this.httpClient.post<S>(requisicao.path, requisicao, {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      })
    );
  }
}