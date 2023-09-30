import { NgModule, Optional, SkipSelf } from '@angular/core'
import { LayoutsModule } from '@app/layouts'
// import { PagesModule } from '@app/pages'

@NgModule({
  imports: [
    LayoutsModule
    // PagesModule
  ],
  exports: []
})
export class CoreModule {
  constructor (
    @Optional() @SkipSelf() core: CoreModule
  ) {
    if (core) {
      throw new Error('You should import core module only in the root module')
    }
  }
}
