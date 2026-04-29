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

export default function App() {
  const [activeKey, setActiveKey] = useState("front");
  const active = sections[activeKey];

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
              <article>
                <strong>v1</strong>
                <span>web prototype</span>
              </article>
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