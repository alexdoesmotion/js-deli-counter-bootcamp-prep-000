var katzDeli = []

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Hello ${name}, you are currently ${katzDeli.length} in line.`
}
