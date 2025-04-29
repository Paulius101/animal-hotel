import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PradziaHeroComponent } from './pradzia-hero.component';

describe('PradziaHeroComponent', () => {
  let component: PradziaHeroComponent;
  let fixture: ComponentFixture<PradziaHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PradziaHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PradziaHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
