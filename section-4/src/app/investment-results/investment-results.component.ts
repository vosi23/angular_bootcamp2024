import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

import { InvestmentsResults } from '../investment-input.mode';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css'
})
export class InvestmentResultsComponent
{
  // likewise the @Output signal emit which is found
  // in our example in user-input.compontent.ts
  // I like to use the classic ones, being more easy to understand from everyone
  // as being used from a much longer time than input() functionality
  @Input() results?: InvestmentsResults[];
}
