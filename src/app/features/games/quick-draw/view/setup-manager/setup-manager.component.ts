import { Component, Output, EventEmitter } from '@angular/core'
import { NgForOf, NgIf } from '@angular/common'
// Global
import { AtomButtonComponent } from '@components/atoms'
import { SetupManagerService } from '@quickDraw/core/setup-manager'

@Component({
  standalone: true,
  imports: [
    AtomButtonComponent,
    NgForOf,
    NgIf
  ],
  selector: 'eg-quick-draw-setup-manager',
  templateUrl: './setup-manager.component.html',
  styleUrls: ['./setup-manager.component.css']
})
export class SetupManagerComponent {
  // @Properties

  @Output() public startGame: EventEmitter<void> = new EventEmitter<void>()

  // @Constructor
  constructor (
    protected manager: SetupManagerService
  ) {}

  // @Methods

  public startGameHandler (): void {
    this.startGame.emit()
  }
}
