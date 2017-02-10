import { Question } from '../models/question';

export class Quiz {
    participant: string;
    questions: Question[];

    constructor(attributes) {
        for (const key of Object.keys(attributes)) { this.setAttribute(key, attributes); }
    }

    setAttribute(key, attirbutes) {
        this[key] = attirbutes[key];
    }
}
