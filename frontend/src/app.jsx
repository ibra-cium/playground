import { useState, useEffect } from 'preact/hooks'

export function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data))
      .catch(err => console.error("Backend ghosting:", err))
  }, [])

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      flexDirection: 'column',
      fontFamily: 'sans-serif',
      background: '#1a1a1a',
      color: '#fff'
    }}>
      <h1>Terminal Vibes</h1>
      {data ? (
        <p style={{ fontSize: '1.5rem', color: '#61dafb' }}>
          Backend says: <span style={{ fontWeight: 'bold' }}>{data.name}</span>, Age: <span style={{ fontWeight: 'bold' }}>{data.age}</span>
        </p>
      ) : (
        <p>Waiting for the signal...</p>
      )}
    </div>
  )
}
