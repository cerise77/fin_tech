import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Injectable} from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {

    constructor(private http:HttpClient){}

    getData(){
        return this.http.get('https://rest.coinapi.io/v1/exchangerate/BTC', {
            headers: new HttpHeaders()
            .set('content-type', 'application/json')
            .set('X-CoinAPI-Key', '9455AC74-791C-4185-B916-19D6E6A25B15')
        });
    }

}