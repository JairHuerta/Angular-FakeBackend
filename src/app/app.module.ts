import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

//HELPERS Y ROUTING
import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';

//COMPONENTS
import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';;
import { FormComponent } from './news/form/form.component';
import { ListNewsComponent } from './news/list-news/list-news.component';
import { NavbarnewsComponent } from './news/navbarnews/navbarnews.component';
import { SpinnerComponent } from './shared/spinner/spinner.component'; 

//COLOR-PICKER
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        AppRoutingModule,
        ColorPickerModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        FormComponent ,
        ListNewsComponent ,
        NavbarnewsComponent ,
        SpinnerComponent ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { };