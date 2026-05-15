const stage = document.getElementById('stage');
const space = document.getElementById('space');
const network = document.getElementById('network');
const sctx = space.getContext('2d');
const nctx = network.getContext('2d');

const powerButton = document.getElementById('powerButton');
const statusLabel = document.getElementById('statusLabel');
const sleepLabel = document.getElementById('sleepLabel');
const voiceLine = document.getElementById('voiceLine');
const voicePanel = document.getElementById('voicePanel');

const texts = {
  odi: document.getElementById('odiText'),
  supra: document.getElementById('supraText'),
  cps: document.getElementById('cpsText'),
  access: document.getElementById('accessText'),
  madre: document.getElementById('madreText')
};

const footer = {
  orcid: document.getElementById('footerOrcid'),
  zenodo: document.getElementById('footerZenodo'),
  github: document.getElementById('footerGithub')
};

const audios = {
  welcome: document.getElementById('welcomeAudio'),
  odi: document.getElementById('odiAudio'),
  supra: document.getElementById('supraAudio'),
  cps: document.getElementById('cpsAudio'),
  access: document.getElementById('accessAudio'),
  madre: document.getElementById('madreAudio')
};

const bootReady = new URLSearchParams(window.location.search).get('ready') === '1';

const projectMeta = {
  idle: {
    orcid: 'https://orcid.org/0009-0009-9047-1036',
    zenodo: 'https://zenodo.org/',
    github: 'https://github.com/vehiclesystemslab',
    zenodoLabel: 'ZENODO',
    githubLabel: 'GITHUB'
  },
  odi: {
    orcid: 'https://orcid.org/0009-0009-9047-1036',
    zenodo: 'https://doi.org/10.5281/zenodo.20077230',
    github: 'https://github.com/vehiclesystemslab/VEHICLE-ODI',
    zenodoLabel: 'ZENODO / ODI',
    githubLabel: 'GITHUB / ODI'
  },
  supra: {
    orcid: 'https://orcid.org/0009-0009-9047-1036',
    zenodo: 'https://zenodo.org/records/20135217',
    github: 'https://github.com/vehiclesystemslab/VEHICLE-SUPRA',
    zenodoLabel: 'ZENODO / SUPRA',
    githubLabel: 'GITHUB / SUPRA'
  },
  cps: {
    orcid: 'https://orcid.org/0009-0009-9047-1036',
    zenodo: 'https://zenodo.org/records/20046955',
    github: 'https://github.com/vehiclesystemslab/VEHICLE-CPS',
    zenodoLabel: 'ZENODO / CPS',
    githubLabel: 'GITHUB / CPS'
  },
  access: {
    orcid: 'https://orcid.org/0009-0009-9047-1036',
    zenodo: 'https://zenodo.org/records/20092542',
    github: 'https://github.com/vehiclesystemslab/vehicle-ai-access-layer',
    zenodoLabel: 'ZENODO / ACCESS',
    githubLabel: 'GITHUB / ACCESS'
  },
  madre: {
    orcid: 'https://orcid.org/0009-0009-9047-1036',
    zenodo: 'https://zenodo.org/records/20046955',
    github: 'https://github.com/vehiclesystemslab',
    zenodoLabel: 'ZENODO / MADRE',
    githubLabel: 'GITHUB / MADRE'
  }
};

const welcomeLines = [
  [0.2, 'Hello...'],
  [1.8, 'I am MADRE.'],
  [3.8, 'I belong to\nVEHICLE Systems Lab.'],
  [7.4, 'We build future systems\nwith science, responsibility, and passion.'],
  [12.4, 'Knowledge is finite.'],
  [15.2, 'Reasoning is infinite.'],
  [18.2, 'Select a system.']
];

