import React, { useState } from "react";
import "./App.css";

const sections = {
  front: {
    face: "FRONT",
    title: "VEHICLE Protocol",
    subtitle: "Compatibility-driven contraction for structured coherence.",
    description:
      "A conceptual and computational framework for studying how relational systems may converge toward stable configurations through compatibility, tension reduction, and structural alignment.",
  },
  back: {
    face: "BACK",
    title: "Scientific Manuscript",
    subtitle: "Formal papers, versions, and methodological lineage.",
    description:
      "A curated space for the formal development of VEHICLE, VEHICLE 2D, VEHICLE 3D, and the transition toward measurable global observables under VEHICLE-T.",
  },
  top: {
    face: "TOP",
    title: "Theoretical Physics",
    subtitle: "From relational structures to emergent interpretation.",
    description:
      "This layer explores the philosophical and mathematical intuition behind finite relational structures, higher-dimensional shadows, cubic convergence, and emergent stability.",
  },
  bottom: {
    face: "BOTTOM",
    title: "Author Biography",
    subtitle: "Roberto Borda Milan — independent researcher.",
    description:
      "A personal and scientific profile documenting the origin, motivation, and intellectual path behind VEHICLE Systems Lab and the AIMTG research line.",
  },
  right: {
    face: "RIGHT",
    title: "Simulations",
    subtitle: "Numerical experiments, repositories, and visual models.",
    description:
      "Executable experiments for tension dissipation, internal coupling, lambda sweeps, normalized observables, and 2D/3D relational dynamics.",
  },
  left: {
    face: "LEFT",
    title: "Contact & Collaboration",
    subtitle: "For review, discussion, replication, and collaboration.",
    description:
      "A direct institutional entry point for researchers, reviewers, readers, and collaborators interested in VEHICLE, VEHICLE-T, AIMTG, or independent systems modeling.",
  },
  partnerships: {
    face: "GATEWAY",
    title: "Partnerships",
    subtitle: "Strategic collaboration for VEHICLE-ODI and complex systems research.",
    description:
      "VEHICLE Systems Lab welcomes aerospace companies, universities, research centers, orbital data partners, legal/IP advisors, and institutional funders interested in VEHICLE-ODI, orbital debris intelligence, and structural decision architectures.",
  },
};

const orbitingDebris = [
  { className: "debris debris-a", label: "A1" },
  { className: "debris debris-b", label: "A5" },
  { className: "debris debris-c", label: "A6" },
  { className: "debris debris-d", label: "A2" },
  { className: "debris debris-e", label: "A4" },
  { className: "debris debris-f", label: "" },
  { className: "debris debris-g", label: "" },
  { className: "debris debris-h", label: "" },
];

const odiDetails = {
  a1: {
    code: "A1",
    title: "Critical conjunction risk",
    subtitle: "An object or relation producing elevated external tension.",
    description:
      "A1 identifies objects, crossings, or orbital relations that require priority monitoring because the risk of conjunction or collision is structurally elevated. In VEHICLE-ODI, this is not only a position warning; it is a relational tension signal.",
  },
  a2: {
    code: "A2",
    title: "Recovered object",
    subtitle: "Risk reduced after maneuver, correction, or uncertainty reduction.",
    description:
      "A2 identifies objects or orbital relations that have returned to a safer admissible state after a corrective action, improved tracking, maneuver, or risk reduction. VEHICLE-ODI treats recovery as a measurable regime, not only as the absence of danger.",
  },
  a3: {
    code: "A3",
    title: "Fragmentation pressure",
    subtitle: "A body showing internal instability or propagation risk.",
    description:
      "A3 marks objects whose internal coherence may be degrading: aging bodies, unstable remnants, or objects with potential to generate new fragments. It helps separate ordinary debris from debris that may become a source of future systemic risk.",
  },
  a4: {
    code: "A4",
    title: "Filtered fragment",
    subtitle: "Tracked but not structurally prioritized under current conditions.",
    description:
      "A4 represents fragments that remain recorded and monitored, but do not currently concentrate enough systemic tension to justify immediate allocation of scarce intervention resources. It is a disciplined filtering regime, not a dismissal of risk.",
  },
  a5: {
    code: "A5",
    title: "Dangerous rigid mass",
    subtitle: "Large, persistent, non-cooperative mass with latent impact potential.",
    description:
      "A5 identifies massive objects such as dead satellites or rocket bodies that may not be critical today but carry high latent risk. If struck, they can become major sources of fragmentation, making them serious candidates for stabilization or removal studies.",
  },
  a6: {
    code: "A6",
    title: "Fluid fragmentation cloud",
    subtitle: "Distributed debris propagation across orbital relations.",
    description:
      "A6 represents many small fragments moving as a cloud rather than a single object. VEHICLE-ODI treats this as distributed tension: a propagation field that must be mapped, monitored, and connected to vulnerable orbital regions.",
  },
  oti: {
    code: "OTI",
    title: "Orbital Tension Index",
    subtitle: "A normalized research signal for regional orbital tension.",
    description:
      "OTI is proposed as an experimental index that compares structural tension by orbital region over time. It can help evaluate whether a region is becoming more stable, more congested, or more urgent for observation and intervention.",
  },
  partnerships: {
    code: "ODI",
    title: "Strategic partnerships",
    subtitle: "Collaboration for validation, data, infrastructure, and funding.",
    description:
      "VEHICLE Systems Lab welcomes partners in aerospace, space situational awareness, orbital data, legal/IP, universities, research centers, and space sustainability. The goal is to validate VEHICLE-ODI without replacing existing systems: it adds a decision layer above them.",
  },
};


