import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgoninitPassingParamComponent } from './ngoninit-passing-param.component';

describe('NgoninitPassingParamComponent', () => {
  let component: NgoninitPassingParamComponent;
  let fixture: ComponentFixture<NgoninitPassingParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgoninitPassingParamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgoninitPassingParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
