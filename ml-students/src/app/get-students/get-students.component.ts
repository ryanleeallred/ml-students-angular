import { Component, OnInit } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } rom '@angular/http';
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-get-students',
  templateUrl: './get-students.component.html',
  styleUrls: ['./get-students.component.css']
})
export class GetStudentsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getStudentData() {
  	console.log('clicking the button')

    // let url = `https://your-cloud-function-url/function`
    // let params: URLSearchParams = new URLSearchParams();
    // let headers = new Headers({'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' });

    // params.set('to', 'user@example.com');
    // params.set('from', 'you@yoursupercoolapp.com');
    // params.set('subject', 'test-email');
    // params.set('content', 'Hello World');

    // return this.http.post(url, params, headers)
    //                 .toPromise()
    //                 .then( res => {
    //                   console.log(res)
    //                 })
    //                 .catch(err => {
    //                   console.log(err)
    //                 })

  }

}
