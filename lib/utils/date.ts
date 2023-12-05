export const formatDate = (date: Date) => {
  const day = String('0' + date.getDate())
  const month = String(date.getMonth() + 1)
  const year = String(date.getFullYear())

  return `${day}/${month}/${year}`
}
