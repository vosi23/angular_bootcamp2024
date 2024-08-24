import { Component, ElementRef, HostBinding, HostListener, inject, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  // -> emulated view encapsulation is the default
  // so if you don't add it will be the default behavior
  // -> ShadowDom view encapsulation has the same behavior as emulated
  // and is the browser default way to do it, but is not working for all browsers
  // and this is why the emulated one is the recommended 
  // -> the none is the way to disable the scope styling of only one element
  encapsulation: ViewEncapsulation.None,


  // using the host property, and adding a keyword here
  // which matches with a style from the same component css file
  // will apply the same style everywhere this component is used.
  // for example any other components

  // This is not working only with encapsulation, is useful in other situations as well
  host: {
    // the recommended way to to it
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {

  // The other way to do it instead of using host property, but not recommended!!

  // insted of host also exists another way to apply a style
  // but however this method is not recommended anymore
  // only for backwords compatibility
  // @HostBinding('class') className= 'control';
  // @HostListener('click') onClick()
  // {...}

  @Input({required: true}) title!:string;

  private el= inject(ElementRef);

  onClick()
  {
    console.log('clicked');
  }
}
