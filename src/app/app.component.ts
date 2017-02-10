import { Component } from '@angular/core';
import { MainService } from './services/main.service';
import { QuestionsService } from './services/questions.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    constructor( private _mainService: MainService, private _questionsService: QuestionsService) {}

    getName() {
    return this._mainService.name;
    }

    getActiveQuestion() {
        return this._questionsService.getActiveQuestion();
    }

    nextQuestion() {
        this._questionsService.incrementQuestion();
    }
}
