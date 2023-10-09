import { Component, Input } from '@angular/core'
import { NgClass } from '@angular/common'
// Spaces
import { ControlService } from '@quickDraw/core/control'
import { ScoreService } from '@quickDraw/core/score'

@Component({
  standalone: true,
  imports: [
    NgClass
  ],
  selector: 'eg-quick-draw-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {
  // @Properties
  @Input() public timerValue!: number

  // @Constructor
  constructor (
    protected control: ControlService,
    protected score: ScoreService
  ) {
  }
}
