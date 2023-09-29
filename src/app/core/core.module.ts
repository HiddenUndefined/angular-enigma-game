import { NgModule, Optional, SkipSelf } from '@angular/core'

// @TODO: Import and provide the layouts and pages modules here
@NgModule({
  imports: [],
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
