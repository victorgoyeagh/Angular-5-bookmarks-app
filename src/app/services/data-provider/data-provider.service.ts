import { Injectable } from '@angular/core';
import { DataProviders } from './../../entities/data-provider.entities';
import { environment } from './../../../environments/environment';

@Injectable({
    providedIn: 'root'
})

export class DataProviderService {
    private storage: any;
    private strStorage = environment.config.storageType;
    private cookieName = environment.config.cookieName;

    constructor() { 
        this.storage = (this.strStorage == "localStorage")? localStorage : sessionStorage;
    }

    //save data in chosen storage
    SaveData(items: any){
        this.storage.setItem(this.cookieName, JSON.stringify(items));
    }

    //get items from storage, return as converted json data
    GetAllItems(){
        let items = (this.storage.getItem(this.cookieName)) ? JSON.parse(this.storage.getItem(this.cookieName)) : [];
        return <Array<any>>items; 
    }
}
