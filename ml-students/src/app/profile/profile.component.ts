// import { StudentsService } from '../students/students.service'
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
	student: object;

  constructor(private router:Router, db:AngularFireDatabase) {

  	let name = this.router.url.substr(1);
  	let objectPath = 'students/' + name

	db.object(objectPath).snapshotChanges().subscribe(student => {
	  this.student = student.payload.val()
	});

  }

  ngOnInit() {}

}
