import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, shareReplay, switchMap, tap } from 'rxjs/operators';

import { FoleonProject, FoleonPublication, PublicationSearchParams } from '../models/core';
import { ResourcesService } from '../services/resources.service';

interface PageSearchParams extends PublicationSearchParams {
  category: 'publications' | 'projects';
}

interface DataSource<T> {
  items: T[];
  totalCount: number;
}

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesComponent implements OnInit {

  items$!: Observable<Array<FoleonPublication | FoleonProject>>;
  totalCount$!: Observable<number>;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private resourcesService: ResourcesService,
  ) {
  }

  ngOnInit(): void {
    const dataSource$ = this.activatedRoute.queryParams.pipe(
      switchMap((params: Partial<PageSearchParams>) => {
        return params.category === 'projects'
          ? this.resourcesService.projects({ page: params.page ?? '1', q: params.q })
          : this.resourcesService.publications({ page: params.page ?? '1', q: params.q });
      }),
      map(response => {
        return {
          items: 'edition' in response.payload._embedded
            ? response.payload._embedded.edition
            : response.payload._embedded.title,
          totalCount: response.payload.total,
        } as DataSource<FoleonPublication | FoleonProject>;
      }),
      shareReplay(1),
    );

    this.items$ = dataSource$.pipe(
      map(data => data.items),
    );

    this.totalCount$ = dataSource$.pipe(
      map(data => data.totalCount),
    );
  }

  search(searchCriteria: object): void {
    this.router.navigate([], {
      queryParams: this.createQueryParams(searchCriteria),
    });
  }

  changePage(event: { itemsPerPage: number, page: number }): void {
    let { queryParams } = this.activatedRoute.snapshot;

    if (event.page > 1) {
      queryParams = { ...queryParams, page: event.page };
    } else {
      queryParams = { ...queryParams, page: undefined };
    }

    this.router.navigate([], { queryParams });
  }

  private createQueryParams(searchCriteria: Record<string, any>): object {
    const query: Record<string, any> = {};

    if (searchCriteria.category !== 'publications') {
      query.category = searchCriteria.category;
    }

    if (searchCriteria.search) {
      query.q = searchCriteria.search;
    }

    return query;
  }

}
