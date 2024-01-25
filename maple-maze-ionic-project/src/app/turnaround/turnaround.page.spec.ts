import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TurnaroundPage } from './turnaround.page';

describe('TurnaroundPage', () => {
  let component: TurnaroundPage;
  let fixture: ComponentFixture<TurnaroundPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TurnaroundPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
