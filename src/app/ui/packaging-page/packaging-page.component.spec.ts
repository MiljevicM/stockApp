import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingPageComponent } from './packaging-page.component';

describe('PackagingPageComponent', () => {
  let component: PackagingPageComponent;
  let fixture: ComponentFixture<PackagingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
