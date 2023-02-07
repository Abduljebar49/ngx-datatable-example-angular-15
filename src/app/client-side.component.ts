import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-client-side',
  template: ` <div>
    <ngx-datatable
      class="material"
      [rows]="rows"
      [columns]="columns"
      [columnMode]="ColumnMode.force"
      [headerHeight]="50"
      [footerHeight]="50"
      rowHeight="auto"
      [limit]="10"
    >
    </ngx-datatable>
  </div>`,
})
export class ClientSideComponent {
  rows = [];
  columns = [{ prop: 'title' }, { name: 'body' }, { name: 'userId' }];
  constructor(private http: HttpClient) {}

  ColumnMode = ColumnMode;

  ngOnInit() {
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response: any) => {
        this.rows = response;
        this.rows = [...this.rows];
      });
  }
}
