import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookmarkListComponent } from './components/bookmarks/bookmark-list/bookmark-list.component';
import { BookmarkManagerComponent } from './components/bookmarks/bookmark-manager/bookmark-manager.component';

@NgModule({
    declarations: [
        AppComponent,
        BookmarkListComponent,
        BookmarkManagerComponent
    ],
    imports: [
        BrowserModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
