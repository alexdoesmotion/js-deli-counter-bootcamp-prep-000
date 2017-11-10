var katzDeli = []

function takeANumber(katzDeli, name) {
  katzDeli.push(name)
  return `Welcome, ${name}. You are number ${katzDeli.length} in line.`
}

function nowServing(deliLine) {
  if (deliLine.length > 0) {
    return `Currently serving ${[0]}`
    katzDeli.shift()
  }
  else {
    return `There is nobody waiting to be served!`
  }
}
