import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent {
  Teacher = {
    id: "", // Assuming there's an ID field to identify the teacher
    profilePicture: "",
    firstName: "",
    lastName: "",
    assignedSub: "",
    email: "",
  };
constructor(private service:ServiceService) {}
// ngOnInit() {
//   this.loadTeacherData(); // Load the teacher data when the component initializes
// }

// loadTeacherData() {
//   // This should be replaced with actual data retrieval logic
//   this.service.getTeacherById(this.Teacher.id).subscribe({
//     next: (data) => {
//      this.Teacher = data; // Assuming the data structure matches
//     },
//     error: (err) => console.error(err)
//   });
// }
// updateTeacher() {
//   console.log('Update clicked');
//   this.service.updateTeacher(this.Teacher.id, this.Teacher).subscribe({
//     next: (res) => {
//       alert("Teacher Updated Successfully");
//       // Optionally reset the form or navigate away
//     },
//     error: (err) => {
//       console.error(err);
//       alert("Failed to update teacher");
//     }
//   });
// }}
}
