import { Injectable } from '@angular/core';

@Injectable()
export class ModelService {

  constructor() {}
  users:string[] = ['john','jill'];

  getFirstUser(){
  	return this.users[0];
  }

}
