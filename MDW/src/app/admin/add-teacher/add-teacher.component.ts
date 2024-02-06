import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent {
Teacher ={

profilePicture:"",
firstName: "",
lastName: "",
assignedSub: "",
email: "",

}
constructor(private service:ServiceService) {}

AddTeacher(){
  console.log('clicked')
    // Call the addTeacher  method from the service
  this.service.addTeacher(this.Teacher)
  .subscribe(
      // On successful response
    (res)=>{
        // Reset the Teacher object fields
      this.Teacher={
        profilePicture:"",
        firstName :"",
        lastName:"",
        email:"",
        assignedSub:"",
        };
                // Display a success alert

             alert("  Teacher Added Successfully");
      // On error
  }  ,
    (err)=>
  console.error(err));

}

}
