import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
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
  readonly categories = [
    'Todos',
    'Citas',
    'Viajes',
    'Selfies',
    'Fiestas',
    'Momentos random',
    'Favoritas',
  ];
  readonly active = signal('Todos');
  readonly selected = signal<number | null>(null);
  readonly filtered = computed(() =>
    this.photos.filter(
      (p) =>
        this.active() === 'Todos' ||
        (this.active() === 'Favoritas' ? p.favorite : p.category === this.active())
    )
  );
  open(photo: CouplePhoto) {
    this.selected.set(this.filtered().findIndex((p) => p.id === photo.id));
    document.body.style.overflow = 'hidden';
  }
  close() {
    this.selected.set(null);
    document.body.style.overflow = '';
  }
}
