import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskScreenComponent } from './edit-task-screen.component';

describe('EditTaskScreenComponent', () => {
  let component: EditTaskScreenComponent;
  let fixture: ComponentFixture<EditTaskScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTaskScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTaskScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
