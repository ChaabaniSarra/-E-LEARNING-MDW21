import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {
 Student ={

    profilePicture:"",
    firstName: "",
    lastName: "",
    email: "",
    
    }
    constructor(private service:ServiceService) {}
    
    AddStudent(){
      console.log('clicked')
        // Call the addTeacher  method from the service
      this.service.addStudent(this.Student)
      .subscribe(
          // On successful response
        (res)=>{
            // Reset the Teacher object fields
          this.Student={
            profilePicture:"",
            firstName :"",
            lastName:"",
            email:"",
            
            };
           // Display a success alert
    
          alert("  Student Added Successfully");
          // On error
      }  ,
        (err)=>
      console.error(err));
    
    }
}
