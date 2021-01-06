import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { forkJoin, Observable } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';

import { FoleonProject, FoleonPublication } from '../models/core';
import { ResourcesService } from '../services/resources.service';

interface SearchCriteria {
  q: string;
  category: 'publications' | 'projects';
}

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesComponent implements OnInit {

  public items$!: Observable<Array<FoleonPublication | FoleonProject>>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private resourcesService: ResourcesService,
  ) {
  }

  ngOnInit(): void {
    this.items$ = this.activatedRoute.queryParams.pipe(
      switchMap((params: Partial<SearchCriteria>) => {
        return params.category === 'projects'
          ? this.resourcesService.projects()
          : this.resourcesService.publications();
      }),
      map(response => {
        return 'edition' in response.payload._embedded
          ? response.payload._embedded.edition
          : response.payload._embedded.title;
      }),
      tap(console.log)
    );

    this.items$.subscribe(items => {
      console.log(items);
    });
  }

  search(searchCriteria: object): void {
    this.resourcesService.projects().subscribe(result => {
      console.log(JSON.stringify(result, null, 2));
    });

    this.resourcesService.publications().subscribe(result => {
      console.log(JSON.stringify(result, null, 2));
    });
  }

}
