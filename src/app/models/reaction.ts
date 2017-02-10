import { Answer } from './answer';
import { Question } from './question';

export class Reaction {
    content: string;
    type: string;
    answerIndices: number[];

    constructor(attributes) {
        for (const key of Object.keys(attributes)) { this.setAttribute(key, attributes); }
    }

    setAttribute(key, attirbutes) {
        this[key] = attirbutes[key];
    }

    isReaction(question: Question, answer: Answer): boolean {
        return this.getAnswerStrings(question).indexOf(answer.content.toUpperCase()) !== -1;
    }

    getAnswerStrings(question: Question): string[] {
        return this.getAnswers(question).map(answer => answer.content.toUpperCase());
    }

    getAnswers(question: Question): Answer[] {
        return this.answerIndices.map(index => question.answers[index]);
    }

    isCorrect() {
        return this.type === 'correct';
    }
}
