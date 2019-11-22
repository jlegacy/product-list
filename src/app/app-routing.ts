import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; 

const routes: Routes = [
    {
        path: '',
        redirectTo: 'product-list',
        pathMatch: 'full'
    },
    {
        path: 'product-list',
        loadChildren: () => import('./components/product-list/product-list.module').then(mod => mod.ProductListModule)
    },
    {
        path: 'product-detail',
        loadChildren: () => import('./components/product-detail/product-detail.module').then(mod => mod.ProductDetailModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule],
    providers: []
})

export class AppRouting { }
