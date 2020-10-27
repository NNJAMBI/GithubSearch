import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../users';
import { Repository } from '../repository';
import { ProfileService } from '../profile-service/profile.service';

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

    this.profileService.getReposInfo();
    this.userRepos = this.profileService.newRepo;
  }
  ngOnInit(): void {
    this.profileService.getReposInfo();
    this.repos = this.profileService.repo;
    this.profileService.getUserInfo();
    this.user = this.profileService.user;
  }

}
