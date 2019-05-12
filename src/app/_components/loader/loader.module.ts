import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '@app/_components';


@NgModule({
    declarations: [
        LoaderComponent
    ],
    exports: [
        LoaderComponent
    ],
    imports: [
        CommonModule
    ]
})
export class LoaderModule { }
