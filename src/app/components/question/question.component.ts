import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question';
import { Reaction } from '../../models/reaction';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.css']
})

export class QuestionComponent {
    @Input() question: Question;
    @Output() nextQuestionEmitter = new EventEmitter();
    inputAnswer: string;
    reaction: Reaction;

    isInputQuestion() {
        return this.question && this.question.type === 'input';
    }

    isMultipleQuestion() {
        return this.question && this.question.type === 'multiple';
    }

    inputSubmit() {
        this.checkAnswer(this.inputAnswer);
    }

    checkMultipleAnswer(answer) {
        this.checkAnswer(answer.content);
    }

    checkAnswer(answer) {
        this.reaction = this.question.getReactionFromAnswer(answer);
    }

    nextQuestion() {
        this.reaction = undefined;
        this.nextQuestionEmitter.emit();
    }
}
