
import { NgModule } from '@angular/core';
// BrowserModule is needed in the case of using ng modules and bootstrap
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from './shared/shared.module';
import { TasksModule } from './tasks/tasks.module';

@NgModule({
    declarations: [AppComponent, HeaderComponent, UserComponent],
    bootstrap: [AppComponent],
    // imports can be used to import components which are standalone
    // however this should be used only in migration phase
    // to adapt a new project in a old version
    imports: [BrowserModule, SharedModule, TasksModule]
    // pipes will no longer needed to be imported from angular libraries
    // because it's actually included already from BrowserModule
})
export class AppModule {}
