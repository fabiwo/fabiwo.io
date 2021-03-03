import emoji from 'emoji-regex'

const countCharacterOcurrences = (text) => {
  /* eslint-disable no-param-reassign */
  const result = [...text].reduce((a, e) => {
    a[e] = a[e] ? a[e] + 1 : 1
    return a
  }, {})
  return result
  /* eslint-enable no-param-reassign */
}

export default function getHeadings(source) {
  // Get each line individually, and filter out anything that
  // isn't a heading.
  const emojiRegex = emoji()
  const whitespace = /\s/g
  const specials = /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~’]/g

  const headingLines = source
    .split('\n')
    .filter((line) => line.match(/^###*\s/))

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
      .replace(specials, '')
      .replace(emojiRegex, '')
      .replace(whitespace, '-')

    return { headingText, headingId, level }
  })

  return transformedHeadings
}
