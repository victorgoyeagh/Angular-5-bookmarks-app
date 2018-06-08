import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

//components
import { BookmarkListComponent } from './../bookmarks/bookmark-list/bookmark-list.component';
import { BookmarkManagerComponent } from './../bookmarks/bookmark-manager/bookmark-manager.component';

//services
import { BookmarksService } from './services/bookmarks.service';

//plugins
import { NgxPaginationModule } from 'ngx-pagination';

//pipes
import { SortByPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
    declarations:[
        BookmarkListComponent,
        BookmarkManagerComponent,
        SortByPipe,
        FilterPipe
    ],
    imports: [
        BrowserModule,
        NgxPaginationModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [
        
    ],
    exports: [
        BookmarkListComponent,
        BookmarkManagerComponent
    ]
})

export class BookmarksModule {

}