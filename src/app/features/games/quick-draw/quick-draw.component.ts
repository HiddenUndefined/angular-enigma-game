import { Component } from '@angular/core';
import { GameAreaComponent } from './components/game-area/game-area.component'

@Component({
  standalone: true,
  imports: [
    GameAreaComponent
  ],
  selector: 'eg-game-quick-draw-feature',
  templateUrl: './quick-draw.component.html',
  styleUrls: ['./quick-draw.component.css']
})
export class QuickDrawComponent {

}
