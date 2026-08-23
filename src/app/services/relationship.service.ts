import { Injectable, signal } from '@angular/core';
import { COUPLE_CONFIG } from '../config/couple.config';

export interface RelationshipTime { days: number; hours: number; minutes: number; seconds: number; isFuture: boolean; }
@Injectable({ providedIn: 'root' })
export class RelationshipService {
  readonly time = signal(this.calculate());
  private timer?: ReturnType<typeof setInterval>;
  start(): void { if (!this.timer) this.timer = setInterval(() => this.time.set(this.calculate()), 1000); }
  stop(): void { clearInterval(this.timer); this.timer = undefined; }
  private calculate(): RelationshipTime {
    const difference = Date.now() - new Date(COUPLE_CONFIG.relationshipStart).getTime();
    const total = Math.max(0, Math.floor(Math.abs(difference) / 1000));
    return { days: Math.floor(total / 86400), hours: Math.floor(total / 3600), minutes: Math.floor(total / 60), seconds: total, isFuture: difference < 0 };
  }
}