const sceneLines = {
  odi: [
    [0.2, 'ORBITAL DEBRIS\nINTELLIGENCE'],
    [4.3, 'TRACKING RISK\nAROUND EARTH'],
    [8.6, 'STRUCTURE\nBEFORE COLLISION'],
    [13.4, 'SATELLITES, FRAGMENTS\nAND RESPONSIBILITY'],
    [18.5, 'VEHICLE ODI']
  ],
  supra: [
    [0.2, 'VEHICLE SUPRA'],
    [4.2, 'LUNAR SURFACE\nLIVING SYSTEMS'],
    [8.8, 'ROVERS UNDER\nRELATIONAL TENSION'],
    [13.5, 'SCIENCE ABOVE\nTHE NOISE']
  ],
  cps: [
    [0.2, 'COGNITIVE PREDICTIVE\nSYSTEMS'],
    [4.8, 'MODELING FUTURE\nSTATE CHANGES'],
    [9, 'PREVENTION BEFORE\nCOLLAPSE'],
    [14, 'HUMAN SUPERVISION\nALWAYS']
  ],
  access: [
    [0.2, 'AI ACCESS\nLAYER'],
    [4.2, 'VERIFY BEFORE\nANSWERING'],
    [8.8, 'EVIDENCE, INFERENCE\nUNCERTAINTY'],
    [13.6, 'RESPONSE CONTRACT\nFOR AI SYSTEMS']
  ]
};

const staticCopy = {
  odi: 'Orbital Debris Intelligence explores space debris through structural reasoning, responsible science, and a planetary view of orbital risk, stewardship, and signal.',
  supra: 'A structural intelligence framework for future systems. SUPRA opens a higher-order layer for organized reasoning, disciplined architecture, and long-range system design.',
  cps: 'A cognitive and predictive systems layer for complex environments. CPS studies adaptive models, future states, and reasoning under uncertainty with scientific discipline.',
  access: 'A controlled access layer for intelligent systems. It connects interfaces, research, and future modules through a sober public protocol designed to scale with the lab.',
  madre: 'Message from the core intelligence layer.\n\nThe voice transmission has been updated.\n\nMADRE remains in training and consolidation.\n\nUse the downloads below to open the funding brief, technical brief, operational costs, AI reference, status note, and full package.'
};

let width = 0;
let height = 0;
let dpr = 1;
let stars = [];
let nodes = [];
let links = [];
let travellers = [];
let animationFrame = 0;
let timer = null;
let currentState = 'sleeping';
let currentProject = null;
let introFinished = false;
let audioUnlocked = false;
let lastTime = 0;
const center = { x: 0, y: 0 };

function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 1.6);
  width = window.innerWidth;
  height = window.innerHeight;
  center.x = width * 0.5;
  center.y = height * 0.47;

  [space, network].forEach((canvas) => {
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
  });
  sctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  nctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  seedSpace();
  seedNetwork();
}

function seedSpace() {
  stars = Array.from({ length: 240 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    r: 0.25 + Math.random() * 1.6,
    a: 0.08 + Math.random() * 0.52,
    p: Math.random() * Math.PI * 2,
    s: 0.02 + Math.random() * 0.08
  }));
}

function seedNetwork() {
  nodes = [];
  links = [];
  travellers = [];
  const count = Math.max(110, Math.min(220, Math.floor(width / 7.4)));
  const maxR = Math.max(width, height) * 0.58;

  for (let i = 0; i < count; i += 1) {
    const angle = Math.random() * Math.PI * 2;
    const radius = Math.pow(Math.random(), 0.58) * maxR;
    nodes.push({
      x: center.x + Math.cos(angle) * radius * (0.84 + Math.random() * 0.22),
      y: center.y + Math.sin(angle) * radius * (0.36 + Math.random() * 0.42),
      r: 0.4 + Math.random() * 2.4,
      p: Math.random() * 10,
      s: 0.004 + Math.random() * 0.02
    });
  }

  const maxDistance = Math.min(166, Math.max(118, width * 0.12));
  for (let i = 0; i < nodes.length; i += 1) {
    const near = [];
    for (let j = 0; j < nodes.length; j += 1) {
      if (i === j) continue;
      const distance = Math.hypot(nodes[i].x - nodes[j].x, nodes[i].y - nodes[j].y);
      if (distance < maxDistance) near.push({ j, d: distance });
    }
    near.sort((a, b) => a.d - b.d);
    near.slice(0, Math.random() > 0.72 ? 2 : 1).forEach(({ j }) => {
      if (i < j) {
        links.push({ a: i, b: j, p: Math.random() * 10, s: 0.008 + Math.random() * 0.018, c: 0.6 + Math.random() * 1.2 });
      }
    });
  }

  for (let i = 0; i < 60; i += 1) {
    travellers.push({
      l: Math.floor(Math.random() * Math.max(links.length, 1)),
      p: Math.random(),
      s: 0.002 + Math.random() * 0.009,
      z: 0.8 + Math.random() * 1.8
    });
  }
}

