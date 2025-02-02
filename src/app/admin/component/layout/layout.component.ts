import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  ngOnInit(): void {
  }
  constructor(private router: Router) {}

  // Navigate to the URL based on role
  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}
