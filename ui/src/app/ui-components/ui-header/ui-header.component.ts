import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ui-header',
  templateUrl: './ui-header.component.html',
  styleUrls: ['./ui-header.component.scss']
})
export class UiHeaderComponent implements OnInit {

  @Input() heading: String;
  @Input() subheading: String;

  constructor() { }

  ngOnInit() {
  }

}
