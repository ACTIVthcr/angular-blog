import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  posts = [
    {
      title: "Mon premier Post",
      content: "Lorem ipsum dolor sit arret, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore et dolore magna alique. Ut ad minim veniarn, quis.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Mon deuxième Post",
      content: "Lorem ipsum dolor sit arret, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore et dolore magna alique. Ut ad minim veniarn, quis.",
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: "Encore un post",
      content: "Lorem ipsum dolor sit arret, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore et dolore magna alique. Ut ad minim veniarn, quis.",
      loveIts: 0,
      created_at: new Date()
    }
  ];

  constructor() {
  }
}
