import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{
  @Input() producto: any;

  ngOnInit(): void {
    
  }

}
