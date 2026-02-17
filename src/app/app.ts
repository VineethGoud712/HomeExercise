import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Product } from "./components/product/product";

@Component({
  selector: 'app-root',
  imports: [ Product],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('HomeExercise');
}
