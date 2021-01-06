import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FoleonProject } from '../models/core';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'card' },
})
export class CardProjectComponent  {

  @Input()
  project!: FoleonProject;

}
