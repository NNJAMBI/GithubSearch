import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';
import { Repository } from '../repository';
// import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
user: Users;
repo: Repository;
newRepo: any;
newUser: any;
private userName: string;

private accessToken = 'bf1368c80be426a17dde03c6fceb44e403bdc2b2'

  constructor() { }
}
