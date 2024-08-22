import { NgModule} from "@angular/core";
import { CardComponent } from "./card/card.component";

@NgModule({
    // bootstrap configuration here is not needed
    // because needs only to be in the root
    // bul will have a declaration array instead
    declarations: [CardComponent],
    exports: [CardComponent]
})
export class SharedModule {}