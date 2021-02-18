// Read time per word 275 wpm +

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

const contentToWords = (string) => {
  //exclude  start and end white-space
  string = string.replace(/(^\s*)|(\s*$)/gi, '')
  //convert 2 or more spaces to 1
  string = string.replace(/[ ]{2,}/gi, ' ')
  // exclude newline with a start spacing
  string = string.replace(/\n /, '\n')
  // Split at whitespace
  string = string.split(' ')
  return string
}

const contentToImages = (string) => {
  const imageRegex = /Image\b/g
  const nImages = string.match(imageRegex).length
  return nImages
}

const contentToVideos = (string) => {
  const imageRegex = /Video\b/g
  const nVideos = string.match(imageRegex).length
  return nVideos
}

const nWordsToReadTime = (nWords) => {
  // Returns the time in min needed to read the number of words
  const words_per_minute = 257
  return nWords / words_per_minute
}

const nVideosToReadTime = (nVideos) => {
  // Returns the time in min needed to read the number of words
  const time_per_video = 1
  return nVideos * time_per_video
}

const nImagesToReadTime = (nImages) => {
  // Returns the time in min needed to read the number of images

  const sumReadTime = (time, currentImageNr) => {
    //12 s for image and  11 s for the second 10 s for the third every after tenth 3 s
    if (currentImageNr < 10) {
      time += 12 - currentImageNr
    } else {
      time += 3
    }
    return time
  }

  const imageNrArray = [...Array(nImages).keys()]
  return imageNrArray.reduce(sumReadTime, 0) / 60
}

export default readTime
