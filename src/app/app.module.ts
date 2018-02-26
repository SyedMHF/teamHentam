import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppComponent} from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app.routes';
import {HttpClientModule} from '@angular/common/http';
import {MainLayout} from './main/main.layout';
import {AssetService} from '../services/asset.service';
import {AssetDetailPage} from './dashboard/asset-detail.page';
import {DashboardPage} from './dashboard/dashboard.page';
import {AssetCreatorDialog} from './dashboard/asset-creator.dialog';
import {PhonebookService} from '../services/phonebook2.service';
import {PhonebookDetailPage} from './dashboard/phonebook-detail.page';
import {PostListService} from '../services/post-list.service';
import {PostListPage} from './dashboard/post-list.page';
import {PostListDashboard} from './dashboard/post-list.dashboard';
import {PhonebookCreatorDialog} from './dashboard/phonebook-creator.dialog';
import {PhonebookCategoryPipe} from './dashboard/phonebook-category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    AssetDetailPage,
    AssetCreatorDialog,
    PhonebookCreatorDialog,
    MainLayout,
    PhonebookDetailPage,
    PostListDashboard,
    PostListPage,

    // component

    // pipe
    PhonebookCategoryPipe,
  ],

  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule,
  ],
  providers: [AssetService, PhonebookService, PostListService],
  entryComponents: [AssetCreatorDialog, PhonebookCreatorDialog],
  bootstrap: [AppComponent],
})
export class AppModule {
}
