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
    contact: "contact@vehiclesystemslab.com",
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

const odiRegimeKeys = [
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "oti",
  "partnerships",
];


const cpsDetails = {
  overview: {
    code: "CPS",
    title: "Civil Protection Systems",
    subtitle: "Environmental safety through relational coherence.",
    description:
      "VEHICLE-CPS treats high-density human environments as structured relational fields under tension. People, teams, credentials, access points, protected zones, routes, security rings and critical areas become nodes in a supervised civil protection graph.",
  },
  kernel: {
    code: "KERNEL",
    title: "VEHICLE mathematical kernel",
    subtitle: "External tension plus internal incoherence.",
    description:
      "The environment is represented as G=(N,E). Each node carries an E.I.A.R.(V) state, while total tension T(X)=T_ext(X)+T_int(X) supports projection-governed correction and supervised operational interpretation.",
  },
  p0: {
    code: "P0",
    title: "Structural Rest",
    subtitle: "Event not started or space essentially empty.",
    description:
      "The field is calm and structurally ready. Authorized teams remain in normal readiness while the system confirms that no relevant pressure or incoherence is present.",
  },
  p1: {
    code: "P1",
    title: "Controlled Normal Flow",
    subtitle: "Occupancy and movement remain compatible.",
    description:
      "Flows, access points, routes and perimeter relations remain coherent under standard monitoring. This is the normal operational state for a healthy public event.",
  },
  p2: {
    code: "P2",
    title: "Localized Review",
    subtitle: "Small anomalies requiring nearby verification.",
    description:
      "A local mismatch, disconnected credential, abnormal persistence or small density pocket requires human review, but the environment has not become systemically critical.",
  },
  p3: {
    code: "P3",
    title: "Anomalous Concentration",
    subtitle: "Bottlenecks, density pressure or unexpected crowd formation.",
    description:
      "External tension rises in a specific area. Teams may redirect flows, reinforce a sector, open a route or investigate a pressure concentration before escalation.",
  },
  p4: {
    code: "P4",
    title: "Perimeter Break / Critical Incoherence",
    subtitle: "Security ring breach, route conflict or critical node incoherence.",
    description:
      "The system indicates a critical loss of environmental coherence, such as a protected-zone conflict, broken perimeter relation or critical operational node falling out of expected configuration.",
  },
  p5: {
    code: "P5",
    title: "Reinforcement and Containment",
    subtitle: "Response is active and the field is being reconfigured.",
    description:
      "Human response has begun. Teams coordinate deployment, route management and sector reinforcement to move the field back toward admissible coherence.",
  },
  p6: {
    code: "P6",
    title: "Controlled Evacuation",
    subtitle: "Partial or full evacuation under monitored tension.",
    description:
      "Evacuation routes, access corridors and crowd pressure are monitored to protect movement, reduce collapse risk and support coordinated evacuation management.",
  },
  simulation: {
    code: "SIM",
    title: "Synthetic simulation phase",
    subtitle: "1,000 to 10,000 human nodes before any physical pilot.",
    description:
      "The first development stage should validate graph construction, tension computation, P0-P6 classification, detection timing, controlled response scenarios and return-to-coherence behavior in simulation.",
  },
  ethics: {
    code: "ETHICS",
    title: "Governance by design",
    subtitle: "Prevention, not persecution.",
    description:
      "VEHICLE-CPS is not a surveillance system. It requires mandatory human supervision, no automatic coercive action, data minimization, pseudonymized operational IDs and no facial recognition by design in the initial architecture.",
  },
  partnerships: {
    code: "PARTNERS",
    title: "Partnership and funding pathway",
    subtitle: "Simulation, validation and controlled civil protection research.",
    description:
      "Potential partners include civil protection agencies, event security companies, municipalities, universities, emergency management institutions, wearable technology providers, venue operators and public safety researchers.",
  },
};

const cpsRegimeKeys = [
  "overview",
  "kernel",
  "p0",
  "p1",
  "p2",
  "p3",
  "p4",
  "p5",
  "p6",
  "simulation",
  "ethics",
  "partnerships",
];


