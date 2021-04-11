const contentToWords = (contentString) => {
  // exclude  start and end white-space
  let processedString = contentString.replace(/(^\s*)|(\s*$)/gi, '')
  // convert 2 or more spaces to 1
  processedString = processedString.replace(/[ ]{2,}/gi, ' ')
  // exclude newline with a start spacing
  processedString = processedString.replace(/\n /, '\n')
  // Split at whitespace
  processedString = processedString.split(' ')
  return processedString
}

const contentToImages = (string) => {
  const imageRegex = /Image\b/g
  const matches = string.match(imageRegex)
  if (matches != null && matches.length > 0) {
    return matches.length
  } else {
    return 0
  }
}

const contentToVideos = (string) => {
  const imageRegex = /Video\b/g
  const matches = string.match(imageRegex)
  if (matches != null && matches.length > 0) {
    return matches.length
  } else {
    return 0
  }
}

const nWordsToReadTime = (nWords) => {
  // Returns the time in min needed to read the number of words
  const wordsPerMinute = 257
  return nWords / wordsPerMinute
}

const nVideosToReadTime = (nVideos) => {
  // Returns the time in min needed to read the number of words
  const timePerVideo = 1
  return nVideos * timePerVideo
}

const nImagesToReadTime = (nImages) => {
  // Returns the time in min needed to read the number of images

  const sumReadTime = (time, currentImageNr) => {
    // 12 s for image and  11 s for the second 10 s for the third every after tenth 3 s
    let pictureTime = time
    if (currentImageNr < 10) {
      pictureTime += 12 - currentImageNr
    } else {
      pictureTime += 3
    }
    return pictureTime
  }

  const imageNrArray = [...Array(nImages).keys()]
  return imageNrArray.reduce(sumReadTime, 0) / 60
}

const readTime = (postContent) => {
  const words = contentToWords(postContent)
  const nVideos = contentToVideos(postContent)
  const nImages = contentToImages(postContent)
  const nWords = words.length

  const textReadTime = nWordsToReadTime(nWords)
  const imageReadTime = nImagesToReadTime(nImages)
  const videoReadTime = nVideosToReadTime(nVideos)

  return textReadTime + imageReadTime + videoReadTime
}

export default readTime
