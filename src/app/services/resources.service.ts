import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ListResponse } from '../models/core';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {
  constructor(private httpClient: HttpClient) {}

  findAll(): Observable<ListResponse<any>> {
    return this.httpClient.get('/projects') as Observable<ListResponse<any>>;
  }
}
