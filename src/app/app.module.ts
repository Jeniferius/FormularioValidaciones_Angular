import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { Step1Component } from './registro/step1/step1.component';
import { Step2Component } from './registro/step2/step2.component';
import { Step3Component } from './registro/step3/step3.component';
import { RouterModule } from '../../node_modules/@angular/router';
import { appRoutes } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IAppState, rootReduce, INITIAL_STATE } from './store';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    Step1Component,
    Step2Component,
    Step3Component
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(appRoutes), ReactiveFormsModule, NgReduxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    let enhancer = [devTools.enhancer()];
    ngRedux.configureStore(rootReduce, INITIAL_STATE, [], enhancer);
  }
 }
