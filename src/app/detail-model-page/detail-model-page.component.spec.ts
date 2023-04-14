import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailModelPageComponent } from './detail-model-page.component';

describe('DetailModelPageComponent', () => {
  let component: DetailModelPageComponent;
  let fixture: ComponentFixture<DetailModelPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailModelPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailModelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
