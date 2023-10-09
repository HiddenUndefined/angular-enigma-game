import { Component, HostBinding, Input } from '@angular/core'
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
  // @Host
  @HostBinding('class') readonly classes: string = 'd-flex fd-column jc-start ai-stretch'

  // @Properties
  @Input() public gameStatus!: string
  @Input() public round!: number
  @Input() public timerValue!: number

  // @Constructor
  constructor (
    protected control: ControlService,
    protected score: ScoreService
  ) {
  }
}
