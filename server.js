
const express = require('express')
const port = 3000
const app = express()

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name
    const greeting = `Hello, ${name}, so great to see you!`
    res.send(greeting)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
    const total = parseFloat(req.params.total)
    const tipPercentage = parseFloat(req.params.tipPercentage)
    const tipAmount = (total * tipPercentage) / 100
    const totalAmount = total + tipAmount
    res.send(`Total: ${total}, Tip Percentage: ${tipPercentage}%, Tip Amount: ${tipAmount}, Total Amount (with tip): ${totalAmount}`)
})

app.get('/magic/:question', (req, res) => {
    const question = req.params.question
    const responses = [
        "It is certain",
        "It is decidedly so",
        "Without a doubt",
        "Yes, definitely",
        "You may rely on it",
        "As I see it, yes",
        "Most likely",
        "Outlook good",
        "Yes",
        "Signs point to yes",
        "Reply hazy, try again",
        "Ask again later",
        "Better not tell you now",
        "Cannot predict now",
        "Concentrate and ask again",
        "Don't count on it",
        "My reply is no",
        "My sources say no",
        "Outlook not so good",
        "Very doubtful"
    ];
    const randomIndex = Math.floor(Math.random() * responses.length)
    const response = responses[randomIndex]
    res.send(`<h1>Question: ${question}</h1><h1>Answer: ${response}</h1>`)
}
)

app.get('/fibonacci/:number', (req, res) => {
    const number = parseInt(req.params.number)
    const isPerfectSquare = (n) => {
        const sqrt = Math.sqrt(n)
        return sqrt === Math.floor(sqrt)
    }
    const isFibonacciNumber = (n) => {
        return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4)
    }
    if (isFibonacciNumber(number)) {
        res.send("Very good, it is Fibonacci")
    } else {
        res.send("I can tell this is not a Fibonacci number")
    }
})


app.listen(port, () => {
    console.log(`port ${port} working good`)
})