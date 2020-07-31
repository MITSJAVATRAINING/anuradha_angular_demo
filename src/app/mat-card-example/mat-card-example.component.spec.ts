import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatCardExampleComponent } from './mat-card-example.component';

describe('MatCardExampleComponent', () => {
  let component: MatCardExampleComponent;
  let fixture: ComponentFixture<MatCardExampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatCardExampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatCardExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
