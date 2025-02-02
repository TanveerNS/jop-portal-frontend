import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/admin/users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {


  users: any[] = [];
  loading: boolean = true;
  errorMessage: string = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.fetchUsers();
  }

  // Function to fetch users
  fetchUsers(): void {
    this.userService.getUsers().subscribe(
      response => {
        this.users = response.data; // Assuming the data is under the 'data' property
        this.loading = false;
      },
      error => {
        this.errorMessage = 'Failed to fetch users. Please try again later.';
        this.loading = false;
      }
    );
  }
  viewUser(id:any): void{

  }
  editUser(id:any): void{

  }
  deleteUser(id:any): void{

  }
}
