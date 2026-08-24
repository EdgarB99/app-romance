import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';
import { CouplePhoto } from '../../models/couple-photo.interface';
@Component({
  selector: 'app-photo-lightbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './photo-lightbox.html',
  styleUrl: './photo-lightbox.scss',
})
export class PhotoLightbox {
  @Input({ required: true }) photos: CouplePhoto[] = [];
  @Input({ required: true }) index = 0;
  @Output() closed = new EventEmitter<void>();
  @Output() indexChange = new EventEmitter<number>();
  private startX = 0;
  get photo() {
    return this.photos[this.index];
  }
  prev() {
    this.indexChange.emit((this.index - 1 + this.photos.length) % this.photos.length);
  }
  next() {
    this.indexChange.emit((this.index + 1) % this.photos.length);
  }
  @HostListener('document:keydown', ['$event']) key(e: KeyboardEvent) {
    if (e.key === 'Escape') this.closed.emit();
    if (e.key === 'ArrowLeft') this.prev();
    if (e.key === 'ArrowRight') this.next();
  }
  touchStart(e: TouchEvent) {
    this.startX = e.changedTouches[0].clientX;
  }
  touchEnd(e: TouchEvent) {
    const d = e.changedTouches[0].clientX - this.startX;
    if (Math.abs(d) > 45) d > 0 ? this.prev() : this.next();
  }
}
