import { Component, Input } from '@angular/core';
import { QuizService } from '../../services/quiz.service';
import { Quiz } from '../../models/quiz';
import { Answer } from '../../models/answer';

@Component({
    selector: 'app-quiz',
    templateUrl: './quiz.component.html',
    styleUrls: ['./quiz.component.scss']
})

export class QuizComponent {
    @Input() quiz: Quiz;
    activeQuestionIndex = 0;
    isOver = false;

    constructor(private _quizService: QuizService) {}

    getActiveQuestion() {
        return this.quiz.questions[this.activeQuestionIndex];
    }

    onAnswer(answerData) {
        const isCorrect = answerData.reaction.isCorrect();
        isCorrect ? this.onCorrectAnswer(answerData) : this.onIncorrectAnswer(answerData);
    }

    onCorrectAnswer(answerData) {
        this.checkSetQuizAttributes(answerData);
        this.incrementScore(answerData);
    }

    onIncorrectAnswer(answerData) {
        // nothing yet!
    }

    checkSetQuizAttributes(answerData: any) {
        const att = answerData.question.attribute;
        if (att) { this.setQuizAttribute(att, answerData.answer); }
    }

    setQuizAttribute(att: string, answer: Answer) {
        this.quiz[att] = answer.content;
    }

    incrementScore(answerData) {
        this.quiz.incremementScore(answerData.question.value);
    }

    onNextQuestion() {
        this.incrementQuestion();
        this.checkQuizOver();
    }

    incrementQuestion() {
        this.activeQuestionIndex = (this.activeQuestionIndex + 1) % this.quiz.questions.length;
    }

    checkQuizOver() {
        if (this.activeQuestionIndex === 0) { this.onQuizOver(); }
    }

    onQuizOver() {
        this.isOver = true;
    }

    getIsOverText() {
        return 'The Quiz is Over!';
    }

    restartQuiz() {
        this.isOver = false;
        this.activeQuestionIndex = 0;
        this.quiz.resetQuiz();
    }
}
