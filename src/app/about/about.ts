import { Component, forwardRef, signal } from '@angular/core';
import { Home } from '../home/home';

@Component({
  imports: [forwardRef(() => Home)],
  selector: 'app-about',
  styleUrl: './about.scss',
  templateUrl: './about.html',
})
export class About {
  protected readonly afficherHome = signal(false);
}
