import { Component } from '@angular/core';
import { environment } from './../environments/environment';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    private title:string = environment.config.dictionary.appTitle;
    private date:number = new Date().getFullYear();
}
