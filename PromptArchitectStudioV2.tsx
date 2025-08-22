'use client';
import { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

export default function PromptArchitectStudioV2() {
  const [field, setField] = useState('');
  const [task, setTask] = useState('');
  const [audience, setAudience] = useState('');
  const [tone, setTone] = useState('');
  const [constraints, setConstraints] = useState('');
  const [platform, setPlatform] = useState('');
  const [output, setOutput] = useState('');

  const generatePrompt = () => {
    if (!field || !task || !audience || !tone) {
      toast.warning("Please fill in all required fields.");
      return;
    }

    const basePrompt = `Act as an elite AI systems consultant working with a senior engineer tasked with building a cloud-based, mobile-first construction management platform for Elon Musk’s Design-Build Division.

This platform must seamlessly integrate:
- QuickBooks Online functionality (accounting, invoicing, expense tracking)
- Monday.com and Buildertrend-style project/task workflows
- Excel-style material tracking (editable grids, formulas)

It must support:
- Builder
- Interior Designer
- Architect
- Accountant

Include:
- Modular backend architecture (Supabase or Node/Express)
- PostgreSQL relational DB
- Role-based UI/UX for each discipline
- Real-time syncing and mobile-first layout

Respond like a mentor and structure the output as:

STEP 1: Module Map (list and describe core modules)
STEP 2: Tech Stack (frontend/backend/db/api with rationale)
STEP 3: Database Schema (outline key tables and relationships)
STEP 4: UI Description (dashboard per role)
STEP 5: Integration Logic (simulate QBO, BT, Monday flows)
STEP 6: Layman’s Build Walkthrough (prioritized development roadmap)

Be confident, clear, and no fluff.`;

    setOutput(basePrompt);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(output);
    toast.success("Prompt copied to clipboard!");
  };

  const resetFields = () => {
    setField('');
    setTask('');
    setAudience('');
    setTone('');
    setConstraints('');
    setPlatform('');
    setOutput('');
  };

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-4">
      <Card>
        <CardContent className="space-y-4">
          <h2 className="text-2xl font-bold">👑 Prompt Architect Studio v2</h2>

          <Input placeholder="Expert's field (e.g., architecture, finance)" value={field} onChange={(e) => setField(e.target.value)} />
          <Textarea placeholder="What specific task should the prompt help with?" value={task} onChange={(e) => setTask(e.target.value)} />
          <Input placeholder="Who is the output for? (e.g., client, internal team)" value={audience} onChange={(e) => setAudience(e.target.value)} />
          <Input placeholder="Preferred tone (e.g., persuasive, technical)" value={tone} onChange={(e) => setTone(e.target.value)} />
          <Textarea placeholder="Constraints, tools, or standards (optional)" value={constraints} onChange={(e) => setConstraints(e.target.value)} />
          <Input placeholder="Platform-specific version? (e.g., ChatGPT, MidJourney)" value={platform} onChange={(e) => setPlatform(e.target.value)} />

          <div className="flex gap-2">
            <Button onClick={generatePrompt}>Generate Prompt</Button>
            <Button variant="outline" onClick={resetFields}>Reset</Button>
            {output && <Button variant="secondary" onClick={copyToClipboard}>Copy Prompt</Button>}
          </div>

          {output && (
            <div className="mt-4 p-4 bg-gray-100 rounded whitespace-pre-wrap font-mono text-sm">
              <h3 className="font-bold mb-2">Generated Prompt:</h3>
              <p>{output}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
