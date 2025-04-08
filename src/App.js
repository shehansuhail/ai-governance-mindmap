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
              <li key={idx}>
                <a
                  href={f.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  {f.name}
                </a>
              </li>
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
            { name: "ISO 42001", link: "https://www.iso.org/standard/76557.html" },
            { name: "ISO 27002", link: "https://www.iso.org/standard/27002.html" },
            { name: "NIST RMF", link: "https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final" },
            { name: "SOC 2", link: "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/soc2.html" },
            { name: "EU AI Act", link: "https://ec.europa.eu/info/business-economy-euro/banking-and-finance/financial-services-consumer-protection/financial-services/ai-act_en" }
          ]}
        />
        <MindMapNode
          title="AI Risk Management"
          frameworks={[
            { name: "ISO 42001", link: "https://www.iso.org/standard/76557.html" },
            { name: "ISO 27002", link: "https://www.iso.org/standard/27002.html" },
            { name: "NIST RMF", link: "https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final" },
            { name: "SOC 2", link: "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/soc2.html" },
            { name: "EU AI Act", link: "https://ec.europa.eu/info/business-economy-euro/banking-and-finance/financial-services-consumer-protection/financial-services/ai-act_en" }
          ]}
        />
        <MindMapNode
          title="AI System Development Lifecycle"
          frameworks={[
            { name: "ISO 42001", link: "https://www.iso.org/standard/76557.html" },
            { name: "ISO 27002", link: "https://www.iso.org/standard/27002.html" },
            { name: "NIST RMF", link: "https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final" },
            { name: "SOC 2", link: "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/soc2.html" },
            { name: "EU AI Act", link: "https://ec.europa.eu/info/business-economy-euro/banking-and-finance/financial-services-consumer-protection/financial-services/ai-act_en" }
          ]}
        />
        <MindMapNode
          title="Data Governance & Privacy"
          frameworks={[
            { name: "ISO 42001", link: "https://www.iso.org/standard/76557.html" },
            { name: "ISO 27002", link: "https://www.iso.org/standard/27002.html" },
            { name: "NIST RMF", link: "https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final" },
            { name: "SOC 2", link: "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/soc2.html" },
            { name: "EU AI Act", link: "https://ec.europa.eu/info/business-economy-euro/banking-and-finance/financial-services-consumer-protection/financial-services/ai-act_en" }
          ]}
        />
        <MindMapNode
          title="Monitoring & Performance"
          frameworks={[
            { name: "ISO 42001", link: "https://www.iso.org/standard/76557.html" },
            { name: "ISO 27002", link: "https://www.iso.org/standard/27002.html" },
            { name: "NIST RMF", link: "https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final" },
            { name: "SOC 2", link: "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/soc2.html" },
            { name: "EU AI Act", link: "https://ec.europa.eu/info/business-economy-euro/banking-and-finance/financial-services-consumer-protection/financial-services/ai-act_en" }
          ]}
        />
        <MindMapNode
          title="Third-Party & Supply Chain"
          frameworks={[
            { name: "ISO 42001", link: "https://www.iso.org/standard/76557.html" },
            { name: "ISO 27002", link: "https://www.iso.org/standard/27002.html" },
            { name: "NIST RMF", link: "https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final" },
            { name: "SOC 2", link: "https://www.aicpa.org/interestareas/frc/assuranceadvisoryservices/soc2.html" },
            { name: "EU AI Act", link: "https://ec.europa.eu/info/business-economy-euro/banking-and-finance/financial-services-consumer-protection/financial-services/ai-act_en" }
          ]}
        />
        {/* Add more nodes here with corresponding framework links */}
      </Tree>
    </div>
  );
}

export default App;
