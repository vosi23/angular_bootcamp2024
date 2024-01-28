import { Component } from "@angular/core";

import  { recipe } from '../recipe.model';

@Component ({
    selector: "app-recipe-list",
    templateUrl: "recipe-list.component.html",
    styleUrl: "recipe-list.component.css"
})

export class recipeListComponent
{
    recipes: recipe[] = [
        new recipe('dummy recipe', 'dummy description', 'https://images.immediate.co.uk/production/volatile/sites/2/2019/07/Chic-wings-b9d5fd6.jpg?resize=768,574')
    ];

    getRecipeDescription(index: number)
    {
        return recipe[index].description;
    }

    constructor()
    {

    }
}
