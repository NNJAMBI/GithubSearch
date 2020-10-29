import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';
import { Repository } from '../repository';
import { ProfileService } from '../profile-service/profile.service';
import { Injectable } from'@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService]
})
export class ProfileComponent implements OnInit {
  user: Users;
  repos: Repository;
  userRepos: any;
  userName: string;


  constructor(private profileService: ProfileService) {

  }
  findProfile() {
    this.profileService.updateProfile(this.userName)
    this.profileService.getUserInfo;
    console.log(this.user);

    this.profileService.getReposInfo(this.userName);
    this.userRepos = this.profileService.newRepo;
  }
  ngOnInit(): void {
    this.profileService.getReposInfo(this.userName);
    this.repos = this.profileService.repo;
    this.profileService.getUserInfo();
    this.user = this.profileService.user;
  }

}
