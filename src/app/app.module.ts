import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//routing
import { RouterModule } from '@angular/router';
import { RoutingModule } from './routes/routing.route';

//modules
import { BookmarksModule } from './modules/bookmarks/boomarks.module';

//components
import { App } from './app.component';


//views
import { BookmarksPage } from './views/bookmarks/bookmarks.component';
import { BookmarksResultPage } from './views/bookmarks-result/bookmarks-result.component';


@NgModule({
    declarations: [
        App,
        BookmarksPage,
        BookmarksResultPage
    ],
    imports: [
        BookmarksModule,
        RoutingModule,
        BrowserModule
    ],
    providers: [
    ],
    bootstrap: [
        App
    ]
})

export class AppModule { }
