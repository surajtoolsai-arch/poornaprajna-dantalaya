export function useScrollTo() {
  const scrollToId = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return scrollToId
}
