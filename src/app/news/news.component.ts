import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
//import { ModelService } from '../services/model.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
 name:any;
 sub:any;
 user:string;
  //constructor(private route:ActivatedRoute, private modelService:ModelService) { }

  ngOnInit() {
  	// this.user = this.modelService.getFirstUser();
  	// this.sub = this.route.params.subscribe(params => {
  	// 	this.name = params['name']
  	// })
  }

}
