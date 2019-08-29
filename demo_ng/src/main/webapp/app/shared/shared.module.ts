import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoNgSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [DemoNgSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [DemoNgSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DemoNgSharedModule {
  static forRoot() {
    return {
      ngModule: DemoNgSharedModule
    };
  }
}
