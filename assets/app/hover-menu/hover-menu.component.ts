import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hover-menu',
  templateUrl: './hover-menu.component.html',
  styleUrls: ['./hover-menu.component.css']
})

export class HoverMenuComponent{
  @Output() editClicked = new EventEmitter<void>();
  @Output() deleteClicked = new EventEmitter<void>();

  constructor() { }

  onEdit() {
    console.log('child edit called---')
    this.editClicked.emit();
  }

  onDelete() {
    console.log('child delete called---')
    this.deleteClicked.emit();
  }

}
