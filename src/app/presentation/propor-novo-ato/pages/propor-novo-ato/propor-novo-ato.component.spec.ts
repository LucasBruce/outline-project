import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProporNovoAto } from './propor-novo-ato';

describe('ProporNovoAto', () => {
  let component: ProporNovoAto;
  let fixture: ComponentFixture<ProporNovoAto>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProporNovoAto]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProporNovoAto);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
