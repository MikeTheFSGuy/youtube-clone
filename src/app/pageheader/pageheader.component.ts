import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pageheader',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pageheader.component.html',
  styleUrl: './pageheader.component.css'
})
export class PageheaderComponent {
  private _displayInputFullWidth:boolean = false;

  public set displayInputFullWidth(value: boolean) {
    this._displayInputFullWidth = value;
  }

  public get displayInputFullWidth():boolean {
    return this._displayInputFullWidth;
  }

}

