import { Component } from '@angular/core';

import { AccountService, NewsService } from './_services';
import { User } from './_models';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    listnews: any[] = [];
    loading:  boolean = false;
    user: User; 

    constructor(private accountService: AccountService, private _newServ: NewsService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    searchNews(parameters: any){
        this.loading = true;
        this.listnews = [];

        setTimeout(() => {
            this._newServ.getNews(parameters).subscribe(data => {
                this.loading = false;
                console.log(data);
                this.listnews = data.articles;
            }, err => {
                console.log(err);
                this.loading = false; 
            })
        }, 1000)

    }

    logout() {
        this.accountService.logout();
    }
}