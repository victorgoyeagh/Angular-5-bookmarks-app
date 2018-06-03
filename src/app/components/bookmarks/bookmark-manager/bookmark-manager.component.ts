import { Component } from '@angular/core';
import { Response, HttpModule, Http } from '@angular/http';
import { BookmarksService } from '../../../services/bookmarks/bookmarks.service';
import { FormGroup, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';
import { IBookmark, IUrl } from './../../../entities/bookmark.entity';
import { MiscUtil } from './../../../utils/MiscUtils';
import { delay, debounceTime } from 'rxjs/operators';
@Component({
    selector: 'app-bookmark-manager',
    templateUrl: './bookmark-manager.component.html',
    styleUrls: ['./bookmark-manager.component.scss']
})
export class BookmarkManagerComponent {
    private textRestrictRegex = new RegExp("^[0-9,a-z,A-Z ,.'-]+$");
    private urlRestrictRegex = new RegExp("^(https?|ftp)://(-\.)?([^\s/?\.#-]+\.?)+(/[^\s]*)?$");

    public bookmarkManagerForm = new FormGroup({
        bmName: new FormControl("", [
            Validators.required,
            Validators.pattern(this.textRestrictRegex)
        ]),
        bmLink: new FormControl("", [
            Validators.required,
            Validators.pattern(this.urlRestrictRegex)
        ]),
        bmDesc: new FormControl("", [
            Validators.pattern(this.textRestrictRegex)
        ])
    })

    constructor(
        private _http: Http,
        private _bookmarksService: BookmarksService
    ) {

    }

    UrlExists(url: string) {
        if (!this.bookmarkManagerForm.valid) {
            for (let i in this.bookmarkManagerForm.controls) {
                this.bookmarkManagerForm.controls[i].markAsTouched();
            }

        } else {
            let txtNonExistText = "Url does not exist";
            this._http.request(url)
                .pipe(
                    debounceTime(1000)
                )
                .subscribe((response: Response) => {

                    if (response.status == 200) {
                        let controls = this.bookmarkManagerForm.controls,
                            name = controls.bmName.value,
                            link = controls.bmLink.value,
                            desc = controls.bmDesc.value;
                
                        let newBookmark = <IBookmark>{
                            Id: MiscUtil.GetRandomNumberBetween(0, 10000000000),
                            Name: name,
                            Description: desc,
                            Url: link
                        }
                
                        this._bookmarksService.AddNewBookmark(newBookmark);

                        window.location.replace(`/#/bookmarks-result?bookmarkId=${newBookmark.Id}`)
                    } else {
                        console.log(txtNonExistText);
                        return false;
                    }
                }, (error)=>{
                    console.log(error);
                })
        }
    }

    SubmitForm() {

        let urlLink = this.bookmarkManagerForm.controls.bmLink.value;
        this.UrlExists(urlLink);
    }

    AddBookmark() {

        let controls = this.bookmarkManagerForm.controls;
        let name = controls.bmName.value,
            link = controls.bmLink.value,
            desc = controls.bmDesc.value;

        let newBookmark = <IBookmark>{
            Id: MiscUtil.GetRandomNumberBetween(0, 10000000000),
            Name: name,
            Description: desc,
            Url: link
        }

        this._bookmarksService.AddNewBookmark(newBookmark);
    }


}
