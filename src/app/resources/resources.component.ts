import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesComponent {

  search(searchCriteria: object): void {
    console.log('search for', searchCriteria);
  }

}
