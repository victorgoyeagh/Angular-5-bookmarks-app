import { Injectable } from '@angular/core';
import { DataProviderService } from '../data-provider/data-provider.service';
import * as Rx from 'rxjs';
import { map, debounceTime } from 'rxjs/operators';
import { IBookmark } from './../../entities/bookmark.entity';

@Injectable({
    providedIn: 'root'
})
export class BookmarksService {
    private bookmarkCollection: Array<IBookmark>;
    public subBookmarkCollection: Rx.BehaviorSubject<Array<IBookmark>> = new Rx.BehaviorSubject<Array<IBookmark>>([]);

    constructor(
        private _dataProviderService: DataProviderService
    ) {
        this.GetAllBookmarks();
    }

    //Get bookmarks data and broadcast via BehaviourSubject observable
    GetAllBookmarks(): Rx.Observable<any> {
        this.bookmarkCollection = <Array<IBookmark>>this._dataProviderService.GetAllItems();
        this.subBookmarkCollection.next(this.bookmarkCollection);

        return this.subBookmarkCollection;
    }

    //Get one record for preview
    GetBookmarkById(bookmarkId: number): IBookmark {
        this.bookmarkCollection = <Array<IBookmark>>this._dataProviderService.GetAllItems();
        return this.bookmarkCollection.filter((bookmark: IBookmark) => {
            return bookmark.Id == bookmarkId
        })[0]
    }

    //insert bookmark
    AddNewBookmark(bookmark: IBookmark) {
        this.bookmarkCollection = <Array<IBookmark>>this._dataProviderService.GetAllItems();
        this.bookmarkCollection.push(bookmark);
        this.SaveBookmarks(this.bookmarkCollection);
    }

    //remove bookmak
    DeleteBookmark(bookmarkId: number) {
        this.bookmarkCollection = <Array<IBookmark>>this._dataProviderService.GetAllItems();
        let newCollection = this.bookmarkCollection.filter((bookmark: IBookmark) => {
            return bookmark.Id != bookmarkId
        })
        this.SaveBookmarks(newCollection);
    }

    SaveBookmarks(bookmarks: Array<IBookmark>) {
        this._dataProviderService.SaveData(bookmarks);
        this.subBookmarkCollection.next(bookmarks); //broadcast change
    }
}
