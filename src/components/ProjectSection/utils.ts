// Filtered colors with better contrast
export const tagColors = [
  '#a5d6a7',
  '#81c784',
  '#66bb6a',
  '#4caf50',
  '#43a047',
  '#2e7d32',
  '#1b5e20',
  '#0d3b0a',
  '#ba68c8',
  '#ce93d8',
  '#ef9a9a',
  '#e57373',
  '#4fc3f7',
  '#80deea',
  '#4dd0e1',
]

/**
 * Returns a random tag color with contrast-safe text color
 */
export const getRandomTagStyle = () => {
  const bgColor = tagColors[Math.floor(Math.random() * tagColors.length)]

  const hex = bgColor.replace('#', '')
  const r = parseInt(hex.slice(0, 2), 16)
  const g = parseInt(hex.slice(2, 4), 16)
  const b = parseInt(hex.slice(4, 6), 16)
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255

  const textColor = luminance > 0.6 ? '#000000' : '#FFFFFF'

  return {
    backgroundColor: bgColor,
    color: textColor,
  }
}

/**
 * Returns a random button style with good contrast
 */
export const getRandomButtonStyle = () => {
  const buttonColors = [
    '#2563eb', // blue-600
    '#dc2626', // red-600
    '#16a34a', // green-600
    '#ca8a04', // yellow-600
    '#7c3aed', // purple-600
    '#db2777', // pink-600
  ]
  const bgColor = buttonColors[Math.floor(Math.random() * buttonColors.length)]

  return {
    backgroundColor: bgColor,
    color: '#FFFFFF', // Always white text for buttons
  }
}

/**
 * Returns a random category badge style
 */
export const getRandomCategoryStyle = () => {
  const categoryColors = [
    '#0369a1', // blue-700
    '#b91c1c', // red-700
    '#15803d', // green-700
    '#a16207', // yellow-700
    '#6d28d9', // purple-700
    '#be123c', // rose-700
  ]
  const bgColor =
    categoryColors[Math.floor(Math.random() * categoryColors.length)]

  return {
    backgroundColor: bgColor,
    color: '#FFFFFF', // Always white text for category badges
  }
}
