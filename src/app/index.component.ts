import { Component } from '@angular/core';

@Component({
  selector: 'app-index',
  template: `
    <div>
      <a routerLink="/client-side">Client Side</a>
    </div>
    <div>
      <a routerLink="/server-side">Server Side</a>
    </div>
  `,
})
export class IndexComponent {}
