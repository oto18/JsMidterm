function isMore(ourNum, enteredNum) {
    if (ourNum < enteredNum) {
        return true;
    } else {
        return false;
    }
}

let min = prompt('Enter min number: ');  // შეგვყავს დიაპაზონის საწყისი რიცხვი
let max = prompt('Enter max number: ');  // შეგვყავს დიაპაზონის საბოლოო რიცხვი
let randomNumber = Math.ceil(Math.random() * (+max - +min) + +min);  // ვაგენერირებთ დიაპაზონში შემავალ ნებისმიერ რენდომ რიცხვს

let attempts = 0; // ცდების რაოდენობა
let guessNumber = '';

console.log(randomNumber);

if (min && max && Number.isInteger(+min) && Number.isInteger(+max)) {
    if (+min >= +max) {
        console.warn("min number must be more than max number")
    } else {
        do {
            guessNumber = prompt('Try to guess: '); // მომხმარებლის მიერ შეყვანილი რიცხვი
            if (guessNumber && Number.isInteger(+guessNumber)) {
                attempts++; // ვზრდით ცდების რაოდენობას
                if (randomNumber === +guessNumber) {  // ვამოწმებთ შეყვანილი რიცხვი თუ ემთხვევა ჩაფიქრებულს
                    alert(`congrats you guessed. The number is ${randomNumber} and you guessed
                    it with ${attempts} try`) // თუ ემთხვევა ვულოცავთ
                    console.log(`congrats you guessed. The number is ${randomNumber} and you guessed
                    it with ${attempts} try`) // თუ ემთხვევა ვულოცავთ
                    break;
                } else {
                    if (isMore(+randomNumber, +guessNumber)) { // ვანიშნებთ მეტია თუ ნაკლები შეყვანილი რიცხვი ჩაფიქრებულზე
                        alert("Its incorrect, try lower number.")
                        console.log("Its incorrect, try lower number.")
                    } else {
                        alert("It's incorrect, try higher number.")
                        console.log("It's incorrect, try higher number.")
                    }
                }
            } else if (guessNumber) {
                alert("Please enter valid number");
                console.warn("Please enter valid number");
            } else {
                alert("Please enter valid number");
                console.warn("Please enter valid number");
                break;
            }
        } while (randomNumber !== +guessNumber) // როცა გამოიცნობს რიცხვს ციკლი წყდება

    }
} else {
    alert("Please refresh page and enter valid numbers"); // თუ რომელიმე ველი ცარიელი დარჩა მოსთხოვს გვერდის დარეფრეშებას და რიცხვების ხელახლა შეყვანას
    console.warn("Please refresh page and enter valid numbers"); // თუ რომელიმე ველი ცარიელი დარჩა მოსთხოვს გვერდის დარეფრეშებას და რიცხვების ხელახლა შეყვანას
}