import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { PHOTOS } from '../../data/photos.data';
import { CouplePhoto } from '../../models/couple-photo.interface';
import { PhotoLightbox } from '../photo-lightbox/photo-lightbox';
@Component({
  selector: 'app-gallery',
  imports: [PhotoLightbox],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
})
export class Gallery {
  readonly photos = PHOTOS;
  readonly selected = signal<number | null>(null);
  open(photo: CouplePhoto) {
    this.selected.set(this.photos.findIndex((p) => p.id === photo.id));
    document.body.style.overflow = 'hidden';
  }
  close() {
    this.selected.set(null);
    document.body.style.overflow = '';
  }
}
