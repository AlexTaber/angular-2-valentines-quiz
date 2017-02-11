import { Injectable } from '@angular/core';
import { Quiz } from '../models/quiz';
import { Question } from '../models/question';
import { Answer } from '../models/answer';
import { Reaction } from '../models/reaction';
import { QuizReaction } from '../models/quiz-reaction';

@Injectable()

export class QuizService {
    quiz: Quiz;

    constructor() {
        this.setQuiz();
    }

    setQuiz() {
        this.quiz = new Quiz({
            title: 'Do You Know Your Boo?',
            welcomeTexts: [`Ladies, Gentleman, and television audience of approximately 17 million, welcome to Do You Know Your Boo, the
                            greatest quiz show on earth! I am your virtual, strikingly handsome host, QuizBot!`,
                           `Here on DYKYB, contestants are posed a series of questions about none other than, you guessed it, their boo.
                            Get them right, and be lavished with feels and eternal glory! Get them wrong, however, and we'll drop your boo
                            into this swamp teeming with hungry alligators!`,
                           `Unfortunately for said alligators, our contestant tonight is certifiably brilliant! She know's a lot about how
                            the world works, but does she know her boo? Only one way to find out!`
                          ],
            questions: this.getQuestions(),
            quizReactions: this.getQuizReactions()
        });
    }

