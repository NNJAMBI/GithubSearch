import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile-service/profile.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private service: ProfileService) { }

  ngOnInit(): void {

  }

}
