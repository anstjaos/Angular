import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

import { AppComponent } from './app.component';
import { FormSkuComponent } from './form-sku/form-sku.component';
import { SuiModule } from 'ng2-semantic-ui';
import { FormSkuWithBuilderComponent } from './form-sku-with-builder/form-sku-with-builder.component';
import { FormNgModelComponent } from './form-ng-model/form-ng-model.component';

@NgModule({
  declarations: [
    AppComponent,
    FormSkuComponent,
    FormSkuWithBuilderComponent,
    FormNgModelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
