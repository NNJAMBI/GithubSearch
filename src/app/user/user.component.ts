import { Component, OnInit, Input } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';
import { Repository } from '../repository';
import { ProfileService } from '../profile-service/profile.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [ProfileService]
})
export class UserComponent implements OnInit {
  user: Users;
  repos: Repository;
  userRepos: any;
  userName: string;

  constructor(private profileService: ProfileService) {
  }
  findProfile() {

    this.profileService.updateProfile(this.userName);

    this.profileService.getUserInfo();
    this.user = this.profileService.user;
    console.log(this.user);

    this.profileService.getReposInfo;
    this.userRepos = this.profileService.newRepo;
  }

  ngOnInit() {

    this.profileService.getReposInfo;
    this.repos = this.profileService.repo;
    this.profileService.getUserInfo();
    this.user = this.profileService.user;
  }

}
