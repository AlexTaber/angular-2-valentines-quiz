import { Question } from '../models/question';
import { QuizReaction } from './quiz-reaction';

export class Quiz {
    participant: string;
    questions: Question[];
    title: string;
    welcomeTexts: string[];
    score = 0;
    maxScore: number;
    quizReactions: QuizReaction[];

    constructor(attributes) {
        for (const key of Object.keys(attributes)) { this.setAttribute(key, attributes); }
        this.setMaxScore();
    }

    setAttribute(key, attirbutes) {
        this[key] = attirbutes[key];
    }

    setMaxScore() {
        this.maxScore = this.questions.reduce((total, question) => total + question.value, 0);
    }

    incremementScore(amt = 1) {
        this.score += amt;
    }

    resetQuiz() {
        this.score = 0;
        this.participant = undefined;
    }
}
