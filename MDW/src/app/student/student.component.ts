import { Component } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
 Students:any[]=[];
  constructor(private service:ServiceService) {}

  ngOnInit(): void {
    this.service.getAllStudents().subscribe(
      (res) => {
        console.log(res);
        this.Students=res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
}
