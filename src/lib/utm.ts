const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'] as const
const STORAGE_KEY = 'utm_params'

function captureUtmParams() {
  if (typeof window === 'undefined') return

  const params = new URLSearchParams(window.location.search)
  const found: Record<string, string> = {}

  for (const key of UTM_KEYS) {
    const value = params.get(key)
    if (value) found[key] = value
  }

  if (Object.keys(found).length > 0) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(found))
  }
}

captureUtmParams()

export function withUtmParams(url: string): string {
  if (typeof window === 'undefined') return url

  const stored = sessionStorage.getItem(STORAGE_KEY)
  if (!stored) return url

  try {
    const params: Record<string, string> = JSON.parse(stored)
    const target = new URL(url)
    for (const [key, value] of Object.entries(params)) {
      target.searchParams.set(key, value)
    }
    return target.toString()
  } catch {
    return url
  }
}
