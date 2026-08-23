import { ChangeDetectionStrategy, Component } from '@angular/core'; import { COUPLE_CONFIG } from '../../config/couple.config';
@Component({selector:'app-love-letter',changeDetection:ChangeDetectionStrategy.OnPush,templateUrl:'./love-letter.html',styleUrl:'./love-letter.scss'}) export class LoveLetter{readonly config=COUPLE_CONFIG}
