import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacoesNorteadoresComponent } from './informacoes-norteadores.component';

describe('InformacoesNorteadoresComponent', () => {
  let component: InformacoesNorteadoresComponent;
  let fixture: ComponentFixture<InformacoesNorteadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InformacoesNorteadoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformacoesNorteadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
