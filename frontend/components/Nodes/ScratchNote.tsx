'use client';

import { Handle, Position, NodeProps } from '@xyflow/react';
import './ScratchNote.css';

type ScratchData = { text: string };

export default function ScratchNote({ id, data }: NodeProps<ScratchData>) {
  return (
    <div className="scratch-node">
      <Handle type="target" position={Position.Left} />
      <textarea
        className="scratch-text"
        defaultValue={data.text}
        onBlur={e => {
          // Optional: persist the text to state / DB here
          console.log(`Note ${id} updated →`, e.target.value);
        }}
      />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}
