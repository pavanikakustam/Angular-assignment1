import { Component } from '@angular/core';
import { Movie } from './Movie';
@Component({
  selector: 'app-for-directive',
  templateUrl: './for-directive.component.html',
  styleUrls: ['./for-directive.component.css']
})
export class ForDirectiveComponent {
  movies: Movie[] = [
    new Movie('Movie 1', 'Action', 'Director 1'),
    new Movie('Movie 2', 'Comedy', 'Director 2'),
    new Movie('Movie 3', 'Drama', 'Director 3'),
    new Movie('Movie 4', 'Sci-Fi', 'Director 4'),
    new Movie('Movie 5', 'Thriller', 'Director 5')
  ];
}
