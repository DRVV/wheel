'use client';

import { Handle, Position, NodeProps } from '@xyflow/react';
import './NewsNode.css';

type NewsData = {
  title: string;
  summary: string;
  image: string;
  url: string;
};

export default function NewsNode({ data }: NodeProps<NewsData>) {
  return (
    <div className="news-node">
      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />

      <div className="news-image-wrapper">
        <img src={data.image} alt={data.title} className="news-image" />
      </div>

      <div className="news-content">
        <h3 className="news-title">{data.title}</h3>
        <p className="news-summary">{data.summary}</p>
        <a href={data.url} target="_blank" rel="noreferrer" className="news-link">
          Read full story →
        </a>
      </div>
    </div>
  );
}
