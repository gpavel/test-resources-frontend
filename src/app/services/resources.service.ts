import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { ProjectListResponse, PublicationListResponse, PublicationSearchParams, ResourceSearchParams } from '../models/core';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {

  constructor(private httpClient: HttpClient) {}

  projects(params: ResourceSearchParams): Observable<ProjectListResponse> {
    const request = this.httpClient.get<ProjectListResponse>('/projects', {
      params: {
        limit: '12',
        page: params.page,
      },
    });

    return request.pipe(
      tap(response => {
        response.payload._embedded.title.forEach(project => project.type = 'project');
      }),
    );
  }

  publications(params: PublicationSearchParams): Observable<PublicationListResponse> {
    const request = this.httpClient.get<PublicationListResponse>('/publications', {
      params: {
        limit: '12',
        page: params.page,
      },
    });

    return request.pipe(
      tap(response => {
        response.payload._embedded.edition.forEach(publication => publication.type = 'publication');
      }),
    );
  }

}
