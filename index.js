const parser = require("@r0neko/osuparser")

const map = parser.ParseFile("amrita.osu")

console.log(map)