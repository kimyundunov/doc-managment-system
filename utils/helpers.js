export const formatDate = (date) => {
  if (!date) return null

  const [year, month, day] = date.split('-')
  return `${day}.${month}.${year}`
}
export const parseDate = (date) => {
  if (!date) return null

  const [month, day, year] = date.split('.')
  return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
}