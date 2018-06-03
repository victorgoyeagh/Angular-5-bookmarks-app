import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule, RouterLinkActive } from '@angular/router';
import { BookmarksPage } from '../views/bookmarks/bookmarks.component';
import { BookmarksResultPage } from '../views/bookmarks-result/bookmarks-result.component';

const appRoutes: Routes = [
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

export const Routing: ModuleWithProviders = RouterModule.forRoot(appRoutes,
    {
        useHash: true
    }
);