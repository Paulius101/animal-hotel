import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KainynasComponent } from './kainynas.component';

describe('KainynasComponent', () => {
  let component: KainynasComponent;
  let fixture: ComponentFixture<KainynasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KainynasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KainynasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
