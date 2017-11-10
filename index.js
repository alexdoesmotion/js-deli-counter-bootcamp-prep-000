var katzDeliLine = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  if (katzDeliLine.length > 0) {
    return `Currently serving ${katzDeliLine.shift()}.`
    }
  else {
    return `There is nobody waiting to be served!`
  }
}

function currentLine(line) {
  if (line.length > 0) {
    for (let i = 0; i < line.length; i++) {
        if (i<line.length-1) {
        return `${i+1}. ${line[i]},`
      } else {
        return `${i+1}. ${line[i]}`
      }
    }
    return `The line is currently: ${line}`
  } else {
    return `The line is currently empty.`
  }
}
