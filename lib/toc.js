export default function getHeadings(source) {
  // Get each line individually, and filter out anything that
  // isn't a heading.
  let headingLines = source.split('\n').filter((line) => {
    return line.match(/^###*\s/)
  })

  // Transform the string '## Some text' into an object
  // with the shape '{ headingText: 'Some text', headingId: 'some-id', level: 2 }'
  const transformedHeadings = headingLines.map((raw) => {
    const text = raw.replace(/^###*\s\r/, '')

    // Count number of occurences of every character and only select #
    const ocurrences = countCharacterOcurrences(text)
    const level = ocurrences['#']

    // Extract all informations on the headings i need
    const headingText = text.replace(/#/g, '').trim()
    // Remove whitespace, question marks and emojis
    const headingId = headingText
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/([?!])/g, '')
      .replace(
        /([\uE000-\uF8FF]|\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDDFF])/g,
        ''
      )

    return { headingText, headingId, level }
  })

  return transformedHeadings
}

const countCharacterOcurrences = (text) => {
  let result = [...text].reduce((a, e) => {
    a[e] = a[e] ? a[e] + 1 : 1
    return a
  }, {})
  return result
}