function CubeFace({ className, sectionKey, active, onSelect }) {
  const section = sections[sectionKey];

  return (
    <button
      className={`cube-face ${className} ${active ? "active" : ""}`}
      onClick={() => onSelect(sectionKey)}
      type="button"
      aria-label={section.title}
    >
      <span className="face-label">{section.face}</span>
      <strong>{section.title}</strong>
    </button>
  );
}

function OdiEarthScene({ onBack, onPartnerships }) {
  const [activeOdiKey, setActiveOdiKey] = useState("oti");
  const activeOdi = odiDetails[activeOdiKey];

  const handleOdiSelect = (key) => {
    setActiveOdiKey(key);
  };

  return (
    <section className="odi-section" aria-label="VEHICLE-ODI orbital debris project">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-layer" />

      <div className="odi-shell">
        <article className="odi-info-card">
          <button className="back-button" type="button" onClick={onBack}>
            ← Back to VEHICLE Cube
          </button>

          <span className="odi-kicker">PROJECT</span>
          <h1>VEHICLE-ODI</h1>
          <h2>Orbital Debris Intelligence</h2>

          <p className="odi-lead">
            Before removing orbital debris, we must know which debris matters most.
          </p>

          <p>
            VEHICLE-ODI applies the Borda Milan Pyramid and the VEHICLE
            Formula-as-Architecture to model orbital debris as a structured
            relational system under tension. Objects, fragments, orbital zones,
            and debris clouds become nodes in a decision architecture.
          </p>

          <div className="odi-pill-grid" aria-label="VEHICLE-ODI interactive regimes">
            <button
              type="button"
              className={activeOdiKey === "a1" ? "odi-pill active" : "odi-pill"}
              onClick={() => handleOdiSelect("a1")}
            >
              A1 Conjunction risk
            </button>
            <button
              type="button"
              className={activeOdiKey === "a2" ? "odi-pill active" : "odi-pill"}
              onClick={() => handleOdiSelect("a2")}
            >
              A2 Recovered object
            </button>
            <button
              type="button"
              className={activeOdiKey === "a3" ? "odi-pill active" : "odi-pill"}
              onClick={() => handleOdiSelect("a3")}
            >
              A3 Fragmentation pressure
            </button>
            <button
              type="button"
              className={activeOdiKey === "a4" ? "odi-pill active" : "odi-pill"}
              onClick={() => handleOdiSelect("a4")}
            >
              A4 Filtered fragment
            </button>
            <button
              type="button"
              className={activeOdiKey === "a5" ? "odi-pill active" : "odi-pill"}
              onClick={() => handleOdiSelect("a5")}
            >
              A5 Dangerous mass
            </button>
            <button
              type="button"
              className={activeOdiKey === "a6" ? "odi-pill active" : "odi-pill"}
              onClick={() => handleOdiSelect("a6")}
            >
              A6 Fragment cloud
            </button>
            <button
              type="button"
              className={activeOdiKey === "oti" ? "odi-pill active" : "odi-pill"}
              onClick={() => handleOdiSelect("oti")}
            >
              OTI Index
            </button>
            <button
              type="button"
              className={activeOdiKey === "partnerships" ? "odi-pill active" : "odi-pill"}
              onClick={() => handleOdiSelect("partnerships")}
            >
              Partnerships
            </button>
          </div>

          <div className="odi-explainer">
            <h3>What VEHICLE-ODI adds</h3>
            <p>
              It does not replace tracking, astrodynamics, sensors, or active
              debris removal missions. It adds a structural decision layer for
              prioritizing what to observe, avoid, stabilize, move, or remove first.
            </p>
          </div>

          <div className="odi-actions">
            <button type="button" className="secondary-action" onClick={onBack}>
              Explore VEHICLE Architecture
            </button>
          </div>
        </article>

        <div className="odi-visual-card">
          <div className="odi-badge">
            <span /> VEHICLE-ODI · Orbital Debris Intelligence
          </div>

          <div className="earth-stage" aria-hidden="true">
            <div className="earth-rotator">
              <div className="orbit orbit-one" />
              <div className="orbit orbit-two" />
              <div className="orbit orbit-three" />
              <div className="orbit orbit-four" />

              <div className="earth-core">
                <div className="earth-grid" />
                <div className="earth-continent continent-one" />
                <div className="earth-continent continent-two" />
                <div className="earth-continent continent-three" />
                <div className="earth-glow" />
              </div>

              {orbitingDebris.map((item) => (
                <span className={item.className} key={item.className}>
                  {item.label}
                </span>
              ))}

              <div className="tension-line tension-one" />
              <div className="tension-line tension-two" />
              <div className="tension-line tension-three" />
            </div>
          </div>

          <div className="odi-caption-card" aria-live="polite">
            <span>{activeOdi.code}</span>
            <strong>{activeOdi.title}</strong>
            <em>{activeOdi.subtitle}</em>
            <p>{activeOdi.description}</p>
            {activeOdiKey === "partnerships" && (
              <button type="button" className="caption-link" onClick={onPartnerships}>
                Open partnerships gateway
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [activeKey, setActiveKey] = useState("front");
  const [view, setView] = useState("home");
  const active = sections[activeKey];

  const openPartnerships = () => {
    setView("home");
    setActiveKey("partnerships");
  };

  if (view === "odi") {
    return (
      <main className="page-shell">
        <OdiEarthScene
          onBack={() => setView("home")}
          onPartnerships={openPartnerships}
        />
      </main>
    );
  }

  return (
    <main className="page-shell">
      <section className="hero-section">
        <div className="ambient ambient-one" />
        <div className="ambient ambient-two" />
        <div className="grid-layer" />

        <div className="hero-content">
          <div className="left-panel">
            <div className="eyebrow">
              <span />
              Relational dynamics · Structural coherence · Global observables
            </div>

            <h1>VEHICLE Systems Lab</h1>

            <h2>
              A navigable research architecture for relational systems,
              structural coherence, and global observables.
            </h2>

            <p>
              VEHICLE Systems Lab studies compatibility, contraction, tension
              dissipation, and emergent stability across conceptual,
              mathematical, and computational layers.
            </p>

            <div className="hero-actions">
              <button
                type="button"
                className="primary-action"
                onClick={() => setActiveKey("front")}
              >
                Explore VEHICLE
              </button>

              <button
                type="button"
                className="secondary-action"
                onClick={() => setActiveKey("back")}
              >
                View Publications
              </button>

              <button
                type="button"
                className="secondary-action odi-action"
                onClick={() => setView("odi")}
              >
                Space Debris Project
              </button>
            </div>

            <div className="section-buttons">
              {Object.entries(sections).map(([key, item]) => (
                <button
                  key={key}
                  type="button"
                  className={activeKey === key ? "section-button active" : "section-button"}
                  onClick={() => setActiveKey(key)}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <div className="metric-row">
              <article>
                <strong>6</strong>
                <span>navigation faces</span>
              </article>

              <article>
                <strong>3D</strong>
                <span>relational gateway</span>
              </article>

              <button
                type="button"
                className="metric-card metric-link odi-project-card"
                onClick={() => setView("odi")}
                aria-label="Open VEHICLE-ODI space debris project"
              >
                <strong>ODI</strong>
                <span>space debris project</span>
              </button>
            </div>
          </div>

          <div className="right-panel">
            <div className="cube-card">
              <div className="node node-a" />
              <div className="node node-b" />

              <div className="scene-3d">
                <div className="cube-3d">
                  <CubeFace
                    className="front"
                    sectionKey="front"
                    active={activeKey === "front"}
                    onSelect={setActiveKey}
                  />
                  <CubeFace
                    className="back"
                    sectionKey="back"
                    active={activeKey === "back"}
                    onSelect={setActiveKey}
                  />
                  <CubeFace
                    className="right"
                    sectionKey="right"
                    active={activeKey === "right"}
                    onSelect={setActiveKey}
                  />
                  <CubeFace
                    className="left"
                    sectionKey="left"
                    active={activeKey === "left"}
                    onSelect={setActiveKey}
                  />
                  <CubeFace
                    className="top"
                    sectionKey="top"
                    active={activeKey === "top"}
                    onSelect={setActiveKey}
                  />
                  <CubeFace
                    className="bottom"
                    sectionKey="bottom"
                    active={activeKey === "bottom"}
                    onSelect={setActiveKey}
                  />
                </div>
              </div>
            </div>

            <article className="info-card">
              <span>{active.face}</span>
              <h3>{active.title}</h3>
              <h4>{active.subtitle}</h4>
              <p>{active.description}</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
