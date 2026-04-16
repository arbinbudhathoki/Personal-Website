import { useEffect } from 'react'

const SESSION_KEY = 'visitor-email-alert-sent'
const LAST_SENT_KEY = 'visitor-email-alert-last-sent'

const VisitorEmailNotifier = () => {
  useEffect(() => {
    const webhookUrl = import.meta.env.VITE_VISITOR_ALERT_WEBHOOK_URL
    if (!webhookUrl) {
      return
    }

    const alreadySentThisSession = sessionStorage.getItem(SESSION_KEY) === 'true'
    if (alreadySentThisSession) {
      return
    }

    const cooldownMinutes = Number(import.meta.env.VITE_VISITOR_ALERT_COOLDOWN_MINUTES || 60)
    const lastSent = Number(localStorage.getItem(LAST_SENT_KEY) || 0)
    const now = Date.now()
    const cooldownMs = Math.max(0, cooldownMinutes) * 60 * 1000

    if (now - lastSent < cooldownMs) {
      return
    }

    const payload = {
      event: 'website_view',
      message: 'Someone viewed your website.',
      page: window.location.pathname,
      fullUrl: window.location.href,
      referrer: document.referrer || 'direct',
      userAgent: navigator.userAgent,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'unknown',
      viewedAt: new Date().toISOString()
    }

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Webhook failed with status ${response.status}`)
        }

        sessionStorage.setItem(SESSION_KEY, 'true')
        localStorage.setItem(LAST_SENT_KEY, String(now))
      })
      .catch((error) => {
        // Keep this silent for visitors; useful for local debugging.
        console.error('Visitor email alert failed:', error)
      })
  }, [])

  return null
}

export default VisitorEmailNotifier
