import { RouterModule, RouterOutlet } from '@angular/router';
import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { TuiRootModule, TuiDialogModule, TuiAlertModule, TUI_SANITIZER } from "@taiga-ui/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { AppRouting } from './app-routing';

import { AppComponent } from './app.component';

import 'zone.js';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        TuiRootModule,
        TuiDialogModule,
        TuiAlertModule,
        RouterModule.forRoot([{
            path: AppRouting.STATE_MANAGEMENT,
            loadChildren: () => import('./state-management/state-management.module').then(m => m.StateManagementModule)
        }])
    ],
    providers: [{provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
    bootstrap: [AppComponent],
})
export class AppModule {
}
