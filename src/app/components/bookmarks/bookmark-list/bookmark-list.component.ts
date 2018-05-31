import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../../../services/bookmarks/bookmarks.service';
@Component({
    selector: 'ph-bookmark-list',
    templateUrl: './bookmark-list.component.html',
    styleUrls: ['./bookmark-list.component.css']
})

export class BookmarkListComponent implements OnInit {

    constructor(
        private _bookmarksService: BookmarksService
    ) { }

    ngOnInit() {
    }

}
