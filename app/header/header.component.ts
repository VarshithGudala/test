import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'header',
  template: `<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">Catalog App</a>
  </nav>`,
})
export class HeaderComponent {}