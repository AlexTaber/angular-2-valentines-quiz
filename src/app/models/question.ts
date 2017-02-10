import { Answer } from './answer';
import { Reaction } from './reaction';

export class Question {
    content: string;
    type: string;
    answers: Answer[];
    reactions: Reaction[];
    correctAnswerIndex: number;

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

    isAnswer(answer): boolean {
        return answer === this.getCorrectAnswer().content;
    }

    getCorrectAnswer(): Answer {
        return this.answers[this.correctAnswerIndex];
    }
}
