
const students = [
    { name: "Anna", score: 85 },
    { name: "Jan", score: 92 },
    { name: "Kasia", score: 78 },
    { name: "Tomasz", score: 90 },
    { name: "Ewa", score: 65 },
];

class TestAnalyzer {
    constructor(results) {
        this.results = results;
    }

 
    calculateAverage() {
        const total = this.results.reduce((sum, { score }) => sum + score, 0);
        return (total / this.results.length).toFixed(2);
    }

    findHighest() {
        const highest = this.results.reduce((max, student) =>
            student.score > max.score ? student : max
        );
        return highest;
    }

    findLowest() {
        const lowest = this.results.reduce((min, student) =>
            student.score < min.score ? student : min
        );
        return lowest;
    }

    displayResults() {
        console.log("Wyniki testów:");
        this.results.forEach(({ name, score }) =>
            console.log(`${name}: ${score} punktów`)
        );

        const average = this.calculateAverage();
        const highest = this.findHighest();
        const lowest = this.findLowest();

        console.log(`\nŚrednia wyników: ${average}`);
        console.log(
            `Najwyższy wynik: ${highest.name} - ${highest.score} punktów`
        );
        console.log(
            `Najniższy wynik: ${lowest.name} - ${lowest.score} punktów`
        );
    }
}

const analyzer = new TestAnalyzer(students);
analyzer.displayResults();
