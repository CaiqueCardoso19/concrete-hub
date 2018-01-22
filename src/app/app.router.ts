import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RepositoryDetailComponent } from './repository-detail/repository-detail.component';

const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'repository-detail/:name/:repo',
        component: RepositoryDetailComponent
    },
    {
        path: '**',
        component: HomeComponent
    }
];

export const Router = RouterModule.forRoot(appRoutes);