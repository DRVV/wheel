import { Handle, Position, NodeProps } from '@xyflow/react';

type ScratchNoteData = {
  text: string;
  onSubmitText?: (id: string, text: string) => void;
};

export default function ScratchNote({ id, data }: NodeProps<ScratchNoteData>) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      data.onSubmitText?.(id, e.currentTarget.value);
      e.currentTarget.blur();
    }
  };

  return (
    <div style={{ width: 220, background: '#fffbe7', border: '1px solid #e2c55b', borderRadius: 10 }}>
      <Handle type="target" position={Position.Top} />
      <textarea
        style={{ width: '100%', minHeight: 120, padding: 8 }}
        defaultValue={data.text}
        onKeyDown={handleKeyDown}
      />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
}
