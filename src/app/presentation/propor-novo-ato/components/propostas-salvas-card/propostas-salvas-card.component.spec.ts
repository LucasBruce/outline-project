import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropostasSalvasCardComponent } from './propostas-salvas-card.component';

describe('PropostasSalvasCardComponent', () => {
  let component: PropostasSalvasCardComponent;
  let fixture: ComponentFixture<PropostasSalvasCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropostasSalvasCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropostasSalvasCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
