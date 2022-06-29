import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from './app.service';
import { Users } from './models/ui-models/users.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  users: Users[] = [];
  displayedColumns: string[] = ["pic", "name", "job", "role", "age", "createdOn"];
  dataSource: MatTableDataSource<Users> = new MatTableDataSource<Users>();
  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.appService.getUsers().subscribe(
      (succes) => {
        this.users = succes;
        this.dataSource = new MatTableDataSource<Users>(this.users);
      },
      (err) => {

      }
    )
  }
}
