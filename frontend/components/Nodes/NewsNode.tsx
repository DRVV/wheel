'use client';

import { Handle, Position, NodeProps } from '@xyflow/react';

type NewsData = {
  title: string;
  summary: string;
  image: string;   // `/public/...` path or remote URL
  url: string;
};

export default function NewsNode({ data }: NodeProps<NewsData>) {
  return (
    <div className="w-72 rounded-xl bg-white shadow-lg border overflow-hidden">
      {/* ReactFlow connection handles */}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />

      {/* card body */}
      <img
        src={data.image}
        alt={data.title}
        className="h-28 w-full object-cover"
        loading="lazy"
      />
      <div className="p-3 flex flex-col gap-1">
        <h3 className="text-sm font-semibold leading-snug line-clamp-2">
          {data.title}
        </h3>
        <p className="text-xs text-gray-600 line-clamp-3">{data.summary}</p>
        <a
          href={data.url}
          target="_blank"
          rel="noreferrer"
          className="text-xs text-blue-600 hover:underline mt-auto"
        >
          Read full story →
        </a>
      </div>
    </div>
  );
}
