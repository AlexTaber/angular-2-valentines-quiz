import { Component } from '@angular/core';
import { MainService } from './services/main.service';
import { QuizService } from './services/quiz.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {
    constructor( private _mainService: MainService, private _quizService: QuizService) {}

    getName() {
    return this._mainService.name;
    }

    getActiveQuestion() {
        return this._quizService.getActiveQuestion();
    }

    nextQuestion() {
        this._quizService.incrementQuestion();
    }
}
