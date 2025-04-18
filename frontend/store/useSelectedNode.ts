// store/useSelectedNode.ts
import { create } from 'zustand';
import { Node } from '@xyflow/react';

type SelectedNodeState = {
  selectedNode: Node | null;
  setSelectedNode: (node: Node | null) => void;
};

export const useSelectedNode = create<SelectedNodeState>((set) => ({
  selectedNode: null,
  setSelectedNode: (node) => set({ selectedNode: node }),
}));
