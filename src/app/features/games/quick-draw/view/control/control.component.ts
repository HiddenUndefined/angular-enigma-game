import { Component, Output, EventEmitter } from '@angular/core'
import { NgIf } from '@angular/common'
// Global
import { AtomButtonComponent } from '@components/atoms'
// Spaces
import { StatusesService } from '@quickDraw/core/statuses'

@Component({
  standalone: true,
  imports: [
    AtomButtonComponent,
    NgIf
  ],
  selector: 'eg-quick-draw-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent {
  // @Properties
  @Output() public stopGameEvent: EventEmitter<void> = new EventEmitter<void>()
  @Output() public exitGameEvent: EventEmitter<void> = new EventEmitter<void>()

  // @Constructor
  constructor (
    protected status: StatusesService
  ) {}

  // @Methods
  public stopGameHandler (): void {
    this.stopGameEvent.emit()
  }

  public exitGameHandler (): void {
    this.exitGameEvent.emit()
  }
}
