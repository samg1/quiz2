import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculonesComponent } from './peliculones.component';

describe('PeliculonesComponent', () => {
  let component: PeliculonesComponent;
  let fixture: ComponentFixture<PeliculonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
