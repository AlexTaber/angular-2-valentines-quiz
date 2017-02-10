import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Question } from '../../models/question';
import { Answer } from '../../models/answer';
import { Reaction } from '../../models/reaction';

@Component({
    selector: 'app-question',
    templateUrl: './question.component.html',
    styleUrls: ['./question.component.scss']
})

export class QuestionComponent {
    @Input() question: Question;
    @Output() nextQuestionEmitter = new EventEmitter();
    @Output() checkAnswerEmitter = new EventEmitter();
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

    checkAnswer(answerString) {
        const answer = this.question.getAnswerFromString(answerString);
        this.reaction = this.getReactionFromAnswer(answer);
        this.checkAnswerEmitter.emit(this.getCheckAnswerEmitterData(answer));
    }

    getCheckAnswerEmitterData(answer) {
        return { question: this.question, reaction: this.reaction, answer: answer }
    }

    getReactionFromAnswer(answer: Answer) {
        return answer ? this.question.getReactionFromAnswer(answer) : this.question.defaultReaction;
    }

    nextQuestion() {
        this.reaction = undefined;
        this.nextQuestionEmitter.emit();
    }

    shouldShowAnswers() {
        if (!this.reaction) { return true; }
        return !this.reaction.isCorrect() && this.question.required;
    }
}
