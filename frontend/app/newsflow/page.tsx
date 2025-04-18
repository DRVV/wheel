'use client';


import {
  Background,
  Controls,
  ReactFlow,
  ReactFlowProvider,
  useEdgesState,
  useNodesState,
  Connection,
  OnConnectStartParams,
  useReactFlow
} from '@xyflow/react';
import { useCallback, useRef } from 'react';

import '@xyflow/react/dist/style.css';

import NewsNode from '@/components/Nodes/NewsNode';
import ScratchNote from '@/components/Nodes/ScratchNote';

const nodeTypes = {
  newsNode: NewsNode,
  scratchNote: ScratchNote,
} as const;



// const nodeTypes = { newsNode: NewsNode } //as const;

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

// Generate unique IDs
let idCounter = 1000;
const getId = () => `${idCounter++}`;

const NewsFlowPage = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const connectingNodeId = useRef<string | null>(null);
  const { screenToFlowPosition } = useReactFlow();


  // Capture the source node ID on connect start
  const onConnectStart = useCallback((_: MouseEvent, params: OnConnectStartParams) => {
    connectingNodeId.current = params.nodeId;
  }, []);

  // Handle edge drop on canvas
  const onConnectEnd = useCallback(
    (event, connectionState) => {
      // when a connection is dropped on the pane it's not valid
      if (!connectionState.isValid) {
        // we need to remove the wrapper bounds, in order to get the correct position
        const id = getId();
        const { clientX, clientY } =
          'changedTouches' in event ? event.changedTouches[0] : event;
        const newNode = {
          id,
          position: screenToFlowPosition({
            x: clientX,
            y: clientY,
          }),
          data: { label: `Node ${id}` },
          origin: [0.5, 0.0],
          type: 'scratchNote',
        };
 
        setNodes((nds) => nds.concat(newNode));
        setEdges((eds) =>
          eds.concat({ id, source: connectionState.fromNode.id, target: id }),
        );
      }
    },
    [screenToFlowPosition],
  );

  // Handle standard connections
  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (

    <div style={{ width: '100%', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnectStart={onConnectStart}
        onConnectEnd={onConnectEnd}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background gap={24} size={1} />
        <Controls />
      </ReactFlow>
    </div>

  );
};

const NewsFlowPageWrapper: React.FC = () => {
  return (
    <ReactFlowProvider>
      <NewsFlowPage />
    </ReactFlowProvider>
  );
}

export default NewsFlowPageWrapper;