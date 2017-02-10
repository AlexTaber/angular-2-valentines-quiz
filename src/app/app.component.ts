import { Component } from '@angular/core';
import { QuizService } from './services/quiz.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    constructor( private _quizService: QuizService) {}

    getQuiz() {
        return this._quizService.quiz;
    }
}
