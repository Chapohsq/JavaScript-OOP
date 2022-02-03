class Student{
    constructor(name, surname, age, gender){
        this.name = name;
        this.surname = surname;
        this.age = age;
        this._gender = gender;
        this._grades = [];     ///proprietà private (non vengono toccate). Se le vogliamo utilizzare dobbiamo usare set e get 
    }

    set grade(value){
        if (value >= 0 && value <= 10) {
            this._grades.push(value);

        }
    }

    get grade(){
        return this.calculateMean();
    }
    
    get gender(){
        return this._gender;
    }


    calculateMean(){
       let sum = this.grades.reduce((p, c) => p + c, 0);
       if (this.grades.lenght === 0) {
           return -1;
       }
       let mean = sum / this.grades.length ;
       return mean; 
    }

    generateCode(){
            let now = new Date();
            let actualYear = now.getFullYear();
            let birthYear = actualYear - this.age;
            let code = this.name[0] + this.name[1] + this.surname[0] + this.surname[1] + birthYear;
            return code;
        
    }

    tooString(){

        let mean = this.calculateMean();

        if (mean === -1) {
            mean = "N/c";
        }

        let studentDescription = "Nome: " + this.name + "\n" 
                               + "Cognome: " + this.surname + "\n"
                               + "Età: " + this.age + "\n"
                               + "Media: " + mean;

            return studentDescription;
     }
     
}













