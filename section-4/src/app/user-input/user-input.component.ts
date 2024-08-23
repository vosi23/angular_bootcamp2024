import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InvestmentInput } from '../investment-input.mode';

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {
  
  enteredInitialInvestment= '0';
  enteredAnnualInvestment= '0';
  enteredExpectedReturn= '5';
  enteredDuration= '10';

  // here could also be used the output() function
  // the new functionality
  // However output being only a alias let's say for the Output event emitter
  // I will choose to use the Output EventEmitter the classic way to do it
  // being more easy to identify what it does and being more common used
  @Output() calculate= new EventEmitter<InvestmentInput>();
  
  onSubmit()
  {
    const investmentInputObject: InvestmentInput=
    {
      // to easily convert a string type to an int
      // in typescript you can use this simple method
      // with the + in front of the method basically you cast the element
      initialInvestment: +this.enteredInitialInvestment,
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedReturn,
      annualInvestment: +this.enteredAnnualInvestment
    };
  
    // emit the output signal on click button Submit
    this.calculate.emit(investmentInputObject);
  }
}
