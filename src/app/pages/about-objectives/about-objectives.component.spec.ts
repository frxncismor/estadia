import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutObjectivesComponent } from './about-objectives.component';

describe('AboutObjectivesComponent', () => {
  let component: AboutObjectivesComponent;
  let fixture: ComponentFixture<AboutObjectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutObjectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutObjectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
