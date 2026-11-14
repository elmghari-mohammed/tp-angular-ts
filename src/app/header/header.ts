import { Component } from '@angular/core';

type Task = {
  id: number;
  title: string;
};

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.scss',
  templateUrl: './header.html',
})
export class Header {
  title = 'Taskflow';
  canDelete = true;
  tasks: Task[] = [
    { id: 1, title: 'test 1' },
    { id: 2, title: 'Lire le cours Angular' },
  ];

  rename() {
    this.title = 'Mes tâches';
  }
}
