import { Component } from '@angular/core';
import { QuickDrawCoreService } from './core/core.service'
import { GameAreaComponent } from './view/game-area/game-area.component'

@Component({
  standalone: true,
  providers: [
    QuickDrawCoreService
  ],
  imports: [
    GameAreaComponent
  ],
  selector: 'eg-game-quick-draw-feature',
  templateUrl: './quick-draw.component.html',
  styleUrls: ['./quick-draw.component.css']
})
export class QuickDrawComponent {

}