const supraDetails = {
  overview: {
    code: "SUPRA",
    title: "Coherence-Governed AI Agents",
    subtitle: "Autonomous agents modeled as structured nodes under tension.",
    description:
      "VEHICLE-SUPRA is an alpha research prototype for autonomous AI agents that monitor coherence, detect internal tension, guide recovery, and preserve systemic stability across agent networks.",
  },
  kernel: {
    code: "KERNEL",
    title: "Structured agent state",
    subtitle: "E.I.A.R.(V) applied to autonomous AI infrastructure.",
    description:
      "Each agent is represented through Exposure, Integrity, Agency, Recovery, and systemic Value. This converts an AI agent from a black box into a measurable structured node.",
  },
  tension: {
    code: "TENSION",
    title: "Internal and relational tension",
    subtitle: "Detecting incoherence before failure propagates.",
    description:
      "SUPRA evaluates internal instability inside each agent and relational mismatch across the network. Rising tension becomes an early signal for review, correction, or controlled recovery.",
  },
  recovery: {
    code: "RECOVERY",
    title: "Projection-governed recovery",
    subtitle: "Guiding unstable agents back toward admissible coherence.",
    description:
      "When an agent drifts outside a coherent operating region, VEHICLE-SUPRA uses projection-governed logic to guide correction toward safer admissible states rather than relying on opaque retry behavior.",
  },
  regimes: {
    code: "A0-A6",
    title: "Regime classification",
    subtitle: "Operational states for agent stability and escalation.",
    description:
      "The A0-A6 taxonomy helps classify stable operation, external pressure, recovery, incoherence, filtering, persistent failure, and active cascade behavior across a multi-agent system.",
  },
  twin: {
    code: "TWIN",
    title: "Twin-node recovery simulation",
    subtitle: "Continuity-preserving recovery without exaggerated claims.",
    description:
      "The current prototype supports a simulation concept where a coherent twin node can preserve continuity while an unstable node is isolated or restored. This remains a research mechanism, not a production guarantee.",
  },
  download: {
    code: "v0.1",
    title: "Professional alpha release",
    subtitle: "Downloadable research prototype package.",
    description:
      "VEHICLE-SUPRA v0.1 Professional is prepared as an alpha research package with a cleaned repository structure, professional language, initial documentation, and basic test coverage.",
  },
  partnerships: {
    code: "LAB",
    title: "Research and validation pathway",
    subtitle: "For institutions, AI researchers, infrastructure teams, and strategic partners.",
    description:
      "VEHICLE Systems Lab welcomes collaboration for validation, benchmarking, dashboard development, agent integration, and responsible deployment research around coherence-governed autonomous systems.",
  },
};

