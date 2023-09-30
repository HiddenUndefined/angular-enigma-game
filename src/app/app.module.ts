import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
// App
import { AppRouting } from './app.routing'
import { AppComponent } from './app.component'
import { CoreModule } from '@app/core'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRouting,
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
