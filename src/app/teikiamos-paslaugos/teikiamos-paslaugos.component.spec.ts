import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeikiamosPaslaugosComponent } from './teikiamos-paslaugos.component';

describe('TeikiamosPaslaugosComponent', () => {
  let component: TeikiamosPaslaugosComponent;
  let fixture: ComponentFixture<TeikiamosPaslaugosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeikiamosPaslaugosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeikiamosPaslaugosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
