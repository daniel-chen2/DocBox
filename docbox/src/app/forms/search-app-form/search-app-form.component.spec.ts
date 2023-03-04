import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAppFormComponent } from './search-app-form.component';

describe('SearchAppFormComponent', () => {
  let component: SearchAppFormComponent;
  let fixture: ComponentFixture<SearchAppFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchAppFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchAppFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
