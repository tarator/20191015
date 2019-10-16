import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-status-toggle',
  templateUrl: './status-toggle.component.html',
  styleUrls: ['./status-toggle.component.css']
})
export class StatusToggleComponent implements OnInit {

  @Input() status: boolean;
  @Output() statusChange = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleStatus() {
    this.status = !this.status;
    this.statusChange.emit(this.status);
  }

}
