import { Component, OnInit } from '@angular/core';
import { BookmarksService } from '../../../services/bookmarks/bookmarks.service';


@Component({
    selector: 'ph-bookmark-manager',
    templateUrl: './bookmark-manager.component.html',
    styleUrls: ['./bookmark-manager.component.css']
})
export class BookmarkManagerComponent implements OnInit {

    constructor(
        private _bookmarksService: BookmarksService
    ) { }

    ngOnInit() {
    }

}
