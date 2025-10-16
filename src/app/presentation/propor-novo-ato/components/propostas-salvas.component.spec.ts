import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostasSalvasComponent } from './propostas-salvas.component';

describe('PropostasSalvasComponent', () => {
  let component: PropostasSalvasComponent;
  let fixture: ComponentFixture<PropostasSalvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropostasSalvasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropostasSalvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
