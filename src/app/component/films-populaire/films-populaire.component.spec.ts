import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsPopulaireComponent } from './films-populaire.component';

describe('FilmsPopulaireComponent', () => {
  let component: FilmsPopulaireComponent;
  let fixture: ComponentFixture<FilmsPopulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmsPopulaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsPopulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
