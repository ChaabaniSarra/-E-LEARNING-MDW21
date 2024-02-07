import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudyTipsComponent } from './study-tips/study-tips.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { AllCoursesComponent } from './teacher/all-courses/all-courses.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { AddTeacherComponent } from './admin/add-teacher/add-teacher.component';
import { LoginComponent } from './login/login.component';
import { UpdateTeacherComponent } from './admin/update-teacher/update-teacher.component';
import { ProfileTeacherComponent } from './teacher/profile-teacher/profile-teacher.component';
import { AdmineLoginComponent } from './admin/admine-login/admine-login.component';
import { ProfileStudentComponent } from './student/profile-student/profile-student.component';
import { AllResumeComponent } from './student/all-resume/all-resume.component';

const routes: Routes = [
  {
    path :'',
    redirectTo:'/home',
    pathMatch:'full'
  },
  {path:'home', component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'sing-in', component:SingInComponent},

  {path:'studyTips', component:StudyTipsComponent},
  {path:'contact', component:ContactComponent},
  {path:'Admin', component:AdminComponent},
  {path:'Admine-login', component:AdmineLoginComponent},

  {path:'courses',component:AllCoursesComponent},
  {path:'resumes',component:AllResumeComponent},



  {path:'add-student', component:AddStudentComponent},
  {path:'add-teacher', component:AddTeacherComponent},
  {path:'add-resume', component:AddTeacherComponent},

  {path:'updateT', component:UpdateTeacherComponent},
  {path:'profilT', component:ProfileTeacherComponent},
  {path:'StudentP', component:ProfileStudentComponent},




  ];

  








@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
