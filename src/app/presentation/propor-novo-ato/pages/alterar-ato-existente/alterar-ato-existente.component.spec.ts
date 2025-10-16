import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlterarAtoExistenteComponent } from './alterar-ato-existente.component';

describe('AlterarAtoExistenteComponent', () => {
  let component: AlterarAtoExistenteComponent;
  let fixture: ComponentFixture<AlterarAtoExistenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlterarAtoExistenteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AlterarAtoExistenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
