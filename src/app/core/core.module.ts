import { NgModule, Optional, SkipSelf } from '@angular/core';

import * as services from './services';
const CORE_SERVICES = Object.keys(services).map((key) => services[key]);

const coreProviders = [
  ...CORE_SERVICES,
];

@NgModule({
  providers: coreProviders
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
