import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import { Card } from "@/components/ui/card";

const MindMapNode = ({ title, frameworks }) => (
    <TreeNode
        label={
            <Card className="p-4 text-sm font-semibold bg-white shadow-md rounded-2xl border border-gray-200">
                <div>{title}</div>
                <ul className="mt-1 text-xs text-gray-600 list-disc list-inside">
                    {frameworks.map((f, idx) => (
                        <li key={idx}>{f}</li>
                    ))}
                </ul>
            </Card>
        }
    />
);

export default function AIGovernanceMindMap() {
    return (
        <div className="p-4 overflow-x-auto">
            <Tree
                label={<Card className="p-4 text-lg font-bold bg-blue-100 shadow">AI Governance Themes</Card>}
            >
                <MindMapNode
                    title="Context & Leadership"
                    frameworks={["ISO 42001: 4.1–4.4, 5.1–5.3", "ISO 27002: 5.1, 5.2", "NIST RMF: Govern, Map", "SOC 2: CC1.1–CC1.4", "EU AI Act: Art. 9–10"]}
                />
                <MindMapNode
                    title="AI Risk Management"
                    frameworks={["ISO 42001: 6.1, 6.2, 8.5", "ISO 27002: 5.4, 5.5", "NIST RMF: Map, Measure, Manage", "SOC 2: CC3.1, CC3.2", "EU AI Act: Art. 9–15"]}
                />
                <MindMapNode
                    title="AI System Development Lifecycle"
                    frameworks={["ISO 42001: 8.4, 8.5", "ISO 27002: 8.31", "NIST RMF: Map, Measure", "SOC 2: CC5.1, CC6.6", "EU AI Act: Art. 16–17"]}
                />
                <MindMapNode
                    title="Data Governance & Privacy"
                    frameworks={["ISO 42001: 8.6", "ISO 27002: 8.10–8.12", "NIST RMF: Govern, Manage", "SOC 2: CC6.1–6.3, CC8.1", "EU AI Act: Art. 10"]}
                />
                <MindMapNode
                    title="Monitoring & Performance"
                    frameworks={["ISO 42001: 8.7", "ISO 27002: 8.16", "NIST RMF: Measure", "SOC 2: CC7.2, CC7.3", "EU AI Act: Art. 15"]}
                />
                <MindMapNode
                    title="Third-Party & Supply Chain"
                    frameworks={["ISO 42001: 8.8", "ISO 27002: 5.22", "NIST RMF: Govern, Manage", "SOC 2: CC9.2", "EU AI Act: Art. 28–29"]}
                />
                <MindMapNode
                    title="Legal & Regulatory Compliance"
                    frameworks={["ISO 42001: 5.2, 5.3, 8.10", "ISO 27002: 5.33", "NIST RMF: Govern", "SOC 2: CC1.2, CC4.1", "EU AI Act: Art. 10, 71"]}
                />
                <MindMapNode
                    title="Transparency & Explainability"
                    frameworks={["ISO 42001: 8.3", "ISO 27002: 8.23, 8.26", "NIST RMF: Map, Measure", "SOC 2: CC6.7", "EU AI Act: Art. 13"]}
                />
                <MindMapNode
                    title="Incident Response"
                    frameworks={["ISO 42001: 8.9", "ISO 27002: 5.24", "NIST RMF: Manage", "SOC 2: CC7.5", "EU AI Act: Art. 23"]}
                />
                <MindMapNode
                    title="Audit & Continuous Improvement"
                    frameworks={["ISO 42001: 9.1, 9.2, 10.1", "ISO 27002: 5.36, 5.37", "NIST RMF: Govern", "SOC 2: CC3.3, CC4.2", "EU AI Act: Art. 61–68"]}
                />
                <MindMapNode
                    title="Human Oversight"
                    frameworks={["ISO 42001: 8.2", "ISO 27002: 5.3", "NIST RMF: Govern", "SOC 2: CC1.3", "EU AI Act: Art. 14"]}
                />
                <MindMapNode
                    title="Fairness & Bias Mitigation"
                    frameworks={["ISO 42001: 8.11", "ISO 27002: -", "NIST RMF: Map, Measure", "SOC 2: -", "EU AI Act: Art. 5, 10"]}
                />
            </Tree>
        </div>
    );
}
