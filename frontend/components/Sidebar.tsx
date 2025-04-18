'use client';
import { useSelectedNode } from '@/store/useSelectedNode';
import './Sidebar.css';

const emojiMap = {
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

export default function Sidebar() {
  const { selectedNode } = useSelectedNode();

  if (!selectedNode) return null;

  const { title, summary, reactions = {} } = selectedNode.data;

  return (
    <aside className="sidebar">
      <h2>{title}</h2>
      <p className="summary">{summary}</p>

      <hr />

      <h4>Stakeholder Reactions</h4>
      <ul className="reaction-list">
        {Object.entries(reactions).map(([stakeholder, r]) => (
          <li key={stakeholder}>
            <span className="icon">{stakeholderIcons[stakeholder]}</span>
            <span className="emoji">{emojiMap[r.sentiment]}</span>
            <span className="comment">{r.comment}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
