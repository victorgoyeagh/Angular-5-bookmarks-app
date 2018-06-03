import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

//routing
import { RouterModule } from '@angular/router';
import { Routing } from './routes/routing.route';

//plugins
import {NgxPaginationModule} from 'ngx-pagination';

import { AppComponent } from './app.component';
import { BookmarkListComponent } from './components/bookmarks/bookmark-list/bookmark-list.component';
import { BookmarkManagerComponent } from './components/bookmarks/bookmark-manager/bookmark-manager.component';

//services
import { BookmarksService } from './services/bookmarks/bookmarks.service';

//views
import { BookmarksPage } from './views/bookmarks/bookmarks.component';
import { BookmarksResultPage } from './views/bookmarks-result/bookmarks-result.component';

//pipes
import { SortByPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    declarations: [
        AppComponent,
        BookmarkListComponent,
        BookmarkManagerComponent,
        BookmarksPage,
        BookmarksResultPage,
        SortByPipe,
        FilterPipe
    ],
    imports: [
        Routing,
        BrowserModule,
        ReactiveFormsModule,
        HttpModule,
        NgxPaginationModule
    ],
    providers: [
        BookmarksService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
