import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
    },
    {
        path: 'login',
        loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule)
    },
    {
        path: 'product-catalog',
        loadChildren: () => import('./pages/product-catalog/product-catalog.module').then((m) => m.ProductCatalogModule),
    },
    {
        path: 'product',
        loadChildren: () => import('./modules/Product/Product.module').then((m) => m.ProductModule)
    },{
        path: 'about',
        loadChildren: () => import('./pages/about/about.module').then((m) => m.AboutModule)
    }
];