const supraRegimeKeys = [
  "overview",
  "kernel",
  "tension",
  "recovery",
  "regimes",
  "twin",
  "download",
  "partnerships",
];

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

  return (
    <section
      className="hero-section project-section odi-section"
      aria-label="VEHICLE-ODI orbital debris project"
    >
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-layer" />

      <div className="hero-content project-content odi-shell">
        <div className="left-panel project-left-panel">
          <div className="eyebrow">
            <span />
            VEHICLE-ODI · Orbital Debris Intelligence · Structural priority
          </div>

          <h1>VEHICLE-ODI</h1>

          <h2>
            Orbital Debris Intelligence for relational prioritization of space debris.
          </h2>

          <p className="project-lead">
            Before removing orbital debris, we must know which debris matters most.
          </p>

          <p>
            VEHICLE-ODI reads objects, fragments, orbital zones and debris clouds
            as a structured field under tension. The project is now archived and
            citable through GitHub and Zenodo.
          </p>

          <div className="project-repository-card" aria-label="VEHICLE-ODI repository and DOI">
            <strong>Repository and archived release</strong>
            <a href="https://github.com/vehiclesystemslab/VEHICLE-ODI" target="_blank" rel="noreferrer">
              github.com/vehiclesystemslab/VEHICLE-ODI
            </a>
            <a href="https://zenodo.org/records/20077230" target="_blank" rel="noreferrer">
              Zenodo record: 20077230
            </a>
            <a href="https://doi.org/10.5281/zenodo.20077230" target="_blank" rel="noreferrer">
              DOI: 10.5281/zenodo.20077230
            </a>
          </div>

          <div className="hero-actions project-actions">
            <button type="button" className="primary-action" onClick={onBack}>
              Back to VEHICLE Cube
            </button>
            <button
              type="button"
              className="secondary-action"
              onClick={() => setActiveOdiKey("oti")}
            >
              Reset ODI Index
            </button>
            <button type="button" className="secondary-action" onClick={onPartnerships}>
              Partnerships Gateway
            </button>
          </div>

          <div className="section-buttons project-mode-buttons" aria-label="VEHICLE-ODI regimes">
            {odiRegimeKeys.map((key) => (
              <button
                key={key}
                type="button"
                className={activeOdiKey === key ? "section-button active" : "section-button"}
                onClick={() => setActiveOdiKey(key)}
              >
                {odiDetails[key].code}
              </button>
            ))}
          </div>

          <div className="metric-row project-metric-row">
            <article>
              <strong>A1-A6</strong>
              <span>debris regimes</span>
            </article>
            <article>
              <strong>OTI</strong>
              <span>orbital tension index</span>
            </article>
            <article>
              <strong>3D</strong>
              <span>earth relation field</span>
            </article>
            <article>
              <strong>ODI</strong>
              <span>decision layer</span>
            </article>
          </div>
        </div>

        <div className="right-panel project-right-panel">
          <div className="cube-card project-visual-card odi-visual-card">
            <div className="node node-a" />
            <div className="node node-b" />

            <div className="odi-badge project-badge">
              <span /> VEHICLE-ODI · Orbital field
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
          </div>

          <article className="info-card project-detail-card" aria-live="polite">
            <span>{activeOdi.code}</span>
            <h3>{activeOdi.title}</h3>
            <h4>{activeOdi.subtitle}</h4>
            <p>{activeOdi.description}</p>
          </article>
        </div>
      </div>
    </section>
  );
}


function CpsHumanScene({ activeKey }) {
  return (
    <div className={`cps-human-stage cps-state-${activeKey}`} aria-hidden="true">
      <div className="cps-field-grid" />
      <div className="cps-zone-ring cps-zone-one" />
      <div className="cps-zone-ring cps-zone-two" />
      <div className="cps-zone-ring cps-zone-three" />
      <span className="cps-field-node node-one" />
      <span className="cps-field-node node-two" />
      <span className="cps-field-node node-three" />
      <span className="cps-field-node node-four" />
      <span className="cps-field-node node-five" />

      <div className="human-rotator-3d">
        <div className="human-model-shell">
          <div className="human-halo" />

          <div className="human-layer human-model-back">
            <div className="human-head" />
            <div className="human-neck" />
            <div className="human-shoulders" />
            <div className="human-torso" />
            <div className="human-arm human-arm-left" />
            <div className="human-arm human-arm-right" />
          </div>

          <div className="human-side human-side-left" />
          <div className="human-side human-side-right" />

          <div className="human-layer human-model-front">
            <div className="human-head" />
            <div className="human-neck" />
            <div className="human-shoulders" />
            <div className="human-torso" />
            <div className="human-arm human-arm-left" />
            <div className="human-arm human-arm-right" />
            <div className="human-axis axis-head" />
            <div className="human-axis axis-torso" />
            <div className="human-axis axis-core" />
            <span className="human-node h-node-one" />
            <span className="human-node h-node-two" />
            <span className="human-node h-node-three" />
            <span className="human-node h-node-four" />
          </div>

          <div className="human-base-orbit" />
        </div>
      </div>
    </div>
  );
}

