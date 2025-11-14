import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProporAto } from './propor-ato';

describe('ProporAto', () => {
  let component: ProporAto;
  let fixture: ComponentFixture<ProporAto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProporAto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProporAto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
