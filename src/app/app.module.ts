import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResourcesComponent } from './resources/resources.component';
import { SearchComponent } from './search/search.component';
import { ApiUrlInterceptor } from './http/api-url.interceptor';
import { SEARCH_API_URL_PROVIDER } from './providers';
import { CardProjectComponent } from './card-project/card-project.component';
import { CardPublicationComponent } from './card-publication/card-publication.component';

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    SearchComponent,
    CardProjectComponent,
    CardPublicationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    SEARCH_API_URL_PROVIDER,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiUrlInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
