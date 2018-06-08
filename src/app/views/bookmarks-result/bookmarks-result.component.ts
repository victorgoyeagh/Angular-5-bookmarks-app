import { Component, OnInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { BookmarksService } from './../../modules/bookmarks/services/bookmarks.service';
import { IBookmark } from './../../modules/bookmarks/entities/bookmark.entity';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-bookmarks-result',
    templateUrl: './bookmarks-result.component.html',
    styleUrls: ['./bookmarks-result.component.scss']
})
export class BookmarksResultPage implements OnInit, AfterViewChecked {
    public addedBookmark: IBookmark = undefined;

    constructor(
        private _route: ActivatedRoute,
        private _bookmarksService: BookmarksService
    ) { }

    ngOnInit() {

        this._route.queryParams.subscribe((params) => {
            this.addedBookmark = <IBookmark>this._bookmarksService.GetBookmarkById(params.bookmarkId);
        })
    }

    ngAfterViewChecked(){
    }

}
