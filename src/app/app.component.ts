import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageheaderComponent } from "./pageheader/pageheader.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PageheaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'youtube-clone';
}
