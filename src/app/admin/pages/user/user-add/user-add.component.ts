import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/admin/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {


  userData = {
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
    roleId: ''
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    // Any initialization logic if needed
  }

  onSubmit(form: NgForm): void {
    if (form.valid) {
      // Prepare data to be sent to the service
      const user = {
        first_name: this.userData.firstName,
        last_name: this.userData.lastName,
        email: this.userData.email,
        mobile: this.userData.mobile,
        password: this.userData.password,
        roleId: this.userData.roleId
      };

      this.userService.addUser(user).subscribe(
        response => {
          console.log('User added successfully:', response);
          this.router.navigate(['/admin/users']); // Redirect to user list after success
        },
        error => {
          console.error('Error adding user:', error);
        }
      );
    }
  }
}