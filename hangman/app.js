function replacement(dashedWordArr, i, letter) {
    return dashedWordArr.splice(i * 2, 1, letter)
}

let words = ['school', 'academy', 'building', 'country', 'river', // შევქმენით სიტყვების სია
    'continent', 'bicycle', 'mountain', 'planet', 'language'];
let randomWord = words[Math.floor(Math.random() * 10)]; // რენდომად ავიღეთ სიტყვა
let dashedSpRandomWord = '';
for (let i = 0; i < randomWord.length; i++) {
    dashedSpRandomWord += '_ '; // ასოების მაგიბრად ტირეებს ვსვავთ აქ
}
console.log(randomWord);
let attempts = 9;

do {
    let enteredLetter = prompt(`Word is ${dashedSpRandomWord}, Please enter a letter`);
    if (enteredLetter && !Number.isInteger(+enteredLetter) && enteredLetter.length === 1) { // ვალიდაციები
        if (randomWord.includes(enteredLetter) && !dashedSpRandomWord.includes(enteredLetter)) {
            let dashedRandomWordArr = Array.from(dashedSpRandomWord); // ტირეებიანი სიტყვა გადაგვყავს მასივში რადგან შემდგომ შევძლოთ ასოთი ჩანაცვლება
            for (let i = 0; i < randomWord.length; i++) {
                if (randomWord[i] == enteredLetter) { // ვპოულობთ ჩაწერილი ასოს ინდექსს
                    replacement(dashedRandomWordArr, i, enteredLetter); // ტირეს ვანაცვლებთ ასოთი
                    dashedSpRandomWord = dashedRandomWordArr.join(''); // ისევ ვაერთებთ რომ ეკრანზე კარგად გამოჩნდეს
                }
            }
            if (dashedSpRandomWord.split(" ").join("") === randomWord) { // თუ ბოლო ასოც სწორად გამოიცნო
                alert(`Congratulations, correct word it is ${dashedSpRandomWord.split(" ").join("")}, You Won`);
                console.log(`Congratulations, correct word is ${dashedSpRandomWord.split(" ").join("")}, You Won`);
                break;
            } else {
                alert(`Correct, guessed word for now it is ${dashedSpRandomWord}`); // ვაჩვენებთ რომელი ასო ჩაიწერა და რომელ ცდაზეა
                console.log(`Correct, guessed word for now is ${dashedSpRandomWord}`); // ვაჩვენებთ რომელი ასო ჩაიწერა და რომელ ცდაზეა
            }
        } else if (randomWord.includes(enteredLetter) && dashedSpRandomWord.includes(enteredLetter)) { // ვამოწმებთ შეყვანილი ასო უკვე გამოცნობილი ხო არ აქვს
            alert(`You already guessed that letter, please try other, word for now is ${dashedSpRandomWord}`); // თუ აქვს მაშინ ცდების რაოდენობა იზრდება
            console.log(`You already guessed that letter, please try other, word for now is ${dashedSpRandomWord}`); // თუ აქვს მაშინ ცდების რაოდენობა იზრდება
        } else {
            alert(`Unfortinatly entered letter isn't in the word, you left ${attempts} attempts, please try again.`); // თუ ასო ვერ გაარტყა ვუსამძიმრებთ
            console.warn(`Unfortinatly entered letter isn't in the word, you left ${attempts} attempts, please try again.`); // თუ ასო ვერ გაარტყა ვუსამძიმრებთ
            attempts--;
        }
    } else if (enteredLetter && enteredLetter.length !== 1) {
        alert(`Please enter valid and only one letter.`)
        console.log(`Please enter valid and only one letter.`)
    } else if (enteredLetter) {
        alert(`Please enter valid letter.`)
        console.log(`Please enter valid letter.`)
    } else {
        alert(`Please refresh page and enter valid letter.`)
        console.log(`Please refresh page and enter valid letter.`)
        break;
    }

} while (attempts || enteredLetter !== randomWord)


















// for (let i = 1; i <= 10; i++) {
//     let enteredLetter = prompt(`word is ${dashedRandomWord}, please enter letter`); // შეჰყავს ასო
//     if (enteredLetter) { // ვამოწმებთ ცარიელი ხო არაა
//         if (enteredLetter === randomWord) { // ვამოწმებთ პირდაპირ სწორი სიტყვა ხო არ შეიყვანა
//             alert(`Congratulations you won, you guessed the word and it's ${randomWord}`); // თუ სწორია ვულოცავთ
//             break;
//         } else {
//             if (randomWord === dashedRandomWord || enteredLetter === randomWord) { // ვამოწმებთ ხო არ ააწყო სწორად სიტყვა
//                 alert(`Congratulations you won, you guessed the word and it's ${randomWord}`); // ვულოცავთ
//                 break;
//             } else {
//                 if (randomWord.includes(enteredLetter) && !dashedRandomWord.includes(enteredLetter)) { // ვამოწმებთ იმ ასოს თუ შეიცავს ან უკვე გამოცნობილი ხო არ აქვს ეგ ასო
//                     let dashedRandomWordArr = Array.from(dashedRandomWord); // ტირეებიანი სიტყვა გადაგვყავს მასივში რადგან შემდგომ შევძლოთ ასოთი ჩანაცვლება
//                     for (let j = 0; j < randomWord.length; j++) {
//                         if (randomWord[j] == enteredLetter) { // ვპოულობთ ჩაწერილი ასოს ინდექსს
//                             dashedRandomWordArr.splice(j, 1, enteredLetter); // ტირეს ვანაცვკებთ ასოთი
//                             dashedRandomWord = dashedRandomWordArr.join(''); // ისევ ვაერთებთ რომ ეკრანზე კარგად გამოჩნდეს
//                         }
//                     }
//                     alert(`It was your ${i} try and guessed word for now is ${dashedRandomWord}`); // ვაჩვენებთ რომელი ასო ჩაიწერა და რომელ ცდაზეა
//                     i--; //რახან ასო გამოიცნო ცდას არ ვზრდით
//                 } else if (randomWord.includes(enteredLetter) && dashedRandomWord.includes(enteredLetter)) { // ვამოწმებთ შეყვანილი ასო უკვე გამოცნობილი ხო არ აქვს
//                     alert(`It was your ${i} try and you already guessed that letter, word for now is ${dashedRandomWord}`); // თუ აქვს მაშინ ცდების რაოდენობა იზრდება
//                 } else {
//                     alert(`It is your ${i} try, Unfortinatly entered letter isn't in the word, please try again.`); // თუ ასო ვერ გაარტყა ვუსამძიმრებთ
//                 }
//             }
//         }
//     } else {
//         alert(`Please enter valid letter`) // თუ არაფერი შეიყვანა ვთხოვთ რომ შეიყვანოს ასო
//     }
// } if (dashedRandomWord !== randomWord || enteredLetter !== randomWord) {
//     alert(`Sorry you're out of tries, you lost.`) // თუ 10 ცდაში ვერ გამოიცნო ვუსამძიმრებთ წაგებას.
// }
