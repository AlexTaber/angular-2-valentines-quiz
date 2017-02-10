import { Quiz } from './quiz';

export class QuizReaction {
    content: string;
    minPercentage: number;

    constructor(attributes) {
        for (const key of Object.keys(attributes)) { this.setAttribute(key, attributes); }
    }

    setAttribute(key, attirbutes) {
        this[key] = attirbutes[key];
    }

    isReactionForQuiz(quiz: Quiz) {
        const percentage = quiz.score / quiz.maxScore;
        return this.minPercentage <= percentage;
    }

    isBetter(quiz: Quiz, otherReaction: QuizReaction) {
        if (!this.isReactionForQuiz(quiz)) { return false; }
        return !otherReaction || this.minPercentage > otherReaction.minPercentage;
    }
}
