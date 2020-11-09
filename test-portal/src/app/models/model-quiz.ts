export class Quiz {

    private questionList: Question[] = [];

    public addQuestion(q:string, options:string[], correct:number):void {
        this.questionList.push(
            new Question( this.questionList.length+1, q, options, correct ));
    }
    
    public getQuestion(index:number): Question {
        return this.questionList.find(q => q.id === index);
    }

    public setQuestionGuess(qNum:number, optNum:number) {
        this.questionList[qNum - 1].guess = optNum;
    }

    public length():number {
        return this.questionList.length; 
    }
}

export class Question {

    public guess:number = -1;

    constructor(public id: number, public question: string,
        public options:string[], public correct:number) {}
}