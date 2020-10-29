import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service/profile.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {
  // user;
  // repos;
  constructor(private service: ProfileService) { }

  ngOnInit(): void {
  //   this.service.getUserInfo().subscribe(res => {
  //     console.log(res)
  //     this.user = res
  //   })
  //   this.service.getReposInfo().subscribe(res => {
  //     console.log(res);
  //     this.repos = res;
  //   })

  // }

}
}