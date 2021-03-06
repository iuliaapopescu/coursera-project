import {Component, OnInit} from '@angular/core';
import {Leader} from '../shared/leader';
import {LeaderService} from '../services/leader.service';
import {expand, flyInOut} from '../animations/app.animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  // tslint:disable-next-line:no-host-metadata-property
  host: {
    '[@flyInOut]': 'true',
    style: 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()
  ]
})
export class AboutComponent implements OnInit {
  leaders: Leader[];
  leadersErrMess: string;

  constructor(
    private leaderService: LeaderService
  ) {
  }

  ngOnInit(): void {
    this.leaderService.getLeaders().subscribe(leaders => {
      return this.leaders = leaders;
    }, leadersErrMess => {
      this.leadersErrMess = (leadersErrMess as any);
    });
  }

}
