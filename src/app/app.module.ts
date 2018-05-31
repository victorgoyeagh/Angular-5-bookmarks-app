import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BookmarkListComponent } from './components/bookmarks/bookmark-list/bookmark-list.component';
import { BookmarkManagerComponent } from './components/bookmarks/bookmark-manager/bookmark-manager.component';
import { BookmarksService } from './services/bookmarks/bookmarks.service';

@NgModule({
    declarations: [
        AppComponent,
        BookmarkListComponent,
        BookmarkManagerComponent,
        ReactiveFormsModule
    ],
    imports: [
        BrowserModule
    ],
    providers: [
        BookmarksService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
