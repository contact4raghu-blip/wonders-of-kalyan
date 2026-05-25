// audio.js - Web Audio API Procedural Chiptune Synthesizer
// Self-contained sound engine that generates sound effects and background music on-the-fly.

class StoryAudioEngine {
  constructor() {
    this.ctx = null;
    this.musicInterval = null;
    this.isPlayingMusic = false;
    this.muted = false;
    this.gainNode = null;
    this.bgMusicVolume = 0.05; // Soft background level
    this.sfxVolume = 0.15;      // SFX level
  }

  init() {
    if (this.ctx) return;
    // Create audio context on user interaction
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.ctx = new AudioContext();
    this.gainNode = this.ctx.createGain();
    this.gainNode.gain.setValueAtTime(1.0, this.ctx.currentTime);
    this.gainNode.connect(this.ctx.destination);
  }

  // Sweet ascending retro "Ding!" sound
  playCorrect() {
    this.init();
    if (this.muted) return;
    this.ctx.resume();

    const now = this.ctx.currentTime;
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc1.type = 'triangle';
    osc2.type = 'sine';

    // C5 (523.25Hz) to G5 (783.99Hz)
    osc1.frequency.setValueAtTime(523.25, now);
    osc1.frequency.exponentialRampToValueAtTime(783.99, now + 0.15);

    osc2.frequency.setValueAtTime(1046.50, now); // C6 harmonics
    osc2.frequency.exponentialRampToValueAtTime(1567.98, now + 0.15);

    gain.gain.setValueAtTime(this.sfxVolume, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.gainNode);

    osc1.start(now);
    osc2.start(now);

    osc1.stop(now + 0.3);
    osc2.stop(now + 0.3);
  }

  // Gentle, organic procedural "Page Flip" sound (soft paper rustle)
  playPageFlip() {
    this.init();
    if (this.muted) return;
    this.ctx.resume();

    const now = this.ctx.currentTime;
    const bufferSize = this.ctx.sampleRate * 0.15; // 0.15 seconds of noise
    const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const data = buffer.getChannelData(0);

    // Fill buffer with random noise
    for (let i = 0; i < bufferSize; i++) {
      data[i] = Math.random() * 2 - 1;
    }

    const noise = this.ctx.createBufferSource();
    noise.buffer = buffer;

    // Apply a bandpass filter to capture exact mid-range paper-rustling frequencies
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(600, now);
    filter.frequency.exponentialRampToValueAtTime(320, now + 0.12);
    filter.Q.setValueAtTime(2.5, now);

    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(this.sfxVolume * 0.35, now); // Very gentle and soft
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(this.gainNode);

    noise.start(now);
    noise.stop(now + 0.15);
  }

  // Low descending retro "Buzz" sound
  playIncorrect() {
    this.init();
    if (this.muted) return;
    this.ctx.resume();

    const now = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';

    // F3 (174.61Hz) to C3 (130.81Hz)
    osc.frequency.setValueAtTime(174.61, now);
    osc.frequency.linearRampToValueAtTime(100.0, now + 0.2);

    gain.gain.setValueAtTime(this.sfxVolume * 0.7, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);

    // Apply a lowpass filter to make it sound muddy and soft, not harsh
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(400, now);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.gainNode);

    osc.start(now);
    osc.stop(now + 0.25);
  }

  // Happy completion fanfare arpeggio
  playFanfare() {
    this.init();
    if (this.muted) return;
    this.ctx.resume();

    const now = this.ctx.currentTime;
    const notes = [261.63, 329.63, 392.00, 523.25, 659.25, 783.99, 1046.50]; // C major arpeggio
    
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const oscType = idx % 2 === 0 ? 'triangle' : 'sine';
      
      osc.type = oscType;
      osc.frequency.setValueAtTime(freq, now + idx * 0.08);
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(this.sfxVolume * 0.6, now + idx * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.08 + 0.4);
      
      osc.connect(gain);
      gain.connect(this.gainNode);
      
      osc.start(now + idx * 0.08);
      osc.stop(now + idx * 0.08 + 0.4);
    });
  }

  // Procedural background arpeggiated lullaby/drone
  startBackgroundMusic() {
    this.init();
    if (this.isPlayingMusic) return;
    this.isPlayingMusic = true;
    this.ctx.resume();

    // Pentatonic scale in F Major (soft, dreamy, Indian classical vibes)
    // F3 (174.61), G3 (196.00), A3 (220.00), C4 (261.63), D4 (293.66), F4 (349.23), G4 (392.00)
    const scale = [174.61, 196.00, 220.00, 261.63, 293.66, 349.23, 392.00];
    let noteIndex = 0;
    
    const playNextNote = () => {
      if (this.muted || !this.isPlayingMusic) return;
      
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = 'sine';
      
      // Gentle arpeggiating pattern
      const baseFreq = scale[noteIndex % scale.length];
      osc.frequency.setValueAtTime(baseFreq, now);
      
      // Add very subtle vibrato (LFO)
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.value = 3.5; // Hz
      lfoGain.gain.value = 2;    // Detune amount
      
      lfo.connect(lfoGain);
      lfoGain.connect(osc.detune);
      
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(this.bgMusicVolume, now + 0.4);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 1.8);
      
      osc.connect(gain);
      gain.connect(this.gainNode);
      
      lfo.start(now);
      osc.start(now);
      
      lfo.stop(now + 1.8);
      osc.stop(now + 1.8);
      
      // Progressive index steps for peaceful ambient structure
      const steps = [1, 2, -1, 3, -2, 1];
      noteIndex = (noteIndex + steps[Math.floor(Math.random() * steps.length)] + scale.length) % scale.length;
    };

    // Trigger a note every 1.2 seconds for a slow, calming tempo
    this.musicInterval = setInterval(playNextNote, 1200);
  }

  stopBackgroundMusic() {
    this.isPlayingMusic = false;
    if (this.musicInterval) {
      clearInterval(this.musicInterval);
      this.musicInterval = null;
    }
  }

  setMute(isMuted) {
    this.muted = isMuted;
    if (isMuted) {
      this.stopBackgroundMusic();
    } else {
      this.startBackgroundMusic();
    }
  }
}

// Global audio engine singleton
const audio = new StoryAudioEngine();
window.storyAudio = audio;
