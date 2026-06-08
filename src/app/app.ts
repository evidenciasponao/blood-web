import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Merch } from "./core/merch/merch";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Merch],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Project2');
}
