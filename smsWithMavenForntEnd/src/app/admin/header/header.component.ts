import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  // constructor(private serviceRouter: Router) {}

  // router = inject(Router);

  // logout() {
  //   this.router.navigateByUrl('');
  // }
}
