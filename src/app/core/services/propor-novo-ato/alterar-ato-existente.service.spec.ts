import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarAtoExistenteService } from './alterar-ato-existente.service';

describe('AlterarAtoExistenteService', () => {
  let component: AlterarAtoExistenteService;
  let fixture: ComponentFixture<AlterarAtoExistenteService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterarAtoExistenteService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarAtoExistenteService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
