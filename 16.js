const fs = require('fs')

let input = fs.readFileSync("16.txt").toString()
let sample = "11101110000000001101010000001100100000100011000001100000"

let packetVersion = sample.substring(0, 3)
let packetType = sample.substring(3, 6)
let operatorPacket = sample[7] == "0" ? sample.substring(8, 23) : sample.substring(8, 19)
let subPacketLength = parseInt(operatorPacket, 2).toString(10)

// let b = (parseInt(input, 16).toString(2)).padStart(8, '0')

console.log(packetVersion, packetType, operatorPacket, subPacketLength)