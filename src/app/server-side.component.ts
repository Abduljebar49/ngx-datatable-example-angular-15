import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ColumnMode } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-server-side',
  template: `
    <div>
      <ngx-datatable
        class="material"
        [rows]="rows"
        [columns]="columns"
        [headerHeight]="50"
        [footerHeight]="50"
        rowHeight="auto"
        [externalPaging]="true"
        [columnMode]="ColumnMode.force"
        [count]="page.totalElements"
        [offset]="page.pageNumber"
        [limit]="page.size"
        (page)="setPage($event)"
      >
      </ngx-datatable>
    </div>
  `,
})
export class ServerSideComponent {
  page = {
    size: 10,
    totalElements: 0,
    totalPages: 0,
    pageNumber: 1,
  };
  ColumnMode = ColumnMode;
  rows = [];
  serverRows = [];
  columns = [{ prop: 'title' }, { name: 'body' }, { name: 'userId' }];

  constructor(private http: HttpClient) {}

  setPage(pageInfo: any) {
    this.page.pageNumber = pageInfo.offset;
    var from = this.page.pageNumber * this.page.size;
    var to = from + this.page.size;
    console.log(from, to);
    if (this.serverRows.length > 0) {
      this.setCurrentPageRows(from, to);
    }
  }

  ngOnInit() {
    this.setPage({ offset: 0 });
    this.http
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((response: any) => {
        this.serverRows = response;
        this.serverRows = [...this.serverRows];
        this.setCurrentPageRows();
      });
  }

  setCurrentPageRows(from: number = 0, to: number = this.page.size) {
    (this.page.totalElements = this.serverRows.length),
      (this.page.totalPages = this.serverRows.length / this.page.size);
    var allData = JSON.stringify(this.serverRows);
    const temp = JSON.parse(allData).splice(from, to - from);
    this.rows = temp;
    console.log(temp);
  }
}
