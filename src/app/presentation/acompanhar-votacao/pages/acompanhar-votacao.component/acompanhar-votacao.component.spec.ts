import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcompanharVotacaoComponent } from './acompanhar-votacao.component';

describe('AcompanharVotacaoComponent', () => {
  let component: AcompanharVotacaoComponent;
  let fixture: ComponentFixture<AcompanharVotacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcompanharVotacaoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcompanharVotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
