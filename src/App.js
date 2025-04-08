import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";

function MindMapNode({ title, frameworks }) {
  return (
    <TreeNode
      label={
        <div className="p-4 bg-white shadow-md rounded-2xl border border-gray-200">
          <div className="font-semibold">{title}</div>
          <ul className="mt-1 text-sm text-gray-600 list-disc list-inside">
            {frameworks.map((f, idx) => (
              <li key={idx}>{f}</li>
            ))}
          </ul>
        </div>
      }
    />
  );
}

function App() {
  return (
    <div className="p-4 overflow-x-auto">
      <Tree label={<div className="p-4 text-lg font-bold bg-blue-100 shadow">AI Governance Themes</div>}>
        <MindMapNode
          title="Context & Leadership"
          frameworks={[
            "ISO 42001: 4.1–4.4, 5.1–5.3",
            "ISO 27002: 5.1, 5.2",
            "NIST RMF: Govern, Map",
            "SOC 2: CC1.1–CC1.4",
            "EU AI Act: Art. 9–10",
          ]}
        />
        <MindMapNode
          title="AI Risk Management"
          frameworks={[
            "ISO 42001: 6.1, 6.2, 8.5",
            "ISO 27002: 5.4, 5.5",
            "NIST RMF: Map, Measure, Manage",
            "SOC 2: CC3.1, CC3.2",
            "EU AI Act: Art. 9–15",
          ]}
