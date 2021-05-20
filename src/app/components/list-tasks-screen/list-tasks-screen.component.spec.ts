import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTasksScreenComponent } from './list-tasks-screen.component';

describe('ListTasksScreenComponent', () => {
  let component: ListTasksScreenComponent;
  let fixture: ComponentFixture<ListTasksScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListTasksScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTasksScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
