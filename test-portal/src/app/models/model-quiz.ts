export class Quiz {

    private questionList: Question[] = [];

    public addQuestion(q:string, one:string, two:string, three:string, correct:string):void {
        this.questionList.push(
            new Question( this.questionList.length+1, q, one, two, three, correct ));
    }
    
    public getQuestion(index:number): Question {
        return this.questionList.find(q => q.id === index);
    }

    public length():number {
        return this.questionList.length; 
    }
}

export class Question {
    constructor(public id: number, public question: string,
        public wrongOne: string, public wrongTwo: string, 
        public wrongThree: string, public correct: string) {}
}