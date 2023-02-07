import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-root',
  template:`
  <router-outlet></router-outlet>`
})
export class AppComponent {
  constructor() {
  }
  ngOnInit() {
  }
}
