'use client';
import { useState } from 'react';
import { Handle, Position, NodeProps } from '@xyflow/react';
import './NewsNode.css';

type Reaction = {
    sentiment: 'positive' | 'neutral' | 'negative';
    comment: string;
  };
  
type NewsData = {
  title: string;
  summary: string;
  image: string;
  url: string;
  reactions?: {
    shareholder?: Reaction;
    bank?: Reaction;
    partner?: Reaction;
    client?: Reaction;
  };
};

const emojiMap: Record<Reaction, string> = {
  positive: '😊',
  neutral: '😐',
  negative: '😠',
};

const stakeholderIcons = {
  shareholder: '💹',
  bank: '🏦',
  partner: '🤝',
  client: '🧑‍💼',
};

export default function NewsNode({ data }: NodeProps<NewsData>) {
    const { reactions = {} } = data;
    const [expanded, setExpanded] = useState(false);
  
    return (
      <div className={`news-node ${expanded ? 'expanded' : ''}`}>
        <Handle type="target" position={Position.Left} />
  
        <div className="news-image-wrapper">
          <img src={data.image} alt={data.title} className="news-image" />
        </div>
  
        <div className="news-content">
          <h3 className="news-title">{data.title}</h3>
          <p className="news-summary">{data.summary}</p>
          <a href={data.url} target="_blank" rel="noreferrer" className="news-link">
            Read full story →
          </a>
  
          <div className="reaction-toggle" onClick={() => setExpanded(!expanded)}>
            {expanded ? '▲ Hide Reactions' : '▼ Show Reactions'}
          </div>
        </div>
  
        {expanded && (
          <div className="reaction-panel">
            {Object.entries(reactions).map(([stakeholder, r]) => (
              <div key={stakeholder} className="reaction-entry">
                <span className="icon">{stakeholderIcons[stakeholder]}</span>
                <span className="emoji">{emojiMap[r.sentiment]}</span>
                <span className="comment">{r.comment}</span>
              </div>
            ))}
          </div>
        )}
  
        <Handle type="source" position={Position.Right} />
      </div>
    );
  }