import { ChangeDetectionStrategy, Component } from '@angular/core'; import { LOVE_REASONS } from '../../data/love-reasons.data';
@Component({selector:'app-love-reasons',changeDetection:ChangeDetectionStrategy.OnPush,templateUrl:'./love-reasons.html',styleUrl:'./love-reasons.scss'}) export class LoveReasons{readonly reasons=LOVE_REASONS}
