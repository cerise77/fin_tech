import { Component, OnInit} from '@angular/core';
import {HttpService} from './services/http.service';

@Component({
    selector: 'my-app',
    templateUrl: './scss/app.component.html',
    styleUrls: ['./scss/app.component.scss']
})
export class AppComponent implements OnInit {

    constructor(private HttpService:HttpService){  }

    ngOnInit(){
        this.HttpService.getData().subscribe((data:any) => {return data});
    }

}
