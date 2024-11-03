import * as readline from 'node:readline/promises'

function sigmoid(x: number) {
    return 1 / (1 + Math.exp(-x))
}

function sigmoidDerivative(x: number) {
    return x * (1 - x);
}

const trainingData = [
    { input: [0], output: [1] },
    { input: [1], output: [3] },
    { input: [2], output: [5] },
    { input: [3], output: [7] },
    { input: [4], output: [9] },
    { input: [5], output: [11] },
    { input: [6], output: [13] },
    { input: [7], output: [15] },
]

let inputWeights = Math.random() / 100
let hiddenWeights = Math.random() / 100
let outputWeights = Math.random() / 100

let hiddenBias = Math.random() / 100
let outputBias = Math.random() / 100

const learningRate = 0.0001

function forward(input: number) {
    let hiddenInput = input * inputWeights + hiddenBias
    let hiddenOutput = sigmoid(hiddenInput)

    let outputInput = hiddenOutput * hiddenWeights + outputBias
    let output = outputInput

    return { hiddenOutput, output }
}

function meanSquaredError(predicted: number, actual: number) {
    return Math.pow(predicted - actual, 2)
}

function backpropagate(input: number, actualOutput: number, hiddenOutput: number, predictedOutput: number) {
    let outputError = actualOutput - predictedOutput
    let outputDelta = outputError * predictedOutput

    let hiddenError = outputDelta * outputWeights
    let hiddenDelta = hiddenError * sigmoidDerivative(hiddenOutput)

    outputWeights += hiddenOutput * outputDelta * learningRate
    outputBias += outputDelta * learningRate

    inputWeights += input * hiddenDelta * learningRate
    hiddenBias += hiddenDelta * learningRate
}

function train(epochs: number) {
    for (let epoch = 1; epoch <= epochs; epoch++) {
        let totalLoss = 0

        for (let data of trainingData) {
            let input = data.input[0]
            let actualOutput = data.output[0]

            let { hiddenOutput, output } = forward(input)

            let loss = meanSquaredError(output, actualOutput)
            totalLoss += loss

            backpropagate(input, actualOutput, hiddenOutput, output)
        }

        if (epoch % 1000000 === 0) {
            console.log(`Epoch ${epoch}, Loss: ${totalLoss}`)
        }
    }
}

train(10000000)

function test(input: number) {
    let { output } = forward(input)
    console.log(`Input: ${input}, Predicted Output: ${output}`)
}

const rl = readline.createInterface(process.stdin, process.stdout)
while (true) {
    const response = await rl.question("Enter next input: ")
    console.log("You entered: " + response)
    test(parseInt(response))
}