function drawSpace(time) {
  sctx.clearRect(0, 0, width, height);

  const g = sctx.createRadialGradient(center.x, center.y, 0, center.x, center.y, Math.max(width, height) * 0.78);
  g.addColorStop(0, 'rgba(28, 112, 200, 0.16)');
  g.addColorStop(0.22, 'rgba(4, 15, 32, 0.88)');
  g.addColorStop(0.68, 'rgba(0, 2, 9, 0.98)');
  g.addColorStop(1, '#000');
  sctx.fillStyle = g;
  sctx.fillRect(0, 0, width, height);

  const nebula = sctx.createRadialGradient(center.x + width * 0.06, center.y - height * 0.05, 0, center.x, center.y, width * 0.62);
  nebula.addColorStop(0, 'rgba(196, 250, 255, 0.08)');
  nebula.addColorStop(0.38, 'rgba(40, 126, 255, 0.06)');
  nebula.addColorStop(1, 'rgba(0,0,0,0)');
  sctx.fillStyle = nebula;
  sctx.fillRect(0, 0, width, height);

  stars.forEach((star) => {
    star.x += Math.cos(star.p) * star.s;
    star.y += Math.sin(star.p * 1.7) * star.s;
    if (star.x < -6) star.x = width + 6;
    if (star.x > width + 6) star.x = -6;
    if (star.y < -6) star.y = height + 6;
    if (star.y > height + 6) star.y = -6;
    const twinkle = 0.4 + 0.6 * Math.sin(time * 0.001 + star.p);
    sctx.beginPath();
    sctx.fillStyle = `rgba(235,252,255,${star.a * twinkle})`;
    sctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
    sctx.fill();
  });
}

function liveNodes(time) {
  return nodes.map((node) => {
    const distance = Math.hypot(node.x - center.x, node.y - center.y);
    const near = 1 - Math.min(1, distance / (Math.max(width, height) * 0.58));
    const angle = Math.atan2(node.y - center.y, node.x - center.x);
    const bob = Math.sin(time * node.s + node.p) * (3.2 + near * 7.4);
    return {
      ...node,
      near,
      x: node.x + Math.cos(angle) * bob,
      y: node.y + Math.sin(angle) * bob
    };
  });
}

function filament(a, b, alpha, time, widthLine = 0.42) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy) || 1;
  const steps = Math.max(5, Math.floor(len / 24));
  const nx = -dy / len;
  const ny = dx / len;

  nctx.beginPath();
  for (let i = 0; i <= steps; i += 1) {
    const u = i / steps;
    const jitter = (Math.sin(u * Math.PI * 6 + time * 0.015 + a.p) * 2.2 + Math.sin(u * Math.PI * 16 + time * 0.011 + b.p) * 1.1) * alpha;
    const x = a.x + dx * u + nx * jitter;
    const y = a.y + dy * u + ny * jitter;
    if (i) nctx.lineTo(x, y); else nctx.moveTo(x, y);
  }

  const midX = (a.x + b.x) / 2;
  const midY = (a.y + b.y) / 2;
  const near = 1 - Math.min(1, Math.hypot(midX - center.x, midY - center.y) / (Math.max(width, height) * 0.56));
  nctx.strokeStyle = `rgba(${near > 0.5 ? 246 : 128}, ${near > 0.5 ? 254 : 220}, 255, ${alpha})`;
  nctx.lineWidth = widthLine + near * 0.9;
  nctx.shadowBlur = 14 + near * 18;
  nctx.shadowColor = 'rgba(164, 243, 255, 0.98)';
  nctx.stroke();
  nctx.shadowBlur = 0;
}

