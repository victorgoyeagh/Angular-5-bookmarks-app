import { TestBed, async, ComponentFixture } from "@angular/core/testing";
import { BookmarkListComponent, SortDirection } from "./bookmark-list.component";
import { BookmarksService } from "../services/bookmarks.service";
import { SortByPipe } from "../pipes/sort.pipe";
import { FilterPipe } from "../pipes/filter.pipe";
import { NgxPaginationModule } from "ngx-pagination";
import { IBookmark } from './../entities/bookmark.entity';
import * as Rx from 'rxjs';


describe("BookmarkList Component", () => {
    let fixture: ComponentFixture<BookmarkListComponent>;
    let component: BookmarkListComponent;
    let testBookmarks: Array<IBookmark>;
    let service: BookmarksService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                BookmarkListComponent,
                SortByPipe,
                FilterPipe
            ],
            imports: [
                NgxPaginationModule
            ],
            providers: [
                BookmarksService
            ]
        }).compileComponents();

        fixture = TestBed.createComponent(BookmarkListComponent);
        component = fixture.componentInstance;

        const componentInstance = fixture.debugElement.componentInstance;

        testBookmarks = <Array<IBookmark>>[
            { Id: 3303112409, Name: "Zebra", Description: "Zebra linkage", Url: "http://www.zebra.com" },
            { Id: 890648743, Name: "Bing", Description: "bing link up", Url: "http://www.bing.com" }
        ];
    })

    afterEach(() => {
        //component.ngOnDestroy();
    })

    it("should load", () => {
        expect(component).toBeTruthy();
    })

    it("ngOnInit readys component", () => {

        service = TestBed.get(BookmarksService);
        //service.subBookmarkCollection = new Rx.BehaviorSubject(testBookmarks);

        expect(component.searchTerm).toBeUndefined;
        component.ngOnInit();
        fixture.detectChanges();

        expect(component.searchTerm).toBeDefined;
        expect(component.ngOnInit).not.toHaveBeenCalled;
    })

    it("apply sort method sorts data properly", () => {
        component.bookmarkCollection = testBookmarks;
        component.ApplySort("Name", SortDirection.Descending);

        fixture.detectChanges();

        expect(component.bookmarkCollection).toBeDefined;
        //expect(component.bookmarkCollection.length).toEqual(2);
        expect(component["sortDirection"]).toEqual(SortDirection.Descending);
        expect(component["formerSortDirection"]).toBeDefined;
        expect(component["sortByParam"]).toEqual("Name");
    })


})