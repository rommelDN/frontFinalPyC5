import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent {
  route: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.route = this.activatedRoute.snapshot.url.join('');
  }
}
