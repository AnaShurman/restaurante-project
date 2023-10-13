import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashBoardOrdersComponent } from './dash-board-orders.component';

describe('DashBoardOrdersComponent', () => {
  let component: DashBoardOrdersComponent;
  let fixture: ComponentFixture<DashBoardOrdersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashBoardOrdersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashBoardOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
