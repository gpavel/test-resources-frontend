import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FoleonPublication } from '../models/core';

@Component({
  selector: 'app-card-publication',
  templateUrl: './card-publication.component.html',
  styleUrls: ['./card-publication.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { class: 'card' },
})
export class CardPublicationComponent {

  @Input()
  publication!: FoleonPublication;

}
