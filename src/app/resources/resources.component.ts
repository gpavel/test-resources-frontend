import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ResourcesService } from '../services/resources.service';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResourcesComponent {

  constructor(private resourcesService: ResourcesService) {
  }

  search(searchCriteria: object): void {
    this.resourcesService.findAll().subscribe(result => {
      console.log(result);
    });
  }

}
