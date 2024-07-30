import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
id: string;
isVitD: boolean = false;
isCal: boolean =false;
  constructor(private router: Router) { }

  ngOnInit() {
  	this.id = localStorage.getItem('token');
  }
users = [
    { name: 'Iron Deficiency', email: 'Poultry: Chicken and turkey, particularly the dark meat, are good sources of heme iron.', role: 'Admin' },
    { name: 'Cholestrol Issue', email: 'jane.smith@example.com', role: 'User' },
    { name: 'Thyroid Issue', email: 'sam.wilson@example.com', role: 'User' },
{ name: 'Iron Deficiency', email: 'Poultry: Chicken and turkey, particularly the dark meat, are good sources of heme iron.', role: 'Admin' },
    { name: 'Cholestrol Issue', email: 'jane.smith@example.com', role: 'User' },
    { name: 'Thyroid Issue', email: 'sam.wilson@example.com', role: 'User' },
{ name: 'Iron Deficiency', email: 'Poultry: Chicken and turkey, particularly the dark meat, are good sources of heme iron.', role: 'Admin' },
    { name: 'Cholestrol Issue', email: 'jane.smith@example.com', role: 'User' },
    { name: 'Thyroid Issue', email: 'sam.wilson@example.com', role: 'User' }
  ];

users1 = [
    { name: 'Iron Deficiency', email: 'Poultry: Chicken and turkey, particularly the dark meat, are good sources of heme iron.', role: 'Admin' },
    { name: 'Cholestrol Issue', email: 'jane.smith@example.com', role: 'User' },
    { name: 'Thyroid Issue', email: 'sam.wilson@example.com', role: 'User' }
  ];

onFileSelected(event: Event): void {
    const element = event.currentTarget as HTMLInputElement;
    let file: File | null = element?.files?.[0];
    if (file) {
      console.log('Selected file:', file.name);
      if (file.name.includes("HCL")) {
        this.isVitD=true;
this.isCal=false;
      } else {
        this.isCal=true;
this.isVitD=false;
}
  }
  }

}
