import { Component, forwardRef, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { About } from '../about/about';
import { Header } from '../header/header';

@Component({
  imports: [forwardRef(() => About), Header, RouterLink],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {
  protected readonly afficherAbout = signal(false);
}
