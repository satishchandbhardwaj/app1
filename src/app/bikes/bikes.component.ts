import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';


@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent implements OnInit {

  googlenews:any = [];
  loadershow = true;
console.log(HttpService);
  constructor(private httpService:HttpService) { }

  ngOnInit() {
    this.httpService.getNewsData()
      .subscribe(
      (data) => {
        console.log(data);
        this.googlenews = data.articles    
      }
      (error) => {
      console.log('oops', error);
     }
     () => {console.log('complete'); this.loadershow = false;}
    )
    
  }

}
