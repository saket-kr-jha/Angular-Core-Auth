import { Component, Optional } from '@angular/core';
import { RegistrationComponent } from './registration/registration.component';
import { ChildrenOutletContexts, RouterOutlet } from '@angular/router';
import { transition, query, trigger, style, animate } from '@angular/animations';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RegistrationComponent, RouterOutlet],
  templateUrl: './user.component.html',
  styles: ``,
  animations : [
    trigger('routerFadeIn',[
      transition('* <=> *',[
        query(':enter',[
          style({opacity : 0}),
          animate('1s ease-in-out', style({opacity : 1}))
        ],{optional: true}),
      ])
    ])
  ]
})
export class UserComponent {

  constructor(private context : ChildrenOutletContexts){}

  getRouteUrl(){
    this.context.getContext('primary')?.route?.url;
  }

}
