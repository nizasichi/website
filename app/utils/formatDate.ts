export function formatDate(dateString: string) {
  return new Date(dateString).toLocaleDateString('en-CH', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })
}
