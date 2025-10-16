import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultarAtoComponent } from './consultar-ato.component';

describe('ConsultarAtoComponent', () => {
  let component: ConsultarAtoComponent;
  let fixture: ComponentFixture<ConsultarAtoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultarAtoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultarAtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
