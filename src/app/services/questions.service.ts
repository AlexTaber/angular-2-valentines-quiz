import { Injectable } from '@angular/core';
import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { Reaction } from '../models/reaction';

@Injectable()

export class QuestionsService {
    questions: Question[] = this.setQuestions();
    activeQuestionIndex = 0;

    setQuestions() {
        return [
            new Question({
                content: 'Hi, what is your name?',
                type: 'input',
                answers: [ new Answer({content: 'Kim Castelli'}),
                           new Answer({content: 'Kim'}),
                           new Answer({content: 'Kimberly'}), ],
                correctAnswerIndices: [0, 1, 2],
                reactions: [ new Reaction({content: 'Good', type: 'correct'}),
                             new Reaction({content: 'bad', type: 'incorrect'})]
            }),
            new Question({
                content: 'How much wine was spilt on our first date?',
                type: 'multiple',
                answers: [ new Answer({content: 'All the wine'}),
                           new Answer({content: 'What? What wine?'}) ],
                correctAnswerIndices: [0],
                reactions: [ new Reaction({content: 'Good', type: 'correct'}),
                             new Reaction({content: 'bad', type: 'incorrect'})]
            })
        ];
    }

    getActiveQuestion() {
        return this.questions[this.activeQuestionIndex];
    }

    incrementQuestion() {
        this.activeQuestionIndex = (this.activeQuestionIndex + 1) % this.questions.length;
    }
}