function CpsScene({ onBack, onPartnerships }) {
  const [activeCpsKey, setActiveCpsKey] = useState("overview");
  const activeCps = cpsDetails[activeCpsKey];

  return (
    <section
      className="hero-section project-section cps-section"
      aria-label="VEHICLE-CPS civil protection project"
    >
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-layer" />

      <div className="hero-content project-content cps-shell">
        <div className="left-panel project-left-panel">
          <div className="eyebrow">
            <span />
            VEHICLE-CPS · Civil Protection Systems · Human nodes under tension
          </div>

          <h1>VEHICLE-CPS</h1>

          <h2>
            Civil Protection Systems for environmental safety through relational coherence.
          </h2>

          <p className="project-lead">
            High-density human environments can be read as structured relational fields.
          </p>

          <p>
            VEHICLE-CPS supports authorized teams with supervised decision support
            for public events, protected areas, stadiums, concerts, emergency drills
            and critical infrastructure environments. It is prevention and coordination,
            not surveillance or automatic coercive action.
          </p>

          <div className="hero-actions project-actions">
            <button type="button" className="primary-action" onClick={onBack}>
              Back to VEHICLE Cube
            </button>
            <button
              type="button"
              className="secondary-action"
              onClick={() => setActiveCpsKey("overview")}
            >
              Reset CPS Overview
            </button>
            <button type="button" className="secondary-action" onClick={onPartnerships}>
              Partnerships Gateway
            </button>
          </div>

          <div className="section-buttons project-mode-buttons" aria-label="VEHICLE-CPS regimes">
            {cpsRegimeKeys.map((key) => (
              <button
                key={key}
                type="button"
                className={activeCpsKey === key ? "section-button active" : "section-button"}
                onClick={() => setActiveCpsKey(key)}
              >
                {cpsDetails[key].code}
              </button>
            ))}
          </div>

          <div className="metric-row project-metric-row">
            <article>
              <strong>P0-P6</strong>
              <span>operational regimes</span>
            </article>
            <article>
              <strong>10K</strong>
              <span>simulation nodes</span>
            </article>
            <article>
              <strong>3D</strong>
              <span>human node model</span>
            </article>
            <article>
              <strong>ETH</strong>
              <span>human supervision</span>
            </article>
          </div>
        </div>

        <div className="right-panel project-right-panel">
          <div className="cube-card project-visual-card cps-visual-card">
            <div className="node node-a" />
            <div className="node node-b" />

            <div className="cps-badge project-badge">
              <span /> VEHICLE-CPS · Human field
            </div>

            <CpsHumanScene activeKey={activeCpsKey} />
          </div>

          <article className="info-card project-detail-card" aria-live="polite">
            <span>{activeCps.code}</span>
            <h3>{activeCps.title}</h3>
            <h4>{activeCps.subtitle}</h4>
            <p>{activeCps.description}</p>
          </article>
        </div>
      </div>
    </section>
  );
}



function SupraAgentScene({ activeKey }) {
  return (
    <div className={`supra-stage supra-state-${activeKey}`} aria-hidden="true">
      <div className="supra-grid" />
      <div className="supra-projection-ring supra-ring-one" />
      <div className="supra-projection-ring supra-ring-two" />
      <div className="supra-projection-ring supra-ring-three" />

      <div className="supra-core-shell">
        <div className="supra-core-glow" />
        <div className="supra-core-cube">
          <div className="supra-core-inner" />
          <span className="supra-core-axis axis-x" />
          <span className="supra-core-axis axis-y" />
        </div>
      </div>

      <span className="supra-node supra-node-e">E</span>
      <span className="supra-node supra-node-i">I</span>
      <span className="supra-node supra-node-a">A</span>
      <span className="supra-node supra-node-r">R</span>
      <span className="supra-node supra-node-v">V</span>

      <div className="supra-link supra-link-e" />
      <div className="supra-link supra-link-i" />
      <div className="supra-link supra-link-a" />
      <div className="supra-link supra-link-r" />
      <div className="supra-link supra-link-v" />

      <div className="supra-twin-node">
        <span />
      </div>

      <div className="supra-status-strip">
        <strong>COHERENCE</strong>
        <em>projection active</em>
      </div>
    </div>
  );
}

