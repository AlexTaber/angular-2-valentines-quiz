import { Answer } from './answer';
import { Reaction } from './reaction';

export class Question {
    content: string;
    type: string;
    answers: Answer[];
    reactions: Reaction[];
    correctAnswerIndices: number[];
    defaultReaction: Reaction;
    required: boolean;
    attribute: string;
    value = 1;

    constructor(attributes) {
        for (const key of Object.keys(attributes)) { this.setAttribute(key, attributes); }
    }

    setAttribute(key, attirbutes) {
        this[key] = attirbutes[key];
    }

    getAnswerFromString(answerString: string) {
        answerString = answerString.toUpperCase();
        const answersArr = this.answers.filter(answer => answer.content.toUpperCase() === answerString);
        return answersArr.length > 0 ? answersArr[0] : undefined;
    }

    getReactionFromAnswer(answer: Answer): Reaction {
        const reactionsArr = this.reactions.filter(reaction => reaction.isReactionForAnswer(this, answer));
        return reactionsArr.length > 0 ? reactionsArr[0] : this.defaultReaction;
    }
}
