'use client';

import {
  Background,
  Controls,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import NewsNode from '@/components/Nodes/NewsNode';

const nodeTypes = { newsNode: NewsNode } //as const;

/* -------------------------------------------------
 * Tiny, totally‑made‑up news dataset
 * -------------------------------------------------*/
const initialNodes = [
  {
    id: '1',
    type: 'newsNode',
    position: { x: 0, y: 0 },
    data: {
      title: 'Apple unveils M4‑powered MacBook Ultra',
      summary:
        'Cupertino’s newest 2‑nm chip delivers a 30 % performance bump while cutting power draw by half.',
      image: '/images/apple-m4.png',
      url: 'https://example.com/apple-m4',
    },
  },
  {
    id: '2',
    type: 'newsNode',
    position: { x: 400, y: 0 },
    data: {
      title: 'Toyota’s solid‑state battery promises 1 000 km range',
      summary:
        'The prototype pack recharges from 10 % to 80 % in 15 minutes, setting a new bar for EVs.',
      image: '/images/toyota-battery.png',
      url: 'https://example.com/solid-state',
    },
  },
  {
    id: '3',
    type: 'newsNode',
    position: { x: 200, y: 220 },
    data: {
      title: 'Artemis II stacked for moon‑orbit mission',
      summary:
        'NASA completes final checks on Orion and SLS ahead of late‑2025 launch window.',
      image: '/images/artemis.png',
      url: 'https://example.com/artemis-ii',
    },
  },
  {
    id: '4',
    type: 'newsNode',
    position: { x: -350, y: 220 },
    data: {
      title: 'Tokyo Stock Exchange hits record high amid AI rally',
      summary:
        'Semiconductor giants lead the Nikkei 225 past its 1989 peak as investors double down on AI hardware.',
      image: '/images/tse-record.jpg',
      url: 'https://example.com/tse-record',
    },
  },
  {
    id: '5',
    type: 'newsNode',
    position: { x: 550, y: 220 },
    data: {
      title: 'WHO approves first universal flu vaccine',
      summary:
        'Phase III results show 92 % efficacy across all known strains, potentially ending yearly shots.',
      image: '/images/flu-vaccine.jpg',
      url: 'https://example.com/universal-flu',
    },
  },
];

const initialEdges = [
  { id: 'e1-2', source: '1', target: '2', animated: true, label: 'Tech ⇄ Auto' },
  { id: 'e2-3', source: '2', target: '3', animated: true, label: 'Energy ⇄ Space' },
  { id: 'e4-1', source: '4', target: '1', animated: true, label: 'Market reaction' },
];

export default function NewsFlowPage() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);

  return (
    <ReactFlowProvider>
      <main className="h-screen w-full">
      <div style={{ width: '100%', height: '100vh' }}>
        <ReactFlow
          fitView
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          nodeTypes={nodeTypes}
        >
          <Background gap={24} size={1} />
          <Controls />
        </ReactFlow>
        </div>
      </main>
    </ReactFlowProvider>
  );
}
