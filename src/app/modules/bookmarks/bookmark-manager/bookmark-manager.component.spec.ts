import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkManagerComponent } from './bookmark-manager.component';

describe('BookmarkManagerComponent', () => {
  let component: BookmarkManagerComponent;
  let fixture: ComponentFixture<BookmarkManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookmarkManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookmarkManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
