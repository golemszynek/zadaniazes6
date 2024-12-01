class Student{
    constructor(imie,wiek,oceny = []){
        this.imie=imie;
        this.wiek=wiek;
        this.oceny=oceny;
    }
    getGrade(nowa){
        this.oceny = [...this.oceny,nowa]
        console.log(`Pomyślnie dodano nową ocene. Aktualna lista ocen studenta: ${this.oceny}`);

    }
    getAverage(){
        const suma = this.oceny.reduce((acc, num)=> acc + num, 0);
        console.log(`Średnia ocen wynosi: ${(suma / this.oceny.length)}`);
    }
}

const student = new Student('Stefan', 25, [5, 4, 3, 5]);
const{imie,wiek,oceny} = student
console.log(`Imie studenta: ${imie},wiek studenta: ${wiek},oceny studenta: ${oceny}`)
student.getGrade(5)


  
  


