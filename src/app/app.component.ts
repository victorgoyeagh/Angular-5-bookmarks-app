import { Component } from '@angular/core';
import { BookmarkListComponent } from './components/bookmarks/bookmark-list/bookmark-list.component';
import { BookmarkManagerComponent } from './components/bookmarks/bookmark-manager/bookmark-manager.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    private title = 'Bookmarks';
    private date = new Date().getFullYear();
}
