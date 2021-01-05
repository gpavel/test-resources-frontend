import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EXTERNAL_REQUEST_REGEXP } from '../constants';
import { SEARCH_API_TOKEN } from '../providers';

function normalizeLocalPath(path: string): string {
  return path[0] === '/' ? path.slice(1) : path;
}

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {
  constructor(@Inject(SEARCH_API_TOKEN) private searchApiUrl: string) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.updateUrl(req));
  }

  private updateUrl<T>(request: HttpRequest<T>): HttpRequest<T> {
    return EXTERNAL_REQUEST_REGEXP.test(request.url)
      ? request
      : request.clone({ url: [this.searchApiUrl, normalizeLocalPath(request.url)].join('/') });
  }

}
