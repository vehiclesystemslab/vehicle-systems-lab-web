import { useEffect, useMemo, useState } from "react";
import "./App.css";

const projects = [
  {
    key: "supra",
    title: "VEHICLE-SUPRA",
    label: "Autonomous AI coherence",
    text: "Coherence, tension, recovery, and agent stability.",
    href: "/downloads/VEHICLE-SUPRA-v0.2-GITEX-Demo.zip",
    cta: "GITEX Demo v0.2",
  },
  {
    key: "professional",
    title: "SUPRA v0.1",
    label: "Professional package",
    text: "Clean alpha research package for technical review.",
    href: "/downloads/VEHICLE-SUPRA-v0.1-Professional.zip",
    cta: "Download v0.1",
  },
  {
    key: "cps",
    title: "VEHICLE-CPS",
    label: "Civil protection systems",
    text: "Structural intelligence for response, resilience, and coordination.",
    href: "#dialogue",
    cta: "Ask Mother",
  },
  {
    key: "odi",
    title: "VEHICLE-ODI",
    label: "Operational decision intelligence",
    text: "Turning systemic tension into decision pathways.",
    href: "#dialogue",
    cta: "Ask Mother",
  },
  {
    key: "contact",
    title: "Partnerships",
    label: "GITEX 2026",
    text: "For institutional dialogue, investment, validation, and collaboration.",
    href: "mailto:contact@vehiclesystemslab.com",
    cta: "Contact",
  },
];

const motherAnswers = {
  supra:
    "VEHICLE-SUPRA watches the coherence of autonomous AI agents. It follows tension, detects when stability is at risk, and shows recovery before failure spreads.",
  cps:
    "VEHICLE-CPS is the civil protection direction of the architecture: response, continuity, coordination, and resilience under pressure.",
  odi:
    "VEHICLE-ODI is the operational decision layer. It helps transform complex signals into routes that people can understand and act through.",
  gitex:
    "For GITEX, the message is simple: VEHICLE is not only code. It is a living way to make complexity visible, human, and actionable.",
  investment:
    "Investing in VEHICLE means investing in a new interface between people and structural intelligence: a system that can explain, guide, and grow across domains.",
};

