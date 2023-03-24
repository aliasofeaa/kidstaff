import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.page.html',
  styleUrls: ['./attendance.page.scss'],
})
export class AttendancePage implements OnInit {
  date:any ="";

  constructor(private router:Router) { }

  ngOnInit() {
  }
  checkDate(){
    if (this.date != ""){
      this.router.navigate(['/listname'])
    }
  }

}

