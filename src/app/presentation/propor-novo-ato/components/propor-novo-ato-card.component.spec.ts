import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProporNovoAtoCardComponent } from './propor-novo-ato-card.component';

describe('ProporNovoAtoCardComponent', () => {
  let component: ProporNovoAtoCardComponent;
  let fixture: ComponentFixture<ProporNovoAtoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProporNovoAtoCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProporNovoAtoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
