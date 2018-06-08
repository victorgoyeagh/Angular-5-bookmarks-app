import { Component, OnInit, AfterContentInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { BookmarksService } from '../services/bookmarks.service';
import { IBookmark } from './../entities/bookmark.entity';
import * as Rx from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { SortByPipe } from './../pipes/sort.pipe';
import { FilterPipe } from './../pipes/filter.pipe';
import { environment } from '../../../../environments/environment';

@Component({
    selector: 'app-bookmark-list',
    templateUrl: './bookmark-list.component.html',
    styleUrls: ['./bookmark-list.component.scss']
})

export class BookmarkListComponent implements OnInit, AfterContentInit, OnDestroy {
    public bookmarkCollection: Array<IBookmark> = undefined;
    private subs: Rx.Subscription;
    public searchTerm: string = undefined;
    private sortByParam: string = 'Name';
    public SortDirection = SortDirection;
    private sortDirection: SortDirection = SortDirection.Ascending;
    private formerSortDirection: SortDirection = undefined;
    public p: number = 1;
    private defaultItemsPerPage: number = environment.config.pagination.defaultItemsPerPage;

    @ViewChild("searchBookmarkTerm") searchBookmarkTerm: ElementRef;

    constructor(
        private _bookmarksService: BookmarksService
    ) {
    }

    ngOnInit() {

        this.subs = this._bookmarksService.subBookmarkCollection
            .subscribe((response: Array<IBookmark>) => {
                this.bookmarkCollection = response;
            })
    }

    ngAfterContentInit(){

        Rx.fromEvent(<HTMLInputElement>this.searchBookmarkTerm.nativeElement, "input")
            .pipe(
                map(
                    (event: Event) => (<HTMLInputElement>event.target).value
                ),
                debounceTime(800)
            )
            .subscribe((searchTerm) => {
                console.log(searchTerm);
                this.searchTerm = searchTerm;
            });
    }

    ApplySort(param: string, direction: SortDirection) {
        this.sortByParam = param;
        this.formerSortDirection = this.sortDirection;
        this.sortDirection = direction;

        if (this.sortDirection != this.formerSortDirection) {
            this.bookmarkCollection = this.bookmarkCollection.reverse();
        }
    }

    DeleteBookmark(bookmarkId: number) {
        this._bookmarksService.DeleteBookmark(bookmarkId);
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }

}


export enum SortDirection {
    Ascending,
    Descending
}
