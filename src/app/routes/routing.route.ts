import { ModuleWithProviders } from '@angular/core';
import { Routes, Route, RouterModule, RouterLinkActive } from '@angular/router';
import { BookmarksPage } from '../views/bookmarks/bookmarks.component';
import { BookmarksResultPage } from '../views/bookmarks-result/bookmarks-result.component';
import { PageNotFoundPage } from '../views/page-not-found/page-not-found.component';

const appRoutes: Routes = <Array<Route>>[
    {
        path: '',
        component: BookmarksPage,
        pathMatch: 'full'
    },
    {
        path: 'bookmarks',
        component: BookmarksPage,
        pathMatch: 'full'
    },
    {
        path: 'bookmarks-result/:bookmarkId',
        component: BookmarksResultPage,
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundPage
    }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes,
    {
        useHash: true
    }
);