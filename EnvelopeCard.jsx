import React, { useState } from 'react';
import './EnvelopeCard.css';

const EnvelopeCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to play a cute sound effect using Web Audio API
  const playFunnySound = () => {
    const audioContext = new (window.AudioContext || window.webkitAudioContext)();
    const now = audioContext.currentTime;

    // Create oscillators for a cute "pop" sound
    const osc1 = audioContext.createOscillator();
    const osc2 = audioContext.createOscillator();
    const gain = audioContext.createGain();

    // Set up the oscillators
    osc1.type = 'sine';
    osc2.type = 'triangle';
    osc1.frequency.setValueAtTime(800, now);
    osc1.frequency.exponentialRampToValueAtTime(400, now + 0.1);
    osc2.frequency.setValueAtTime(1200, now);
    osc2.frequency.exponentialRampToValueAtTime(600, now + 0.1);

    // Set up gain for fade out
    gain.gain.setValueAtTime(0.3, now);
    gain.gain.exponentialRampToValueAtTime(0.01, now + 0.15);

    // Connect and start
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(audioContext.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.15);
    osc2.stop(now + 0.15);
  };

  const handleOpenEnvelope = () => {
    playFunnySound();
    setIsOpen(true);
  };

  return (
    <div className="container">
      {/* Floating hearts */}
      <div className="floating-heart heart1">💖</div>
      <div className="floating-heart heart2">💕</div>
      <div className="floating-heart heart3">💗</div>
      <div className="floating-heart heart4">💓</div>
      <div className="floating-heart heart5">💖</div>

      {/* Envelope */}
      {!isOpen && (
        <div className="envelope">
          {/* Cute Envelope SVG */}
          <svg className="envelope-svg" viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
            {/* Envelope body */}
            <rect x="20" y="50" width="260" height="120" fill="#ffb6c1" stroke="#ff99b2" strokeWidth="2" rx="8" />

            {/* Envelope flap (top) */}
            <path d="M 20 50 L 150 120 L 280 50" fill="none" stroke="#ff99b2" strokeWidth="2" />

            {/* Left eye */}
            <circle cx="100" cy="85" r="5" fill="#333" />
            <circle cx="102" cy="83" r="2" fill="#fff" />

            {/* Right eye */}
            <circle cx="200" cy="85" r="5" fill="#333" />
            <circle cx="202" cy="83" r="2" fill="#fff" />

            {/* Cute mouth (smile) */}
            <path d="M 140 105 Q 150 115 160 105" stroke="#ff5577" strokeWidth="2" fill="none" strokeLinecap="round" />

            {/* Blush left */}
            <circle cx="75" cy="100" r="8" fill="#ff99b2" opacity="0.6" />

            {/* Blush right */}
            <circle cx="225" cy="100" r="8" fill="#ff99b2" opacity="0.6" />

            {/* Sparkles */}
            <text x="30" y="70" fontSize="16" opacity="0.7">✨</text>
            <text x="260" y="70" fontSize="16" opacity="0.7">✨</text>

            {/* Paper inside (peeking) */}
            <rect x="40" y="130" width="220" height="30" fill="#fff9f0" rx="4" />
          </svg>

          <div className="click-to-open" onClick={handleOpenEnvelope}>
            Klik untuk Membuka Pesan 💌
          </div>
        </div>
      )}

      {/* Message Card */}
      {isOpen && (
        <div className="card">
          <h1 className="title">Apa Kamu Baik-Baik Saja?</h1>
          <p className="paragraph">
            Aku cuma ingin tahu kabarmu… bukan untuk mengganggu, hanya benar-benar berharap kamu baik di sana.
          </p>
          <p className="paragraph">
            Aku minta maaf kalau keputusan dan sikapku kemarin membuatmu sedih atau kecewa. Aku nggak mau membenarkan
            apa pun—aku hanya mengakui bahwa aku banyak salah.
          </p>
          <p className="paragraph">
            Kalau kamu berkenan, kabari aku bagaimana kamu sekarang. Setelah itu, terserah kamu mau lanjut jawab atau
            tidak. Yang penting kamu tahu, aku tetap berharap yang terbaik untukmu.
          </p>
          <p className="signature">— Arjuansyah</p>
        </div>
      )}
    </div>
  );
};

export default EnvelopeCard;
