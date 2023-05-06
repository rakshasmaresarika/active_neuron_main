import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniqueUserChartComponent } from './unique-user-chart.component';

describe('UniqueUserChartComponent', () => {
  let component: UniqueUserChartComponent;
  let fixture: ComponentFixture<UniqueUserChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniqueUserChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniqueUserChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
