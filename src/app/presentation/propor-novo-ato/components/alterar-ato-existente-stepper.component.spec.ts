import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarAtoExistenteStepperComponent } from './alterar-ato-existente-stepper.component';

describe('AlterarAtoExistenteStepperComponent', () => {
  let component: AlterarAtoExistenteStepperComponent;
  let fixture: ComponentFixture<AlterarAtoExistenteStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterarAtoExistenteStepperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarAtoExistenteStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
