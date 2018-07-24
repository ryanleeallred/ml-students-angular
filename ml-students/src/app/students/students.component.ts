import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any[];

  constructor(db:AngularFireDatabase) {
  	db.list('/students').valueChanges().subscribe(students => {
  		this.students = students
  	});
  }

  ngOnInit() {
  }

}
