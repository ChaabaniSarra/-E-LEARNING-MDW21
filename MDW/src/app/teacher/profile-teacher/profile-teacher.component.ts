import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-profile-teacher',
  templateUrl: './profile-teacher.component.html',
  styleUrls: ['./profile-teacher.component.css']
})
export class ProfileTeacherComponent {
  profilePicture='';
  firstName = '';
  lastName = '';
  email = '';
 assinedSub='';

constructor(private service:ServiceService) {}



}
