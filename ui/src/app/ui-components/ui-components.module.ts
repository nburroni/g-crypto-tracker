import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiNavComponent } from './ui-nav/ui-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { UiHeaderComponent } from './ui-header/ui-header.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  declarations: [
    UiNavComponent,
    UiHeaderComponent,
  ],
  exports: [
    UiNavComponent,
    UiHeaderComponent,
  ]
})
export class UiComponentsModule { }
