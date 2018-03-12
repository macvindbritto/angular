import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRowComponent } from './image-row.component';
import { ImageRowComponent1 } from './image-row.component1';

describe('ImageRowComponent', () => {
  let component: ImageRowComponent;
  let fixture: ComponentFixture<ImageRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('ImageRowComponent1', () => {
  let component: ImageRowComponent1;
  let fixture: ComponentFixture<ImageRowComponent1>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImageRowComponent1 ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageRowComponent1);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});