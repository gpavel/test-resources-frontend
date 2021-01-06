import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import projects from '../../assets/projects.json';
import publications from '../../assets/publications.json';

import { ProjectListResponse, PublicationListResponse } from '../models/core';

@Injectable({
  providedIn: 'root',
})
export class ResourcesService {

  constructor(private httpClient: HttpClient) {}

  projects(): Observable<ProjectListResponse> {
    // return this.httpClient.get('/projects') as Observable<ProjectListResponse>;
    return of(projects as any).pipe(
      tap((response: ProjectListResponse) => {
        response.payload._embedded.title.forEach(project => project.type = 'project');
      }),
    );
  }

  publications(): Observable<PublicationListResponse> {
    // return this.httpClient.get('/publications') as Observable<PublicationListResponse>;
    return of(publications as any).pipe(
      tap((response: PublicationListResponse) => {
        response.payload._embedded.edition.forEach(publication => publication.type = 'publication');
      }),
    );
  }

}
