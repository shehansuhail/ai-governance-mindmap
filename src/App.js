import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";

function App() {
  return (
    <div className="p-4 overflow-x-auto">
      <Tree
        label={<div className="bg-blue-200 p-4 rounded-lg font-bold">AI Governance Themes</div>}
      >
        <TreeNode label={<div>Context & Leadership</div>} />
        <TreeNode label={<div>AI Risk Management</div>} />
        <TreeNode label={<div>Data Governance</div>} />
        {/* Add more nodes as needed */}
      </Tree>
    </div>
  );
}

export default App;