function drawNetwork(time) {
  nctx.clearRect(0, 0, width, height);
  if (currentState === 'sleeping') return;

  const currentNodes = liveNodes(time);

  links.forEach((link) => {
    const a = currentNodes[link.a];
    const b = currentNodes[link.b];
    const near = Math.max(a.near, b.near);
    const pulse = 0.5 + 0.5 * Math.sin(time * link.s + link.p);
    const alpha = (0.04 + near * 0.48) * pulse * link.c;
    if (alpha > 0.018) filament(a, b, Math.min(0.84, alpha), time);
  });

  currentNodes.forEach((node, index) => {
    const distance = Math.hypot(node.x - center.x, node.y - center.y);
    if (distance < Math.max(width, height) * 0.34 && index % 2 === 0) {
      filament({ x: center.x, y: center.y, p: node.p }, { x: node.x, y: node.y, p: node.p + 2 }, 0.12 * (1 - distance / (Math.max(width, height) * 0.34)), time, 0.28);
    }
    const pulse = 0.52 + 0.48 * Math.sin(time * node.s + node.p);
    nctx.beginPath();
    nctx.fillStyle = `rgba(240, 254, 255, ${(0.08 + node.near * 0.54) * pulse})`;
    nctx.shadowBlur = 8 + node.near * 18;
    nctx.shadowColor = 'rgba(190,250,255,0.98)';
    nctx.arc(node.x, node.y, node.r * (0.76 + pulse * 0.52), 0, Math.PI * 2);
    nctx.fill();
    nctx.shadowBlur = 0;
  });

  travellers.forEach((traveller) => {
    const link = links[traveller.l];
    if (!link) return;
    traveller.p = (traveller.p + traveller.s) % 1;
    const a = currentNodes[link.a];
    const b = currentNodes[link.b];
    const x = a.x + (b.x - a.x) * traveller.p;
    const y = a.y + (b.y - a.y) * traveller.p;
    const near = Math.max(a.near, b.near);
    nctx.beginPath();
    nctx.fillStyle = `rgba(255,255,255,${0.24 + near * 0.52})`;
    nctx.shadowBlur = 12 + near * 14;
    nctx.shadowColor = 'rgba(215,254,255,1)';
    nctx.arc(x, y, traveller.z * (1 + near), 0, Math.PI * 2);
    nctx.fill();
    nctx.shadowBlur = 0;
  });
}

function loop(time = 0) {
  animationFrame = requestAnimationFrame(loop);
  if (time - lastTime < 16) return;
  lastTime = time;
  drawSpace(time);
  drawNetwork(time);
}

function stopAllAudio() {
  clearInterval(timer);
  Object.values(audios).forEach((audio) => {
    audio.pause();
    audio.currentTime = 0;
  });
}

function setFooter(kind = 'idle') {
  const meta = projectMeta[kind] || projectMeta.idle;
  footer.orcid.href = meta.orcid;
  footer.zenodo.href = meta.zenodo;
  footer.github.href = meta.github;
  footer.zenodo.textContent = meta.zenodoLabel;
  footer.github.textContent = meta.githubLabel;
}

function renderVoice(text) {
  voiceLine.innerHTML = '';
  voiceLine.classList.remove('show');
  if (!text) {
    voicePanel?.classList.remove('is-visible');
    return;
  }
  voicePanel?.classList.add('is-visible');
  voiceLine.innerHTML = text
    .split(/(\s+)/)
    .map((part, index) => {
      if (!part.trim()) return part === '\n' ? '<br>' : part;
      return `<span class="word" style="animation-delay:${index * 0.04}s">${part}</span>`;
    })
    .join('');
  voiceLine.classList.add('show');
}

function renderText(el, text) {
  if (!el) return;
  el.textContent = text || '';
  el.classList.remove('show');
  if (text) requestAnimationFrame(() => el.classList.add('show'));
}

