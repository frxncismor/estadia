import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTechnologiesComponent } from './about-technologies.component';

describe('AboutTechnologiesComponent', () => {
  let component: AboutTechnologiesComponent;
  let fixture: ComponentFixture<AboutTechnologiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutTechnologiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
