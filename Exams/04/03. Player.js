class Player{
    constructor(nickName){
        this.nickName = nickName;
        this.listOfScores = [];
    }

    addScore(score){
        if(!isNaN(score) && score != null) {
            this.listOfScores.push(Number(score));
	     this.listOfScores.sort((a,b) => b-a);

        }
        return this;
    }
    get scoreCount() {
        return this.listOfScores.length;
    }

    get highestScore(){
        return this.listOfScores[0];
        
 
    }

    get topFiveScore(){
        return this.listOfScores.slice(0,5);
    }

    toString(){

        return this.nickName + ': [' +  this.listOfScores + ']';

    }
}
