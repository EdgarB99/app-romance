import { ChangeDetectionStrategy, Component } from '@angular/core'; import { PLACES } from '../../data/places.data';
@Component({selector:'app-places',changeDetection:ChangeDetectionStrategy.OnPush,templateUrl:'./places.html',styleUrl:'./places.scss'}) export class Places{readonly places=PLACES}
