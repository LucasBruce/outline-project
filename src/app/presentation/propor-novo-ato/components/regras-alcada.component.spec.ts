import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegrasAlcadaComponent } from './regras-alcada.component';

describe('RegrasAlcadaComponent', () => {
  let component: RegrasAlcadaComponent;
  let fixture: ComponentFixture<RegrasAlcadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegrasAlcadaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegrasAlcadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
