import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackagingCreateComponent } from './packaging-create.component';

describe('PackagingCreateComponent', () => {
  let component: PackagingCreateComponent;
  let fixture: ComponentFixture<PackagingCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackagingCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackagingCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