function syncLines(audio, lines, callback, delay = 120) {
  clearInterval(timer);
  let active = -1;
  timer = setInterval(() => {
    let next = -1;
    lines.forEach((line, index) => {
      if (audio.currentTime >= line[0]) next = index;
    });
    if (next !== active) {
      active = next;
      callback(active >= 0 ? lines[active][1] : '');
    }
  }, delay);
}


let breathCtx = null;
let breathGain = null;
let breathFilter = null;
let breathSource = null;
let breathTimer = null;

function startMadreBreathAudio() {
  try {
    if (breathCtx && breathCtx.state === 'suspended') {
      breathCtx.resume();
    }
    if (breathSource) return;

    breathCtx = new (window.AudioContext || window.webkitAudioContext)();

    const sampleRate = breathCtx.sampleRate;
    const seconds = 3.2;
    const buffer = breathCtx.createBuffer(1, Math.floor(sampleRate * seconds), sampleRate);
    const data = buffer.getChannelData(0);

    let last = 0;
    for (let i = 0; i < data.length; i += 1) {
      const white = Math.random() * 2 - 1;
      last = last * 0.965 + white * 0.035;
      data[i] = last * 0.72;
    }

    breathSource = breathCtx.createBufferSource();
    breathSource.buffer = buffer;
    breathSource.loop = true;

    const warmth = breathCtx.createBiquadFilter();
    warmth.type = 'highpass';
    warmth.frequency.value = 85;

    breathFilter = breathCtx.createBiquadFilter();
    breathFilter.type = 'lowpass';
    breathFilter.frequency.value = 760;
    breathFilter.Q.value = 0.75;

    breathGain = breathCtx.createGain();
    breathGain.gain.value = 0.0;

    breathSource.connect(warmth);
    warmth.connect(breathFilter);
    breathFilter.connect(breathGain);
    breathGain.connect(breathCtx.destination);
    breathSource.start();

    const startedAt = breathCtx.currentTime;
    breathTimer = window.setInterval(() => {
      if (!breathCtx || !breathGain || !breathFilter) return;
      const t = breathCtx.currentTime - startedAt;
      const inhale = 0.5 + 0.5 * Math.sin(t * 1.28 - 1.1);
      const micro = 0.5 + 0.5 * Math.sin(t * 7.2);
      const target = 0.016 + inhale * 0.038 + micro * 0.004;
      breathGain.gain.setTargetAtTime(target, breathCtx.currentTime, 0.16);
      breathFilter.frequency.setTargetAtTime(520 + inhale * 590, breathCtx.currentTime, 0.22);
    }, 70);
  } catch (error) {
    console.warn('MADRE breath audio unavailable', error);
  }
}

async function unlockAudio() {
  if (audioUnlocked) return;
  try {
    await audios.welcome.play();
    audios.welcome.pause();
    audios.welcome.currentTime = 0;
    audioUnlocked = true;
  } catch (error) {
    audioUnlocked = false;
  }
}

async function wakeMadre() {
  if (currentState !== 'sleeping') return;
  stage.classList.add('power-consumed');
  powerButton.setAttribute('aria-hidden', 'true');
  powerButton.disabled = true;
  statusLabel.textContent = 'MADRE / AWAKENING';
  sleepLabel.textContent = 'MADRE / BETWEEN SLEEP AND LIGHT';
  currentState = 'awakening';
  stage.classList.remove('sleeping');
  stage.classList.add('awakening');

  await unlockAudio();
  startMadreBreathAudio();

  setTimeout(() => {
    currentState = 'awake';
    stage.classList.add('awake');
    statusLabel.textContent = 'MADRE / AWAKE';
    sleepLabel.textContent = 'MADRE / PRESENTING';

    audios.welcome.currentTime = 0;
    audios.welcome.play().catch(() => {});
    syncLines(audios.welcome, welcomeLines, renderVoice);
  }, 700);
}

function showProjects() {
  introFinished = true;
  currentState = 'projects';
  currentProject = null;
  stage.classList.remove('sleeping', 'awakening', 'scene-active', 'odi-active', 'supra-active', 'cps-active', 'access-active', 'madre-active');
  stage.classList.add('awake', 'projects-visible');
  statusLabel.textContent = 'MADRE / PROJECTS READY';
  sleepLabel.textContent = 'MADRE / VEHICLE SYSTEMS LAB';
  setFooter('idle');
  setTimeout(() => renderVoice(''), 900);
}

