const getMonthName = month => [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
][month - 1]

export default function formatDate(date) {
  const [year, month, day] = date.split('-').map(value => parseInt(value, 10))

  return `${getMonthName(month)} ${day}, ${year}`
}
