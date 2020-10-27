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

  constructor(private http: HttpClient) { 

    this.user = new Users ('', '', '', '', '', '', '', '', '', new Date);
    this.repo = new Repository('', '', '',);
    console.log('Service Works!');
    this.userName = 'NNJAMBI';
    
  }

getUserInfo(){

interface ApiResponse{

  login: string;
  avatar_url: string;
  followers: string;
  following: string;
  public_repos: string;
  name: string;
  location: string;
  email: string;
  created_at: Date;
  html_url: string;
}


}

}
