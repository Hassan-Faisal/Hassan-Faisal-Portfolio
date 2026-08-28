// Signature element: an agent orchestration graph.
// Nodes are the real steps of an agentic loop; a signal pulse travels the edges.
// Pure SVG + CSS — no JS — and it collapses to a static diagram under reduced motion.

type Node = {
  id: string;
  x: number;
  y: number;
  label: string;
  sub?: string;
  delay: number;
};

const nodes: Node[] = [
  { id: "in", x: 66, y: 66, label: "PROMPT", delay: 0 },
  { id: "reason", x: 216, y: 168, label: "REASON", sub: "plan", delay: 0.4 },
  { id: "retrieve", x: 74, y: 300, label: "RETRIEVE", sub: "RAG", delay: 0.8 },
  { id: "tool", x: 372, y: 92, label: "TOOL CALL", delay: 0.6 },
  { id: "act", x: 382, y: 286, label: "ACT", delay: 1.0 },
  { id: "out", x: 210, y: 356, label: "RESPOND", delay: 1.2 },
];

// Edge path strings (also reused as offset-path for the travelling signals)
const edges: { d: string; delay: number; signal?: number }[] = [
  { d: "M66,66 C 130,90 150,120 216,168", delay: 0.2, signal: 0 },
  { d: "M216,168 C 150,210 110,250 74,300", delay: 0.5 },
  { d: "M216,168 C 280,140 320,110 372,92", delay: 0.4, signal: 1.1 },
  { d: "M372,92 C 402,150 402,230 382,286", delay: 0.7, signal: 2.0 },
  { d: "M216,168 C 300,200 340,240 382,286", delay: 0.6 },
  { d: "M216,168 C 214,240 212,300 210,356", delay: 0.8, signal: 1.6 },
  { d: "M382,286 C 320,332 258,348 210,356", delay: 0.9 },
  { d: "M74,300 C 120,260 160,220 216,168", delay: 1.0 },
];

export default function AgentGraph() {
  return (
    <div className="relative mx-auto w-full max-w-[440px]">
      <svg
        viewBox="0 0 440 400"
        className="h-auto w-full overflow-visible"
        role="img"
        aria-label="An agent orchestration graph: prompt flows into a reasoning node that retrieves context, calls tools, acts, and responds."
      >
        <defs>
          <linearGradient id="edgeGradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#F97316" />
            <stop offset="60%" stopColor="#A5B4FC" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <linearGradient id="nodeStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FDBA74" />
            <stop offset="100%" stopColor="#F97316" />
          </linearGradient>
          <radialGradient id="halo" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#F97316" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#F97316" stopOpacity="0" />
          </radialGradient>
          <filter id="signalGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="2.4" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Edges */}
        {edges.map((e, i) => (
          <path
            key={`edge-${i}`}
            d={e.d}
            className="edge edge-draw"
            style={{ animationDelay: `${e.delay}s` }}
          />
        ))}

        {/* Travelling signals */}
        {edges
          .filter((e) => e.signal !== undefined)
          .map((e, i) => (
            <circle
              key={`sig-${i}`}
              r="3.6"
              fill="#FFE9D3"
              filter="url(#signalGlow)"
              className="signal"
              style={{
                offsetPath: `path("${e.d}")`,
                animationDelay: `${e.signal}s`,
              }}
            />
          ))}

        {/* Nodes */}
        {nodes.map((n) => (
          <g key={n.id}>
            <circle
              cx={n.x}
              cy={n.y}
              r="30"
              fill="url(#halo)"
              className="node-ring"
              style={{ animationDelay: `${n.delay}s` }}
            />
            <circle
              cx={n.x}
              cy={n.y}
              r="13"
              fill="#0F1218"
              stroke="url(#nodeStroke)"
              strokeWidth="1.5"
            />
            <circle cx={n.x} cy={n.y} r="3.2" fill="#F97316" />
            <text
              x={n.x}
              y={n.y + 30}
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="10"
              letterSpacing="0.5"
              fill="rgba(255,255,255,0.82)"
            >
              {n.label}
            </text>
            {n.sub && (
              <text
                x={n.x}
                y={n.y + 43}
                textAnchor="middle"
                fontFamily="var(--font-mono)"
                fontSize="8"
                fill="rgba(253,186,116,0.7)"
              >
                {n.sub}
              </text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