function FieldCanvas() {
  useEffect(() => {
    const canvas = document.getElementById("intelligence-field");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let raf = 0;
    let t = 0;
    const dots = Array.from({ length: 78 }, (_, i) => ({
      x: Math.random(),
      y: Math.random(),
      r: 0.7 + Math.random() * 2.2,
      a: Math.random() * Math.PI * 2,
      s: 0.22 + Math.random() * 0.55,
      group: i % 5,
    }));

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * window.devicePixelRatio);
      canvas.height = Math.floor(height * window.devicePixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
    }

    function draw() {
      t += 0.008;
      ctx.clearRect(0, 0, width, height);

      const cx = width * 0.52;
      const cy = height * 0.48;
      const radius = Math.min(width, height) * 0.34;

      const gradient = ctx.createRadialGradient(cx, cy, 20, cx, cy, radius * 1.55);
      gradient.addColorStop(0, "rgba(134,230,224,0.16)");
      gradient.addColorStop(0.42, "rgba(205,179,130,0.07)");
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      dots.forEach((d, i) => {
        const angle = d.a + t * d.s + d.group * 0.2;
        const orbit = radius * (0.24 + (d.group + 1) * 0.12);
        const x = cx + Math.cos(angle) * orbit * (0.82 + Math.sin(t + i) * 0.04);
        const y = cy + Math.sin(angle * 0.86) * orbit * (0.52 + Math.cos(t * 0.7 + i) * 0.04);

        ctx.beginPath();
        ctx.arc(x, y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = i % 7 === 0 ? "rgba(205,179,130,0.54)" : "rgba(134,230,224,0.42)";
        ctx.fill();

        if (i % 4 === 0) {
          const j = dots[(i + 11) % dots.length];
          const angle2 = j.a + t * j.s + j.group * 0.2;
          const orbit2 = radius * (0.24 + (j.group + 1) * 0.12);
          const x2 = cx + Math.cos(angle2) * orbit2;
          const y2 = cy + Math.sin(angle2 * 0.86) * orbit2 * 0.54;
          const dist = Math.hypot(x - x2, y - y2);
          if (dist < 230) {
            ctx.strokeStyle = "rgba(134,230,224,0.055)";
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x2, y2);
            ctx.stroke();
          }
        }
      });

      raf = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas id="intelligence-field" aria-hidden="true" />;
}

function MotherCore({ mode }) {
  return (
    <div className={`mother-core mother-${mode}`} aria-hidden="true">
      <div className="mother-halo halo-a" />
      <div className="mother-halo halo-b" />
      <div className="mother-halo halo-c" />
      <div className="mother-seed" />
      <div className="mother-shell shell-a" />
      <div className="mother-shell shell-b" />
      <div className="mother-ring ring-a" />
      <div className="mother-ring ring-b" />
      <div className="mother-breath breath-a" />
      <div className="mother-breath breath-b" />
    </div>
  );
}

export default function App() {
  const [dialogueOpen, setDialogueOpen] = useState(false);
  const [mode, setMode] = useState("repose");
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      role: "mother",
      text: "I am here. Ask me about VEHICLE, SUPRA, CPS, ODI, GITEX, or the next architecture.",
    },
  ]);
  const [whisper, setWhisper] = useState(false);

  const status = useMemo(() => {
    if (mode === "reasoning") return "Reasoning";
    if (mode === "speaking") return "Speaking softly";
    if (dialogueOpen) return "Attention acquired";
    return "Observing quietly";
  }, [mode, dialogueOpen]);

  function speak(text) {
    if (!whisper || !("speechSynthesis" in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.86;
    utterance.pitch = 0.78;
    utterance.volume = 0.82;
    window.speechSynthesis.speak(utterance);
  }

  function openDialogue(seed = "") {
    setDialogueOpen(true);
    setMode("speaking");
    if (seed) setInput(seed);
    setTimeout(() => setMode("repose"), 1200);
  }

  function answerQuestion(raw) {
    const q = raw.toLowerCase();
    if (q.includes("supra")) return motherAnswers.supra;
    if (q.includes("cps") || q.includes("civil")) return motherAnswers.cps;
    if (q.includes("odi") || q.includes("decision")) return motherAnswers.odi;
    if (q.includes("gitex")) return motherAnswers.gitex;
    if (q.includes("invest") || q.includes("inversion") || q.includes("partner")) return motherAnswers.investment;
    return "VEHICLE is being built as a living structural intelligence architecture. Mother is the face. The projects are the organs. The purpose is to make complexity visible, usable, and human.";
  }

  function submit(e) {
    e.preventDefault();
    const clean = input.trim();
    if (!clean) return;
    setMessages((m) => [...m, { role: "human", text: clean }]);
    setInput("");
    setMode("reasoning");
    setTimeout(() => {
      const response = answerQuestion(clean);
      setMessages((m) => [...m, { role: "mother", text: response }]);
      setMode("speaking");
      speak(response);
      setTimeout(() => setMode("repose"), 1300);
    }, 720);
  }

  return (
    <div className={`mother-page is-${mode}`} data-dialogue={dialogueOpen ? "open" : "closed"}>
      <FieldCanvas />
      <MotherCore mode={mode} />

      <header className="topbar">
        <a className="brand" href="#home" aria-label="VEHICLE Systems Lab home">
          <span className="brand-mark">MOTHER</span>
          <span className="brand-name">VEHICLE Systems Lab</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#dialogue">Dialogue</a>
          <a href="mailto:contact@vehiclesystemslab.com">Contact</a>
        </nav>
        <div className="nav-actions">
          <button type="button" className="ghost-button" onClick={() => setWhisper((v) => !v)}>
            {whisper ? "Whisper On" : "Whisper Off"}
          </button>
          <button type="button" className="primary-button" onClick={() => openDialogue()}>
            Speak with Mother
          </button>
        </div>
      </header>

      <main id="home" className="home-shell">
        <section className="hero">
          <div className="hero-copy glass-panel">
            <div className="eyebrow-row">
              <span className="eyebrow">VEHICLE Systems Lab</span>
              <span className="state-pill">{status}</span>
            </div>
            <h1>Mother</h1>
            <p className="hero-line">
              The visible face of VEHICLE.
            </p>
            <p className="hero-lead">
              She breathes with the system, waits for human intention, and opens the path toward the projects inside the machine.
            </p>

            <div className="hero-actions">
              <button type="button" className="primary-button large" onClick={() => openDialogue()}>
                Enter
              </button>
              <a className="secondary-button large" href="#projects">
                View Projects
              </a>
            </div>

            <div className="breath-grid" aria-label="Mother state metrics">
              <div>
                <span>Compression</span>
                <strong>41%</strong>
              </div>
              <div>
                <span>Expansion</span>
                <strong>59%</strong>
              </div>
              <div>
                <span>Tension</span>
                <strong>low</strong>
              </div>
              <div>
                <span>Relief</span>
                <strong>rising</strong>
              </div>
            </div>
          </div>

          <div id="dialogue" className="dialogue-panel glass-panel">
            <div className="dialogue-header">
              <div>
                <span>Mother dialogue</span>
                <strong>{dialogueOpen ? "Open" : "Waiting"}</strong>
              </div>
              <button type="button" className="ghost-button compact" onClick={() => setDialogueOpen((v) => !v)}>
                {dialogueOpen ? "Rest" : "Open"}
              </button>
            </div>

            {dialogueOpen ? (
              <>
                <div className="message-window">
                  {messages.map((message, index) => (
                    <article key={`${message.role}-${index}`} className={`message ${message.role}`}>
                      <span>{message.role === "mother" ? "Mother" : "Human"}</span>
                      <p>{message.text}</p>
                    </article>
                  ))}
                </div>
                <form className="dialogue-form" onSubmit={submit}>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Mother about VEHICLE..."
                    aria-label="Ask Mother"
                  />
                  <button className="primary-button" type="submit">
                    Send
                  </button>
                </form>
              </>
            ) : (
              <div className="resting-card" onClick={() => openDialogue()} role="button" tabIndex={0}>
                <span>Touch the field to speak.</span>
                <strong>Mother is resting.</strong>
              </div>
            )}
          </div>
        </section>

        <section id="projects" className="projects-section">
          <div className="section-heading">
            <span>Inside VEHICLE</span>
            <h2>Projects connected through Mother</h2>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card glass-panel" key={project.key}>
                <span>{project.label}</span>
                <h3>{project.title}</h3>
                <p>{project.text}</p>
                {project.href.startsWith("#") ? (
                  <button type="button" className="project-link" onClick={() => openDialogue(project.title)}>
                    {project.cta}
                  </button>
                ) : (
                  <a className="project-link" href={project.href}>
                    {project.cta}
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>VEHICLE Systems Lab</span>
        <a href="mailto:contact@vehiclesystemslab.com">contact@vehiclesystemslab.com</a>
      </footer>
    </div>
  );
}
