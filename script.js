let emoji = document.getElementById('emoji'); // Emoji wale div ko access kar rahe ho yaha.
let des = document.getElementById('des'); // Description wale div ko access kar rahe ho yaha.

let result; // Ek global variable banaya hai, jo API ka result store karega.

async function fetchEmoji() { // Ek asynchronous function banaya API se data fetch karne ke liye.
    let res = await fetch('https://emoji-api.com/emojis?access_key=762de98579a480a3ee6a0f9bee2191f6c51ac9c0') 
    // API call kar rahe ho yaha, emojis ka data lene ke liye.
    result = await res.json() // API ka JSON response ko parse karke `result` me store kar rahe ho.
    // console.log(result[20].character) // Debugging ke liye ek emoji ka character print kar rahe ho.
}

fetchEmoji() // API fetch function ko call kar diya yaha.

emoji.addEventListener('click', () => { // Emoji wale div ke click event ke liye ek listener add kiya hai.
    let randam = Math.floor(Math.random() * result.length) 
    // Random number generate kar rahe ho, emojis ke list me se ek random emoji select karne ke liye.
    let description = result[randam].unicodeName.split('.') 
    // Unicode name ko split kar rahe ho `.` ke basis par, taaki ek achha description mile.
    let des2 = description[1].substring(2, description[1].length) 
    // Description ke second part ko process karke usable text banaya hai.
    // console.log(randam) // Debugging ke liye random number print kar rahe ho.
    emoji.innerHTML = result[randam].character; // Emoji ko HTML me update kar rahe ho.
    // des.innerHTML = result[randam].unicodeName; // Pure unicode name ko description me dikhana ka option tha.
    des.innerHTML = des2; // Processed description ko HTML me update kar diya hai.
})