function SupraScene({ onBack, onPartnerships }) {
  const [activeSupraKey, setActiveSupraKey] = useState("overview");
  const activeSupra = supraDetails[activeSupraKey];

  return (
    <section
      className="hero-section project-section supra-section"
      aria-label="VEHICLE-SUPRA autonomous AI agents project"
    >
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <div className="grid-layer" />

      <div className="hero-content project-content supra-shell">
        <div className="left-panel project-left-panel">
          <div className="eyebrow">
            <span />
            VEHICLE-SUPRA · Coherence-governed autonomous AI agents
          </div>

          <h1>VEHICLE-SUPRA</h1>

          <h2>
            Coherence-Governed Architecture for Autonomous AI Agents.
          </h2>

          <p className="project-lead">
            AI agents should not only act; they should know when their coherence is at risk.
          </p>

          <p>
            VEHICLE-SUPRA models each agent as a structured node under measurable
            tension. It explores how autonomous systems can detect incoherence,
            guide recovery, and preserve systemic continuity across agent networks.
          </p>

          <div className="project-repository-card" aria-label="VEHICLE-SUPRA release download">
            <strong>Alpha research prototype</strong>
            <a href="/downloads/VEHICLE-SUPRA-v0.1-Professional.zip" download>
              Download VEHICLE-SUPRA v0.1 Professional
            </a>
            <a href="mailto:contact@vehiclesystemslab.com">
              contact@vehiclesystemslab.com
            </a>
          </div>

          <div className="hero-actions project-actions">
            <button type="button" className="primary-action" onClick={onBack}>
              Back to VEHICLE Cube
            </button>
            <button
              type="button"
              className="secondary-action"
              onClick={() => setActiveSupraKey("overview")}
            >
              Reset SUPRA
            </button>
            <a
              className="secondary-action download-action"
              href="/downloads/VEHICLE-SUPRA-v0.1-Professional.zip"
              download
            >
              Download v0.1
            </a>
            <button type="button" className="secondary-action" onClick={onPartnerships}>
              Partnerships Gateway
            </button>
          </div>

          <div className="section-buttons project-mode-buttons" aria-label="VEHICLE-SUPRA architecture modes">
            {supraRegimeKeys.map((key) => (
              <button
                key={key}
                type="button"
                className={activeSupraKey === key ? "section-button active" : "section-button"}
                onClick={() => setActiveSupraKey(key)}
              >
                {supraDetails[key].code}
              </button>
            ))}
          </div>

          <div className="metric-row project-metric-row">
            <article>
              <strong>E.I.A.R.</strong>
              <span>structured state</span>
            </article>
            <article>
              <strong>A0-A6</strong>
              <span>agent regimes</span>
            </article>
            <article>
              <strong>ALPHA</strong>
              <span>research prototype</span>
            </article>
            <article>
              <strong>v0.1</strong>
              <span>downloadable release</span>
            </article>
          </div>
        </div>

        <div className="right-panel project-right-panel">
          <div className="cube-card project-visual-card supra-visual-card">
            <div className="node node-a" />
            <div className="node node-b" />

            <div className="supra-badge project-badge">
              <span /> VEHICLE-SUPRA · Coherence core
            </div>

            <SupraAgentScene activeKey={activeSupraKey} />
          </div>

          <article className="info-card project-detail-card" aria-live="polite">
            <span>{activeSupra.code}</span>
            <h3>{activeSupra.title}</h3>
            <h4>{activeSupra.subtitle}</h4>
            <p>{activeSupra.description}</p>
          </article>
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

  if (view === "supra") {
    return (
      <main className="page-shell">
        <SupraScene
          onBack={() => setView("home")}
          onPartnerships={openPartnerships}
        />
      </main>
    );
  }

  if (view === "cps") {
    return (
      <main className="page-shell">
        <CpsScene
          onBack={() => setView("home")}
          onPartnerships={openPartnerships}
        />
      </main>
    );
  }

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

              <button
                type="button"
                className="secondary-action cps-action"
                onClick={() => setView("cps")}
              >
                VEHICLE-CPS
              </button>

              <button
                type="button"
                className="secondary-action supra-action"
                onClick={() => setView("supra")}
              >
                VEHICLE-SUPRA
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

              <button
                type="button"
                className="metric-card metric-link cps-project-card"
                onClick={() => setView("cps")}
                aria-label="Open VEHICLE-CPS civil protection project"
              >
                <strong>CPS</strong>
                <span>civil protection</span>
              </button>

              <button
                type="button"
                className="metric-card metric-link supra-project-card"
                onClick={() => setView("supra")}
                aria-label="Open VEHICLE-SUPRA project"
              >
                <strong>SUPRA</strong>
                <span>autonomous AI</span>
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
              {active.contact && (
                <div className="contact-block">
                  <small>Official contact</small>
                  <a className="contact-pill" href={`mailto:${active.contact}`}>
                    {active.contact}
                  </a>
                </div>
              )}
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
