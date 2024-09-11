import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  constructor(private _router: Router) {
    console.log('dashboard');
  }

  ngOnInit(): void {

  }

  Logout() {
   
    if (confirm()) {

       Swal.fire({
        title: "Sure For Logout?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,I want to logout!!"
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem('token');
          this._router.navigate(['/login']);
        }
      })

    }
    else {
      Swal.fire({
        title: "keep it!",
        text: "Your file has been Safe.",
        icon: "info"
      });
    }


  }

}
