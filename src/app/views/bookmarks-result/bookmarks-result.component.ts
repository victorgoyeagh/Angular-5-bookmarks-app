import { Component, OnInit } from '@angular/core';
import { RequestOptions } from '@angular/http';
import { BookmarksService } from '../../services/bookmarks/bookmarks.service';
import { IBookmark } from '../../entities/bookmark.entity';
import { Route, Router } from '@angular/router';

@Component({
    selector: 'app-bookmarks-result',
    templateUrl: './bookmarks-result.component.html',
    styleUrls: ['./bookmarks-result.component.scss']
})
export class BookmarksResultPage implements OnInit {
    private addedBookmark: IBookmark = undefined;

    constructor(
        private _bookmarksService: BookmarksService
    ) { }

    ngOnInit() {
        let search = window.location.toString().split("?")[1];
        let arrParams = search.split("&");
        let params = this.ConvertToParams(arrParams);

        let bmId = params["Id"];
        this.addedBookmark = <IBookmark>this._bookmarksService.GetBookmarkById(bmId);
    }

    ConvertToParams(strParams: Array<string>) {
        let retArr = new Array<string>();

        strParams.forEach(element => {
            let tmpArr = element.split("=");
            retArr[tmpArr[0]] = tmpArr[1]
        });

        return retArr;
    }

}
