import Image from 'next/image';

const facts = [
  { label: 'Capital', value: 'Kathmandu' },
  { label: 'Highest Peak', value: 'Mount Everest (8,848.86 m)' },
  { label: 'UNESCO World Heritage Sites', value: '10' },
  { label: 'Best Travel Seasons', value: 'Mar–May & Sep–Nov' }
];

const destinations = [
  {
    title: 'Kathmandu Valley',
    description:
      'Historic Durbar Squares, sacred stupas, and vibrant local life. Perfect for culture, architecture, and cuisine.'
  },
  {
    title: 'Pokhara',
    description:
      'Lakeside serenity with mountain panoramas, paragliding adventures, and access to Annapurna trekking routes.'
  },
  {
    title: 'Chitwan National Park',
    description:
      'One of Asia’s finest wildlife experiences—safari through jungle landscapes with rhinos, birds, and river life.'
  },
  {
    title: 'Everest Region',
    description:
      'Legendary Himalayan trails, Sherpa culture, and awe-inspiring views for trekkers and dreamers alike.'
  }
];

const itinerary = [
  'Day 1–2: Kathmandu heritage walk + temple circuit + local street food tour.',
  'Day 3–5: Fly/drive to Pokhara, sunrise at Sarangkot, boating on Phewa Lake, optional paragliding.',
  'Day 6–7: Journey to Chitwan for jungle safari, canoe ride, and Tharu cultural evening.',
  'Day 8–10: Return to Kathmandu for artisan markets, museums, and a scenic mountain flight option.'
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay" />
        <Image
          src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=1800&q=80"
          alt="Himalayan mountain range in Nepal"
          fill
          priority
          className="hero-image"
        />
        <div className="hero-content">
          <p className="eyebrow">नेपाल • Nepal • The Roof of Adventure</p>
          <h1>Discover Nepal in a New Light</h1>
          <p>
            From the world&apos;s highest mountains to living heritage cities, Nepal is where nature,
            spirituality, and adventure meet in unforgettable harmony.
          </p>
          <a href="#plan" className="cta">
            Plan Your Journey
          </a>
        </div>
      </section>

      <section className="facts wrapper">
        {facts.map((fact) => (
          <article key={fact.label}>
            <h3>{fact.label}</h3>
            <p>{fact.value}</p>
          </article>
        ))}
      </section>

      <section className="wrapper section">
        <h2>Why Nepal Captivates the World</h2>
        <p>
          Nepal is not just a destination—it is an experience of altitude and attitude. Trek beneath
          snow-capped giants, meditate in ancient monasteries, and connect with warm communities rich
          in tradition.
        </p>
      </section>

      <section className="wrapper section grid">
        {destinations.map((place, index) => (
          <article key={place.title} className="card">
            <Image
              src={`https://images.unsplash.com/photo-${[
                '1506462945848-58e464a1e9b7',
                '1605640840605-14ac1855827b',
                '1625246333195-eec1df4f6d8f',
                '1544737151-6e4b26f4b8ea'
              ][index]}?auto=format&fit=crop&w=1000&q=80`}
              alt={place.title}
              width={720}
              height={420}
            />
            <div>
              <h3>{place.title}</h3>
              <p>{place.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section id="plan" className="wrapper section itinerary">
        <h2>10-Day Signature Nepal Itinerary</h2>
        <ol>
          {itinerary.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="wrapper section highlight">
        <h2>Travel Essentials</h2>
        <ul>
          <li>Visa on arrival available for many nationalities at Tribhuvan International Airport.</li>
          <li>Currency: Nepalese Rupee (NPR).</li>
          <li>Ideal for trekkers, spiritual travelers, digital nomads, and cultural explorers.</li>
          <li>Respect local customs: dress modestly at religious sites and ask before photographing people.</li>
        </ul>
      </section>

      <footer className="wrapper footer">
        <p>Come for the mountains. Stay for the soul. Nepal is ready to welcome you.</p>
      </footer>
    </main>
  );
}
