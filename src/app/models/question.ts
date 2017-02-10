import { Answer } from './answer';
import { Reaction } from './reaction';

export class Question {
    content: string;
    type: string;
    answers: Answer[];
    reactions: Reaction[];
    correctAnswerIndices: number[];
    defaultReaction: Reaction;

    constructor(attributes) {
        for (const key of Object.keys(attributes)) { this.setAttribute(key, attributes); }
    }

    setAttribute(key, attirbutes) {
        this[key] = attirbutes[key];
    }

    getReactionFromAnswer(answer): Reaction {
        const reactionsArr = this.reactions.filter(reaction => reaction.isReaction(this, answer));
        return reactionsArr.length > 0 ? reactionsArr[0] : this.defaultReaction;
    }
}
