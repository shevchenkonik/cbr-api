export const formatDate = (date: Date): string => {
  const day = String(
    date.getDate() < 10 ? '0' + date.getDate() : date.getDate(),
  )
  const month = String(
    date.getMonth() < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1,
  )
  const year = String(date.getFullYear())

  return `${day}/${month}/${year}`
}
