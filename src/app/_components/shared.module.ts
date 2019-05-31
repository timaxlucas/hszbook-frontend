import { AlertComponent } from "./alert.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FeatherIconsPipe } from "@app/_helpers/feather.pipe";

@NgModule({
  imports: [BrowserModule],
  declarations: [AlertComponent,
    FeatherIconsPipe],
  exports: [AlertComponent,
    FeatherIconsPipe]
})
export class SharedModule { }
