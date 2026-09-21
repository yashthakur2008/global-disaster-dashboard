import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const hazards = [
  { type: 'EQ', label: 'Earthquakes', count: 47, trend: '+8 today', severity: 'watch' },
  { type: 'FL', label: 'Floods', count: 21, trend: 'monsoon corridors', severity: 'elevated' },
  { type: 'TC', label: 'Cyclones', count: 4, trend: '2 strengthening', severity: 'elevated' },
  { type: 'WF', label: 'Wildfires', count: 128, trend: 'hotspots active', severity: 'watch' },
];

const feed = [
  ['GDACS', 'Flood alert', 'Thailand', 'Updated 12m ago', 'green'],
  ['USGS', 'M6.4 earthquake', 'Papua New Guinea', 'Updated 18m ago', 'orange'],
  ['GDACS', 'Tropical cyclone watch', 'East Pacific', 'Updated 25m ago', 'green'],
  ['FIRMS', 'Active fire cluster', 'Northern Australia', 'Updated 41m ago', 'red'],
];

function App() {
  return (
    <main className="app-shell">
      <aside className="layer-rail" aria-label="Data layers">
        <div className="brand">
          <span className="brand-mark">◎</span>
          <div>
            <strong>GLOBAL DISASTER</strong>
            <small>AWARENESS</small>
          </div>
        </div>
        {['Global Hazards', 'Weather', 'Earthquakes', 'Wildfires', 'Cyclones', 'Floods', 'Official Alerts'].map((layer, index) => (
          <button className={index === 0 ? 'layer active' : 'layer'} key={layer}>
            <span>{index === 0 ? '●' : '○'}</span>
            {layer}
          </button>
        ))}
      </aside>

      <section className="mission-control">
        <header className="top-bar">
          <div>
            <p className="eyebrow">Open project prototype</p>
            <h1>No place left behind.</h1>
          </div>
          <div className="status-pill">
            <span className="pulse" /> Live public-data mode
          </div>
        </header>

        <section className="hero-grid">
          <div className="globe-card" aria-label="Global map preview">
            <div className="orbital-ring ring-a" />
            <div className="orbital-ring ring-b" />
            <div className="globe">
              <span className="hotspot h1" />
              <span className="hotspot h2" />
              <span className="hotspot h3" />
              <span className="hotspot h4" />
            </div>
            <div className="map-caption">
              <strong>Global hazard picture</strong>
              <span>GDACS, USGS, FIRMS, weather feeds next</span>
            </div>
          </div>

          <div className="briefing-card">
            <p className="eyebrow">Awareness only</p>
            <h2>Signals, not evacuation orders.</h2>
            <p>
              This dashboard will surface official-source events with timestamp, source, severity, confidence, and links back to emergency authorities.
            </p>
            <div className="metrics">
              <span><strong>200</strong> GDACS events</span>
              <span><strong>4</strong> hazard families</span>
              <span><strong>0</strong> paywalled APIs</span>
            </div>
          </div>
        </section>

        <section className="hazard-strip" aria-label="Hazard summaries">
          {hazards.map((hazard) => (
            <article className={`hazard-card ${hazard.severity}`} key={hazard.type}>
              <span className="hazard-code">{hazard.type}</span>
              <h3>{hazard.label}</h3>
              <strong>{hazard.count}</strong>
              <p>{hazard.trend}</p>
            </article>
          ))}
        </section>
      </section>

      <aside className="intel-panel" aria-label="Live hazard feed">
        <div className="panel-header">
          <p className="eyebrow">Live feed</p>
          <strong>Latest signals</strong>
        </div>
        {feed.map(([source, title, place, time, level]) => (
          <article className="feed-item" key={`${source}-${title}-${place}`}>
            <span className={`level ${level}`} />
            <div>
              <strong>{title}</strong>
              <p>{place}</p>
              <small>{source} · {time}</small>
            </div>
          </article>
        ))}
        <footer>
          Follow official emergency services for protective action.
        </footer>
      </aside>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
