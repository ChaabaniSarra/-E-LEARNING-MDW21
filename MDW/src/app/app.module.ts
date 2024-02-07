import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { StudyTipsComponent } from './study-tips/study-tips.component';
import { SingInComponent } from './sing-in/sing-in.component';
import { AllCoursesComponent } from './teacher/all-courses/all-courses.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { AddStudentComponent } from './admin/add-student/add-student.component';
import { AddTeacherComponent } from './admin/add-teacher/add-teacher.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileTeacherComponent } from './teacher/profile-teacher/profile-teacher.component';
import { UpdateTeacherComponent } from './admin/update-teacher/update-teacher.component';
import { TeacherComponent } from './teacher/teacher.component';
import { AddCourseComponent } from './teacher/add-course/add-course.component';
import { AdmineLoginComponent } from './admin/admine-login/admine-login.component';
import { StudentComponent } from './student/student.component';
import { DeleteTeacherComponent } from './admin/delete-teacher/delete-teacher.component';
import { DeleteCourseComponent } from './teacher/delete-course/delete-course.component';
import { ProfileStudentComponent } from './student/profile-student/profile-student.component'; 
import { AddResumeComponent } from './student/add-resume/add-resume.component';
import { AllResumeComponent } from './student/all-resume/all-resume.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    StudyTipsComponent,
    SingInComponent,
    AllCoursesComponent,
    ContactComponent,
    AdminComponent,
    AddStudentComponent,
    AddTeacherComponent,
    LoginComponent,
    ProfileTeacherComponent,
    UpdateTeacherComponent,
    TeacherComponent,
    AddCourseComponent,
    AdmineLoginComponent,
    StudentComponent,
    DeleteTeacherComponent,
    DeleteCourseComponent,
    ProfileStudentComponent,
    AddResumeComponent,
    AllResumeComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
