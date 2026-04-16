import { useEffect, useMemo, useState } from 'react'
import Pusher from 'pusher-js'
import './VisitorAlerts.css'

const MAX_ALERTS = 5

const VisitorAlerts = () => {
  const [alerts, setAlerts] = useState([])
  const [connectionState, setConnectionState] = useState('disconnected')

  const pusherConfig = useMemo(
    () => ({
      key: import.meta.env.VITE_PUSHER_KEY,
      cluster: import.meta.env.VITE_PUSHER_CLUSTER,
      channel: import.meta.env.VITE_PUSHER_CHANNEL || 'visitor-alerts',
      event: import.meta.env.VITE_PUSHER_EVENT || 'new-visitor'
    }),
    []
  )

  const isConfigured = Boolean(pusherConfig.key && pusherConfig.cluster)

  useEffect(() => {
    if (!isConfigured) {
      return undefined
    }

    const pusher = new Pusher(pusherConfig.key, {
      cluster: pusherConfig.cluster
    })

    const channel = pusher.subscribe(pusherConfig.channel)

    const handleVisitorEvent = (payload = {}) => {
      const nextAlert = {
        id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
        location: payload.location || payload.country || 'Unknown location',
        page: payload.page || '/',
        at: new Date().toLocaleTimeString()
      }

      setAlerts((current) => [nextAlert, ...current].slice(0, MAX_ALERTS))
    }

    channel.bind(pusherConfig.event, handleVisitorEvent)

    pusher.connection.bind('state_change', ({ current }) => {
      setConnectionState(current)
    })

    return () => {
      channel.unbind(pusherConfig.event, handleVisitorEvent)
      pusher.unsubscribe(pusherConfig.channel)
      pusher.disconnect()
    }
  }, [isConfigured, pusherConfig])

  if (!isConfigured) {
    return (
      <aside className="visitor-alerts visitor-alerts--inactive" aria-live="polite">
        <h3>Visitor Alerts</h3>
        <p>Set Pusher keys in your `.env` file to enable real-time visitor alerts.</p>
      </aside>
    )
  }

  return (
    <aside className="visitor-alerts" aria-live="polite">
      <div className="visitor-alerts__header">
        <h3>Visitor Alerts</h3>
        <span className={`visitor-alerts__status visitor-alerts__status--${connectionState}`}>
          {connectionState}
        </span>
      </div>

      {alerts.length === 0 ? (
        <p className="visitor-alerts__empty">Waiting for new visitors...</p>
      ) : (
        <ul className="visitor-alerts__list">
          {alerts.map((alert) => (
            <li key={alert.id} className="visitor-alerts__item">
              <strong>New visitor</strong> from {alert.location}
              <span>
                Page: {alert.page} at {alert.at}
              </span>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}

export default VisitorAlerts
