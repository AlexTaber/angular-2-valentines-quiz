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

    isReaction(question: Question, answer: string): boolean {
        return this.getAnswerStrings(question).indexOf(answer.toUpperCase()) !== -1;
    }

    getAnswerStrings(question: Question): string[] {
        return this.getCorrectAnswers(question).map(answer => answer.content.toUpperCase());
    }

    getCorrectAnswers(question: Question): Answer[] {
        return this.answerIndices.map(index => question.answers[index]);
    }
}
