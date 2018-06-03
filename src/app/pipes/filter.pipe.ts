import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], term): any {
        let retItems: Array<any>;

        if(!term)
            retItems = items;
         else
            retItems = items.filter(item => item.Name.toLowerCase().indexOf(term.toLowerCase()) !== -1);

        return retItems;
    }
}