import { ChangeDetectionStrategy, Component } from '@angular/core'; import { TIMELINE } from '../../data/timeline.data';
@Component({selector:'app-timeline',changeDetection:ChangeDetectionStrategy.OnPush,templateUrl:'./timeline.html',styleUrl:'./timeline.scss'}) export class Timeline{readonly moments=TIMELINE}
