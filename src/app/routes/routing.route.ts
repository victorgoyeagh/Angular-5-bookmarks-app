import { ModuleWithProviders } from '@angular/core';
import { Routes, Route, RouterModule, RouterLinkActive } from '@angular/router';
import { BookmarksPage } from '../views/bookmarks/bookmarks.component';
import { BookmarksResultPage } from '../views/bookmarks-result/bookmarks-result.component';

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
        path: 'bookmarks-result',
        component: BookmarksResultPage,
        pathMatch: 'full'
    }
];

export const RoutingModule: ModuleWithProviders = RouterModule.forRoot(appRoutes,
    {
        useHash: true
    }
);