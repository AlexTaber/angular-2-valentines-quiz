import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { Reaction } from '../models/reaction';

@Injectable()

export class QuizService {
    quiz: Quiz;
    activeQuestionIndex = 0;

    constructor() {
        this.setQuiz();
    }

    setQuiz() {
        this.quiz = new Quiz({
            title: 'Best Quiz Ever',
            welcomeText: 'Welcome to the best quiz ever',
            questions: this.getQuestions()
        });
    }

    getQuestions() {
        return [
            new Question({
                content: 'Hi, what is your name?',
                type: 'input',
                answers: [ new Answer({content: 'Kim Castelli'}),
                           new Answer({content: 'Kim'}),
                           new Answer({content: 'Kimberly'}),
                           new Answer({content: 'Alex'}),
                           new Answer({content: 'Alex Taber'}),
                         ],
                reactions: [ new Reaction({content: `Oh my god, you are even sexier than Alex had programmed me to believe.
                                                     <br><br>So sorry, I'm sure you're terribly confused as to what's happening.
                                                      Welcome to the world's most rediculously romantic Valentine's Day quiz ever!`,
                                           type: 'correct',
                                           answerIndices: [0, 1, 2] }),
                             new Reaction({content: 'Ugh, not him. He\'s the worst',
                                           type: 'incorrect',
                                           answerIndices: [3, 4] }),
                           ],
                defaultReaction: new Reaction({content: `Hmm, so sorry. This unfathomably romantic Valentines Day quiz
                                                         is intended for Kim Castelli.`,
                                               type: 'incorrect'}),
                required: true
            }),
            new Question({
                content: 'How much wine was spilt on our first date?',
                type: 'multiple',
                answers: [ new Answer({content: 'All the wine'}),
                           new Answer({content: 'What? What wine?'}) ],
                reactions: [ new Reaction({content: 'Good', type: 'correct', answerIndices: [0] }) ],
                defaultReaction: new Reaction({content: 'bad', type: 'incorrect'}),
                required: false
            })
        ];
    }

    getActiveQuestion() {
        return this.quiz.questions[this.activeQuestionIndex];
    }

    incrementQuestion() {
        this.activeQuestionIndex = (this.activeQuestionIndex + 1) % this.quiz.questions.length;
    }
}