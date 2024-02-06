import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent {

  Teachers:any[]=[];
  constructor(private service:ServiceService) {}

  ngOnInit(): void {
    this.service.getAllTeachers().subscribe(
      (res) => {
        console.log(res);
        this.Teachers=res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  



  }

 