audios.welcome.addEventListener('ended', showProjects);

function clearTexts() {
  Object.values(texts).forEach((el) => renderText(el, ''));
}

function backToMadre() {
  stopAllAudio();
  clearTexts();
  renderVoice('');
  currentProject = null;
  currentState = 'projects';
  stage.classList.remove('scene-active', 'odi-active', 'supra-active', 'cps-active', 'access-active', 'madre-active');
  stage.classList.add('projects-visible', 'awake');
  statusLabel.textContent = 'MADRE / PROJECTS READY';
  sleepLabel.textContent = 'MADRE / VEHICLE SYSTEMS LAB';
  setFooter('idle');
}

function activateProject(kind) {
  if (!introFinished && kind !== 'madre' && currentState === 'sleeping') return;
  if (currentState === 'sleeping') {
    wakeMadre();
    return;
  }
  if (!stage.classList.contains('projects-visible') && !stage.classList.contains('awake')) return;

  stopAllAudio();
  clearTexts();
  renderVoice('');

  currentProject = kind;
  currentState = kind;
  stage.classList.remove('odi-active', 'supra-active', 'cps-active', 'access-active', 'madre-active');
  stage.classList.add('scene-active', `${kind}-active`);

  statusLabel.textContent = `MADRE / ${kind.toUpperCase()}`;
  sleepLabel.textContent = kind === 'odi' ? 'MADRE / EARTH ORBIT WATCH' : `MADRE / ${kind.toUpperCase()} MODE`;
  setFooter(kind);

  const audio = audios[kind];
  if (audio) {
    audio.currentTime = 0;
    const playAttempt = audio.play();
    if (sceneLines[kind]) syncLines(audio, sceneLines[kind], (text) => renderText(texts[kind], text), 140);
    if (playAttempt && typeof playAttempt.catch === 'function') {
      playAttempt.catch(() => {
        if (kind === 'madre') renderText(texts.madre, staticCopy.madre);
        else renderText(texts[kind], staticCopy[kind] || '');
      });
    }
  } else {
    renderText(texts[kind], staticCopy[kind] || '');
  }

  if (kind === 'madre') {
    renderText(texts.madre, staticCopy.madre);
  }
}

function bindLaunch(id, href) {
  const el = document.getElementById(id);
  if (!el) return;
  el.addEventListener('click', () => {
    window.location.href = href;
  });
  el.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      window.location.href = href;
    }
  });
}


function updateParallax(clientX, clientY) {
  const x = ((clientX / width) - 0.5) * 2;
  const y = ((clientY / height) - 0.5) * 2;
  stage.style.setProperty('--parallax-x', `${x * 18}px`);
  stage.style.setProperty('--parallax-y', `${y * 18}px`);
}

window.addEventListener('mousemove', (event) => {
  updateParallax(event.clientX, event.clientY);
});
window.addEventListener('mouseleave', () => {
  stage.style.setProperty('--parallax-x', '0px');
  stage.style.setProperty('--parallax-y', '0px');
});
window.addEventListener('touchmove', (event) => {
  const touch = event.touches && event.touches[0];
  if (touch) updateParallax(touch.clientX, touch.clientY);
}, { passive: true });

powerButton.addEventListener('click', wakeMadre);

document.querySelectorAll('.project-name').forEach((button) => {
  button.addEventListener('click', () => activateProject(button.dataset.project));
});

document.querySelectorAll('[data-back]').forEach((button) => {
  button.addEventListener('click', backToMadre);
});

bindLaunch('odiReturn', 'vehicle-odi.html');
bindLaunch('supraReturn', 'vehicle-supra.html');
bindLaunch('cpsReturn', 'vehicle-cps.html');
bindLaunch('accessReturn', 'vehicle-access.html');

window.addEventListener('resize', resize);
window.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && currentProject) backToMadre();
});

setFooter('idle');
resize();
if (bootReady) showProjects();
loop();
