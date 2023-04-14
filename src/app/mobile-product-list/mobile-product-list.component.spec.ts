import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileProductListComponent } from './mobile-product-list.component';

describe('MobileProductListComponent', () => {
  let component: MobileProductListComponent;
  let fixture: ComponentFixture<MobileProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobileProductListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobileProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
