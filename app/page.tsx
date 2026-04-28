import Image from 'next/image';

const facts = [
  { label: 'Capital', value: 'Kathmandu' },
  { label: 'Population', value: '30M+' },
  { label: 'Highest Peak', value: 'Mount Everest (8,848.86 m)' },
  { label: 'UNESCO World Heritage Sites', value: '10' },
  { label: 'National Parks', value: '12' },
  { label: 'Best Travel Seasons', value: 'Mar–May & Sep–Nov' }
];

const destinations = [
  {
    title: 'Kathmandu Valley',
    province: 'Bagmati',
    bestFor: 'Heritage & architecture',
    description: 'Durbar squares, sacred stupas, artisan lanes, rooftop cafes, and living museum neighborhoods.',
    image:
      '/images/kathmandu.svg'
  },
  {
    title: 'Pokhara',
    province: 'Gandaki',
    bestFor: 'Lake life & adventure sports',
    description: 'Mirror-like lakes, Annapurna panoramas, sunrise points, paragliding, zipline, and cafe culture.',
    image:
      '/images/pokhara.svg'
  },
  {
    title: 'Chitwan National Park',
    province: 'Bagmati',
    bestFor: 'Wildlife safari',
    description: 'Jungle safaris with one-horned rhinos, crocodiles, canoe rides, and rich birdlife.',
    image:
      '/images/chitwan.svg'
  },
  {
    title: 'Everest Region (Khumbu)',
    province: 'Koshi',
    bestFor: 'Epic trekking',
    description: 'Legendary trails, Sherpa villages, monasteries, and front-row seats to Himalayan giants.',
    image:
      '/images/everest.svg'
  },
  {
    title: 'Lumbini',
    province: 'Lumbini',
    bestFor: 'Spiritual travel',
    description: 'Birthplace of Buddha with peaceful monasteries, gardens, and sacred pilgrimage routes.',
    image:
      '/images/lumbini.svg'
  },
  {
    title: 'Mustang',
    province: 'Gandaki',
    bestFor: 'Desert mountains & culture',
    description: 'Ancient cave settlements, dramatic high-altitude landscapes, and Tibetan-influenced heritage.',
    image:
      '/images/mustang.svg'
  },
  {
    title: 'Rara Lake',
    province: 'Karnali',
    bestFor: 'Remote alpine escape',
    description: 'Crystal-clear blue lake surrounded by forests and snow peaks—ideal for quiet nature retreats.',
    image:
      '/images/rara.svg'
  },
  {
    title: 'Ilam Tea Gardens',
    province: 'Koshi',
    bestFor: 'Scenic slow travel',
    description: 'Rolling green tea estates, misty hills, local homestays, and calm panoramic viewpoints.',
    image:
      '/images/ilam.svg'
  }
];

const itinerary = [
  'Day 1: Arrive in Kathmandu, sunset at Boudhanath, curated Nepali dinner experience.',
  'Day 2: Kathmandu heritage circuit (Patan, Swayambhunath, Basantapur), live cultural performance.',
  'Day 3: Scenic transfer to Pokhara, lakeside evening walk and mountain-view dining.',
  'Day 4: Sarangkot sunrise, paragliding/zipline, Davis Falls and cave exploration.',
  'Day 5: Flight to Chitwan, jeep safari + river canoe + Tharu village storytelling.',
  'Day 6: Birdwatching dawn walk, transfer back to Kathmandu with local market stops.',
  'Day 7: Mountain flight for Everest views (optional), handcrafted souvenir trail.',
  'Day 8: Excursion to Bhaktapur, pottery workshops, Newari cuisine masterclass.',
  'Day 9: Wellness day—yoga, sound healing, and rooftop Himalayan sunset.',
  'Day 10: Departure with optional extension to Lumbini / Mustang / Annapurna trek.'
];

const povFootage = [
  {
    title: 'POV Trek to Everest Base Camp',
    description: 'High-altitude trail visuals through Namche, Tengboche, and glacier valleys.',
    embed: 'https://www.youtube.com/embed/E8M4L5aWJ2A'
  },
  {
    title: 'POV Paragliding Over Pokhara',
    description: 'Aerial perspective above Phewa Lake with Annapurna range in the background.',
    embed: 'https://www.youtube.com/embed/1x6Qh2d8W58'
  },
  {
    title: 'POV Jungle Safari in Chitwan',
    description: 'River, grasslands, wildlife encounters, and immersive nature soundscape.',
    embed: 'https://www.youtube.com/embed/IGw9l2dQx5A'
  }
];

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-overlay" />
        <Image
          src="/images/hero-nepal.svg"
          alt="Himalayan mountain range in Nepal"
          fill
          priority
          className="hero-image"
        />
        <div className="hero-content">
          <p className="eyebrow">नेपाल • Nepal • Future of Adventure Travel</p>
          <h1>Visit Nepal: Where Earth Touches the Sky</h1>
          <p>
            Explore a country of towering peaks, sacred heritage, wild jungles, and unforgettable hospitality.
            Nepal is built for explorers, creators, and dreamers from every corner of the world.
          </p>
          <a href="#plan" className="cta" aria-label="Jump to the trip planning section">Plan Your Journey</a>
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
        <h2>Nepal in Numbers & Emotions</h2>
        <p>
          One trip can include a Himalayan sunrise, a UNESCO heritage courtyard, a jungle safari, and a spiritual
          retreat—all in a single country. Nepal delivers depth, diversity, and adrenaline with soul.
        </p>
      </section>

      <section className="wrapper section grid">
        {destinations.map((place) => (
          <article key={place.title} className="card">
            <Image
              src={place.image}
              alt={place.title}
              width={900}
              height={560}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div>
              <h3>{place.title}</h3>
              <p className="meta">{place.province} • {place.bestFor}</p>
              <p>{place.description}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="wrapper section video-section">
        <h2>POV Footage: Experience Nepal Before You Land</h2>
        <div className="video-grid">
          {povFootage.map((video) => (
            <article key={video.title} className="video-card">
              <iframe
                src={video.embed}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
              <div>
                <h3>{video.title}</h3>
                <p>{video.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="plan" className="wrapper section itinerary">
        <h2>10-Day Signature Nepal Itinerary</h2>
        <ol>{itinerary.map((item) => <li key={item}>{item}</li>)}</ol>
      </section>

      <section className="wrapper section highlight">
        <h2>Essential Travel Data</h2>
        <ul>
          <li>International Gateway: Tribhuvan International Airport (KTM), Kathmandu.</li>
          <li>Currency: Nepalese Rupee (NPR); digital payments are common in cities.</li>
          <li>Transport Mix: Domestic flights, tourist buses, private jeeps, and guided trekking routes.</li>
          <li>Popular Activities: Trekking, mountain flights, rafting, paragliding, safari, cultural immersion.</li>
          <li>Responsible Tourism: Carry reusable bottles, respect temple etiquette, and support local businesses.</li>
        </ul>
      </section>

      <footer className="wrapper footer">
        <p>From Everest trails to timeless temples—Nepal is not just a trip, it is a life memory. Visit Nepal.</p>
      </footer>
    </main>
  );
}
