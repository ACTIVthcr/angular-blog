import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() loveIts: number;
  @Input() created_at: Date;

  constructor() {
  }

  ngOnInit() {
  }

  increaseLoveIts() {
    this.loveIts++;
  }

  decreaseLoveIts() {
    this.loveIts--;
  }

  getColor() {
    return this.loveIts === 0 ? "black" : this.loveIts > 0 ? "green" : this.loveIts < 0 ? "red" : null;
  }

  isGreen() {
    return this.loveIts > 0;
  }

  isRed() {
    return this.loveIts < 0;
  }
}
