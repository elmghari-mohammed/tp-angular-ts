import { Component, forwardRef, signal } from '@angular/core';
import { About } from '../about/about';
import { Header } from '../header/header';

@Component({
  imports: [forwardRef(() => About), Header],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  protected readonly afficherAbout = signal(false);
}
