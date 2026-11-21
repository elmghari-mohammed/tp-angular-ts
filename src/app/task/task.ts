import { Component, signal } from '@angular/core';

interface Tasks {
  id: number;
  title: string;
  DueDate: Date;
}

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class Task {
  // 1) Déclaration du signal : la valeur initiale est le tableau de tâches.
  //    On lit la valeur dans le template avec tasks() (les parenthèses sont obligatoires).
  tasks = signal<Tasks[]>([
    { id: 1, title: 'Task 1', DueDate: new Date('2023-03-13') },
    { id: 2, title: 'Task 2', DueDate: new Date('2023-03-14') },
    { id: 3, title: 'Task 3', DueDate: new Date('2023-03-15') },
  ]);

  // Signal lié au champ de saisie : il contient le nom de la tâche en cours d'écriture.
  newTaskTitle = signal('');

  private nextId = 4;

  // 2) set() : on REMPLACE complètement la valeur du signal.
  setTasks(tasks: Tasks[]) {
    this.tasks.set(tasks);
  }

  clearTasks() {
    this.tasks.set([]);
  }

  // 3) update() : on CALCULE la nouvelle valeur à partir de l'ancienne.
  //    Ici on ajoute la tâche saisie dans l'input.
  addTask() {
    const title = this.newTaskTitle().trim();
    if (!title) {
      return; // on ignore un nom vide
    }

    this.tasks.update((tasks) => [
      ...tasks,
      { id: this.nextId++, title, DueDate: new Date() },
    ]);

    this.newTaskTitle.set(''); // on vide le champ
  }

  renameTask(id: number, title: string) {
    this.tasks.update((tasks) =>
      tasks.map((task) => (task.id === id ? { ...task, title } : task)),
    );
  }

  deleteTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }

  resetTasks() {
    this.tasks.set([
      { id: 1, title: 'Task 1', DueDate: new Date('2023-03-13') },
      { id: 2, title: 'Task 2', DueDate: new Date('2023-03-14') },
      { id: 3, title: 'Task 3', DueDate: new Date('2023-03-15') },
    ]);
    this.nextId = 4;
  }
}
