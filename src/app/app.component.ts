import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';


  ngOnInit(): void {
    const firebaseConfig = {
      apiKey: "AIzaSyAu6LcL3vDn7quXQfUMkS3s004rKxG3E9k",
      authDomain: "jta-instagran-clone-1cd18.firebaseapp.com",
      databaseURL: "https://jta-instagran-clone-1cd18-default-rtdb.firebaseio.com",
      projectId: "jta-instagran-clone-1cd18",
      storageBucket: "jta-instagran-clone-1cd18.firebasestorage.app",
      messagingSenderId: "1023606971288",
      appId: "1:1023606971288:web:e5f962cfa5d2d014b8a9ed",
      measurementId: "G-KE9LSGD2LR"
    };

    firebase.initializeApp(firebaseConfig);
  }
}
