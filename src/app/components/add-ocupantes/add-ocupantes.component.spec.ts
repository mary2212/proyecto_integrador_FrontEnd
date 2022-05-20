import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOcupantesComponent } from './add-ocupantes.component';

describe('AddOcupantesComponent', () => {
  let component: AddOcupantesComponent;
  let fixture: ComponentFixture<AddOcupantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOcupantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddOcupantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
