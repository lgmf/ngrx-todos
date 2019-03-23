import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { AppComponent } from './app.component';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

const routes: Routes = [
  {
    path: 'todos',
    loadChildren: './todo/todo.module#TodoModule'
  },
  {
    path: '**',
    redirectTo: '/todos',
    pathMatch: 'full'
  }
];

const imports: any[] = [
  BrowserModule,
  BrowserAnimationsModule,
  HttpClientModule,
  RouterModule.forRoot(routes),
  StoreModule.forRoot({
    router: routerReducer
  }),
  StoreRouterConnectingModule.forRoot(),
  EffectsModule.forRoot([])
];

if (!environment.production) {
  // Note that you must instrument after importing StoreModule
  imports.push(
    StoreDevtoolsModule.instrument({
      maxAge: 5
    })
  );
}

@NgModule({
  declarations: [AppComponent],
  imports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
