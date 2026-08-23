import { ChangeDetectionStrategy, Component, HostListener, signal } from '@angular/core';
@Component({ selector: 'app-navbar', changeDetection: ChangeDetectionStrategy.OnPush, templateUrl: './navbar.html', styleUrl: './navbar.scss' })
export class Navbar {
  readonly scrolled = signal(false); readonly open = signal(false);
  @HostListener('window:scroll') onScroll(): void { this.scrolled.set(scrollY > 40); }
  go(id: string): void { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); this.open.set(false); }
}
