import { AlertComponent } from "./alert.component";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FeatherIconsPipe } from "@app/_helpers/feather.pipe";
import { CalendarMomentPipe } from "@app/_helpers/calendar.pipe";

@NgModule({
  imports: [BrowserModule],
  declarations: [AlertComponent,
    FeatherIconsPipe,
    CalendarMomentPipe],
  exports: [AlertComponent,
    CalendarMomentPipe,
    FeatherIconsPipe]
})
export class SharedModule { }
