import { Component } from '@angular/core'
import { NgClass } from '@angular/common'
// Spaces
import { ControlService } from '@quickDraw/core/control'
import { ScoreService } from '@quickDraw/core/score'

@Component({
  standalone: true,
  selector: 'eg-quick-draw-score',
  templateUrl: './score.component.html',
  imports: [
    NgClass
  ],
  styleUrls: ['./score.component.css']
})
export class ScoreComponent {
  constructor (
    protected control: ControlService,
    protected score: ScoreService
  ) {
  }
}
