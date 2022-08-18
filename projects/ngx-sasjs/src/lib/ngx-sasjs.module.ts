import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ClarityModule } from '@clr/angular'
import { SasjsLogsComponent } from './sasjs-logs/sasjs-logs.component'
import { LoginModalComponent } from './login-modal/login-modal.component'
import { FormsModule } from '@angular/forms'
import { SasjsHeaderComponent } from './sasjs-header/sasjs-header.component'
import { RouterModule } from '@angular/router'

@NgModule({
  declarations: [SasjsLogsComponent, LoginModalComponent, SasjsHeaderComponent],
  imports: [
    RouterModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    ClarityModule
  ],
  exports: [SasjsLogsComponent, SasjsHeaderComponent, LoginModalComponent]
})
export class NgxSasjsModule {
  constructor() {}
}
