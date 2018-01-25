import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultsPanelComponent } from './search-results-panel.component';

describe('SearchResultsPanelComponent', () => {
  let component: SearchResultsPanelComponent;
  let fixture: ComponentFixture<SearchResultsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
