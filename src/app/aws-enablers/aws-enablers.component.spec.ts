import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsEnablersComponent } from './aws-enablers.component';

describe('AwsEnablersComponent', () => {
  let component: AwsEnablersComponent;
  let fixture: ComponentFixture<AwsEnablersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwsEnablersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwsEnablersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
