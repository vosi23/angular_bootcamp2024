import { Component } from '@angular/core';

import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvestmentInput } from './investment-input.mode';
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',

  imports: [HeaderComponent, UserInputComponent, InvestmentResultsComponent]
})
export class AppComponent
{
  resultsData?: {
    year: number,
    interest: number,
    valueEndOfYear: number,
    annualInvestment: number,
    totalInterest: number,
    totalAmountInvested: number,
  }[];

  onCalculateInvestmentResults(data: InvestmentInput)
  {
    // typescript desctuctor
    // instead of adding the data. to specify that is a member of a object for each row below
    // here is used these destructor in order to declare as variables the members of data object
    // to keep in mind this feature
    const { initialInvestment, duration, expectedReturn, annualInvestment } = data;

    const annualData = [];
    let investmentValue = initialInvestment;
  
    for (let i = 0; i < duration; i++) {
      const year = i + 1;
      const interestEarnedInYear = investmentValue * (expectedReturn / 100);
      investmentValue += interestEarnedInYear + annualInvestment;
      const totalInterest =
        investmentValue - annualInvestment * year - initialInvestment;
      annualData.push({
        year: year,
        interest: interestEarnedInYear,
        valueEndOfYear: investmentValue,
        annualInvestment: annualInvestment,
        totalInterest: totalInterest,
        totalAmountInvested: initialInvestment + annualInvestment * year,
      });
    }
  
    this.resultsData= annualData;
  }
}
