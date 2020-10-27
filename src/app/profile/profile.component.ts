import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';
import { Repository } from '../repository';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user:Users;
  repos:Repository;
  userRepos:any;
  userName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
