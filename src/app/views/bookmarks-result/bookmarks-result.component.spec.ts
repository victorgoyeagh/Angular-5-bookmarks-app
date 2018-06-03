import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksResultComponent } from './bookmarks-result.component';

describe('BookmarksResultComponent', () => {
  let component: BookmarksResultComponent;
  let fixture: ComponentFixture<BookmarksResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarksResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarksResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
