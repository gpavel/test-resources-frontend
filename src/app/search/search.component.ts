import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchComponent {

  @Output()
  search = new EventEmitter<{ search: string }>();

  searchForm = new FormGroup({
    search: new FormControl(''),
    category: new FormControl('publications'),
  });

}