    getQuestions() {
        return [
            new Question({
                content: 'First off, why don\'t you tell our viewing audience your name?',
                type: 'input',
                answers: [ new Answer({content: 'Kim Castelli'}),
                           new Answer({content: 'Kim'}),
                           new Answer({content: 'Kimberly'}),
                           new Answer({content: 'Alex'}),
                           new Answer({content: 'Alex Taber'}),
                         ],
                reactions: [ new Reaction({content: `Well we must say, Kim, you are by far the most stunning contestant we have ever had on
                                                     this show. Should your boo be eviscerated by way of alligator teeth this evening,
                                                     I expect he'll have thought it totally worth it.`,
                                           type: 'correct',
                                           answerIndices: [0, 1, 2] }),
                             new Reaction({content: `What? You have the same name as your boo? That can\'t be right, try again`,
                                           type: 'incorrect',
                                           answerIndices: [3, 4] }),
                           ],
                defaultReaction: new Reaction({content: `Given the continue existence of the man you purport to adore literally hangs on
                                                         your mental aptitude, I find it disconcerting that you don't know your own name.
                                                         How about your try again.`,
                                               type: 'incorrect'}),
                required: true,
                attribute: 'participant',
                value: 0
            }),
            new Question({
                content: `Now Kim, next question: Can using engineered fungal PKSs be a general approach toward the
                          heterologous biosynthesis of bacterial aromatic polyketides in E. coli?`,
                type: 'multiple',
                answers: [ new Answer({content: 'Yes, obviously!'}),
                           new Answer({content: 'No, that\'s rediculous'}),
                           new Answer({content: 'Hell if I know!'}) ],
                reactions: [ new Reaction({content: `No worries, we actually don't know either! We just heard you were a science genius,
                                                     thought it would get your focused. Okay, now for the real questions...`,
                                           type: 'correct',
                                           answerIndices: [2] }) ],
                defaultReaction: new Reaction({content: `Truth is, we have no idea! We're just getting you warmed up. I have to say,
                                                         the confidence with which you answered is super sexy. Okay, now for the real 
                                                         questions...`,
                                               type: 'correct'}),
                required: false,
                value: 0
            }),
            new Question({
                content: `Approximately how much wine did Alex spill on you during your first date?`,
                type: 'multiple',
                answers: [ new Answer({content: `Exactly all the wine ever`}),
                           new Answer({content: `An endearing quanity of wine`}),
                           new Answer({content: `We had wine?`}) ],
                reactions: [ new Reaction({content: `Correct! Alex would like to point out that he to busy contemplating how you
                                                     could possibly be a real human being to worry about things such as his
                                                     immediate surroundings.`,
                                           type: 'correct',
                                           answerIndices: [0, 1] }) ],
                defaultReaction: new Reaction({content: `Um, wow. That's like the easiest question we have. Well, thankfully your
                                                         boo is of generous proportions, these alligators haven't gotten a good meal
                                                         in awhile! Still time to turn it around though.`,
                                               type: 'incorrect'}),
                required: false,
                value: 1
            }),
            new Question({
                content: `How many dates did you and Alex go on before you asked to whisk him off to Syracuse for New Years's 
                          Weekend?`,
                type: 'multiple',
                answers: [ new Answer({content: `At least 20, like most reasonable people`}),
                           new Answer({content: `I have no interest in whisking Alex off to anywhere for that long`}),
                           new Answer({content: `After the second date`}) ],
                reactions: [ new Reaction({content: `Correct! And it worked out so well, just look at how adorable you two are!`,
                                           type: 'correct',
                                           answerIndices: [2],
                                           imgUrl: 'https://s3.amazonaws.com/uphold-assets/IMG_0275.JPG.jpg' }), ],
                defaultReaction: new Reaction({content: `Really? Honestly, I know you said you have a spotty memory sometimes, but 
                                                         we're talking about relatively recent history here!`,
                                               type: 'incorrect'}),
                required: false,
                value: 1
            }),
            new Question({
                content: `Which of the following is an agreed upon feature of your future log cabin?`,
                type: 'multiple',
                answers: [ new Answer({content: `Hot Tub`}),
                           new Answer({content: `Vegi Garden`}),
                           new Answer({content: `Fire Pit`}),
                           new Answer({content: `All of the above!`}) ],
                reactions: [ new Reaction({content: `You got it! You hear that? That's the sound of our entire studio audience
                                                     seething in envy over how awesome your lives are going to be (and, let's be 
                                                     honest, already are)!`,
                                           type: 'correct',
                                           answerIndices: [3] }) ],
                defaultReaction: new Reaction({content: `Ohh, sorry, the correct answer is all of the above. C'mon, do you realy 
                                                         think the two of you would go through all the effort of making a log 
                                                         cabin and not have everything listed above in it?!`,
                                               type: 'incorrect'}),
                required: false,
                value: 1
            }),
            new Question({
                content: `What is the surprising ingredient in Alex and Kim's world famous Vegi Eggplant Parmisan?`,
                type: 'multiple',
                answers: [ new Answer({content: `Hummus`}),
                           new Answer({content: `Applesauce`}),
                           new Answer({content: `Oil-cured Olives`}) ],
                reactions: [ new Reaction({content: `Yup! Alex would like to inject that, in the event he doesn't succumb to the 
                                                     vicious reptilian jaws below, that the two of you should have another make-dinner 
                                                     date night soon!`,
                                           type: 'correct',
                                           answerIndices: [0],
                                           imgUrl: 'https://s3.amazonaws.com/uphold-assets/20170107_215055.jpg' }),
                             new Reaction({content: `Really? Applesauce? To be fair, if anyone can make that taste good, it's you!`,
                                           type: 'incorrect',
                                           answerIndices: [1] }),
                             new Reaction({content: `Oil-cured olives' sole purpose in life is to take otherwise delicious food and 
                                                     render it inedible!`,
                                           type: 'incorrect',
                                           answerIndices: [2] })
                           ],
                required: false,
                value: 1
            }),
            new Question({
                content: `Alright, we have one final question. Alex feels the first time he asked, it was an underwhelming effort. 
                          So we'll pass him a mic, so he can ask directly:<br><br>
                          Will you be my Valentine?`,
                type: 'multiple',
                answers: [ new Answer({content: `God, this is so cheesy`}),
                           new Answer({content: `Sorry dude. Have fun with the gators!`}),
                           new Answer({content: `Yes`}) ],
                reactions: [ new Reaction({content: `LADIES AND GENTLEMEN, SHE AGREED! Oh thank god, honestly I didn't know which 
                                                     way that was going to go! `,
                                           type: 'correct',
                                           answerIndices: [2] })
                           ],
                defaultReaction: new Reaction({content: `Well damn, that's just cold-blooded. Speaking of cold-blooded, folks it's 
                                                         time to cut the cord and drop our poor ex-boo into the the gator pool! This 
                                                         been another episode of Do You Know Your Boo!`,
                                               type: 'incorrect'}),
                required: false,
                value: 1
            }),
            new Question({
                content: `This calls for our favorite segment of the show: Bonus Question!<br><br>Given that Alex made this whole 
                          site as an elaborate ruse to ask you to be his Valentine, how laid is he about to get?`,
                type: 'multiple',
                answers: [ new Answer({content: `The most laid!`}) ],
                reactions: [ new Reaction({content: 'What are you waiting for then?',
                                           type: 'correct',
                                           answerIndices: [0] })
                           ],
                required: false,
                value: 1
            })
        ];
    }

    getQuizReactions() {
        return [
            new QuizReaction({
                content: `I adore you. Thanks for putting up with my silliness!`,
                minPercentage: 0
            })
        ];
    }
}
