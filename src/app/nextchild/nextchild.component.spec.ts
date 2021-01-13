import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NextchildComponent } from './nextchild.component';

describe('NextchildComponent', () => {
  let component: NextchildComponent;
  let fixture: ComponentFixture<NextchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NextchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NextchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
