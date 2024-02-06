
import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { ServiceService } from 'src/app/service.service';
// import { AngularFireStorage } from '@angular/fire/compat/storage';



@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  course ={
  img:'',
courseTitle :'',
description:'',
}

constructor(private service:ServiceService) {}

 
  ngOnInit(): void {
  }

  AddCourse(){
    this.service.addcourse(this.course)
    .subscribe(
      (res)=>{
        this.course={
          img:"",
          courseTitle:"",
          description:'',
          };
                alert("Course Added Successfully");
      // window.location.reload();
    }  ,
      (err)=>
    console.error(err));
  
  }
}
