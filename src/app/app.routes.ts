import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardPage} from './dashboard/dashboard.page';
import {MainLayout} from './main/main.layout';
import {AssetDetailPage} from './dashboard/asset-detail.page';
import {PhonebookDetailPage} from './dashboard/phonebook-detail.page';
import {PostListPage} from './dashboard/post-list.page';
import {PostListDashboard} from './dashboard/post-list.dashboard';

const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardPage,
      },
      {
        path: 'detail/:assetNo',
        component: AssetDetailPage,
      },
      {
        path: 'phone-detail/:contactId',
        component: PhonebookDetailPage,
      },
      {
        path: 'post-list/:id',
        component: PostListPage,
      },
      {
        path: 'post-list.dashboard',
        component: PostListDashboard,
      }
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {useHash: false}),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {
}
