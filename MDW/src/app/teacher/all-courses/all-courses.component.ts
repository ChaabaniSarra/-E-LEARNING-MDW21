import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.css']
})
export class AllCoursesComponent {
  courses :any;
constructor(private service:ServiceService) {}

 
  ngOnInit(): void {


    this.service.getAllCourses().subscribe(
      (res) => {
        console.log(res);
        this.courses=res ;
      },
      (err) => {
        console.error(err);
      });

  }
}