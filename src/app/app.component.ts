import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem("learn japanese",false),
    new WishItem("learn korean"),
    new WishItem("learn mandarin",true)
  ]
  title = 'wishlist';
  toggleItem(e : any){
    e.isComplete = !e.isComplete
    console.log(e)
  }

  newWishText = ""

  addNewWish(){

  }
}
