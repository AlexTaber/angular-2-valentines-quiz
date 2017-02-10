import { Answer } from './answer';
import { Reaction } from './reaction';

export class Question {
    content: string;
    type: string;
    answers: Answer[];
    reactions: Reaction[];
    correctAnswerIndices: number[];

    constructor(attributes) {
        for (const key of Object.keys(attributes)) { this.setAttribute(key, attributes); }
    }

    setAttribute(key, attirbutes) {
        this[key] = attirbutes[key];
    }

    getReactionFromAnswer(answer): Reaction {
        return this.isAnswer(answer) ? this.getGoodReaction() : this.getBadReaction();
    }

    getGoodReaction(): Reaction {
        const reactionArr = this.reactions.filter(reaction => reaction.type === 'correct');
        return reactionArr.length > 0 ? reactionArr[0] : undefined;
    }

    getBadReaction(): Reaction {
        const reactionArr = this.reactions.filter(reaction => reaction.type === 'incorrect');
        return reactionArr.length > 0 ? reactionArr[0] : undefined;
    }

    isAnswer(answer: string): boolean {
        return this.getCorrectAnswerStrings().indexOf(answer.toUpperCase()) !== -1;
    }

    getCorrectAnswerStrings(): string[] {
        return this.getCorrectAnswers().map(answer => answer.content.toUpperCase());
    }

    getCorrectAnswers(): Answer[] {
        return this.correctAnswerIndices.map(index => this.answers[index]);
    }
}
