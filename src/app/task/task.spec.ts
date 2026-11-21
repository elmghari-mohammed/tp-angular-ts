import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Task } from './task';

describe('Task', () => {
  let component: Task;
  let fixture: ComponentFixture<Task>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Task],
    }).compileComponents();

    fixture = TestBed.createComponent(Task);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should start with 3 tasks', () => {
    expect(component.tasks().length).toBe(3);
  });

  it('addTask() should append the typed task with update()', () => {
    component.newTaskTitle.set('Nouvelle tâche');
    component.addTask();

    expect(component.tasks().length).toBe(4);
    expect(component.tasks().at(-1)?.title).toBe('Nouvelle tâche');
  });

  it('addTask() should ignore an empty or blank name', () => {
    component.newTaskTitle.set('   ');
    component.addTask();

    expect(component.tasks().length).toBe(3);
  });

  it('addTask() should clear the input signal with set()', () => {
    component.newTaskTitle.set('Ma tâche');
    component.addTask();

    expect(component.newTaskTitle()).toBe('');
  });

  it('renameTask() should change the title with update()', () => {
    component.renameTask(1, 'Renommée');

    expect(component.tasks().find((t) => t.id === 1)?.title).toBe('Renommée');
  });

  it('deleteTask() should remove a task with update()', () => {
    component.deleteTask(2);

    expect(component.tasks().length).toBe(2);
    expect(component.tasks().some((t) => t.id === 2)).toBe(false);
  });

  it('clearTasks() should empty the signal with set()', () => {
    component.clearTasks();

    expect(component.tasks()).toEqual([]);
  });

  it('resetTasks() should replace the whole array with set()', () => {
    component.clearTasks();
    component.resetTasks();

    expect(component.tasks().length).toBe(3);
  });
});
