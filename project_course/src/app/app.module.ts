import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { headerComponent } from './header/header.component';
import { recipesComponent } from './recipes/recipes.component';
import { recipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { recipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { recipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { shoppingListComponent } from './shopping-list/shopping-list.component';
import { shoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    recipesComponent,
    recipeListComponent,
    recipeDetailComponent,
    recipeItemComponent,
    shoppingListComponent,
    shoppingEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
