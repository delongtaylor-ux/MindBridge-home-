# MindBridge Home

MindBridge Home is an Alexa+-focused wellness and support-navigation concept created for the Build, Ship, Shape Amazon Developer Hackathon.

**Live prototype:** https://mindbridge-home-39dm6h.v2.appdeploy.ai/

## Current implementation status

This repository contains the complete source for the public scripted web prototype. The interface demonstrates intended conversation flows and displays the names of proposed Model Context Protocol (MCP) tools.

The following are **simulated in the current prototype**:

- MCP tool calls
- Alexa+ interaction
- Amazon Bedrock responses
- Live support-resource lookup

A live Alexa+ experience, Streamable HTTP MCP server, Amazon Bedrock integration, AWS AgentCore integration, and Strands SDK integration remain planned work. They must not be treated as operational until implemented and verified.

## What the prototype demonstrates

- Nonclinical wellness check-in
- Sensory grounding exercise
- Small-step action planning
- Human-support category navigation
- Urgent-language escalation to 988 and 911 information
- Responsive desktop and mobile presentation
- Clear non-diagnostic boundaries

## Safety position

MindBridge Home is not a diagnostic tool, treatment service, therapist, or emergency service. It does not replace licensed care. The current responses are preconfigured demonstrations. In the United States, people experiencing a suicidal or mental-health crisis can call or text 988. If danger is immediate, call 911 or go to the nearest emergency department.

See [Safety and privacy boundaries](docs/SAFETY.md).

## Run locally

Requirements:

- Node.js 20 or newer
- npm 10 or newer

Install and run:

~~~bash
npm install
npm run dev
~~~

Open the local URL printed by Vite.

Create and preview a production build:

~~~bash
npm run build
npm run preview
~~~

## Verification

Manual, behavior-focused tests are provided in [tests/tests.txt](tests/tests.txt). They cover action planning, urgent-language escalation, mobile support flows, conversation reset, and the architecture-information view.

## Project structure

~~~text
.
├── docs/
│   ├── ARCHITECTURE.md
│   └── SAFETY.md
├── src/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── tests/
│   └── tests.txt
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
~~~

## Current prototype technology

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Intended competition architecture

~~~text
Alexa+ experience or qualifying simulator
        |
Streamable HTTP MCP server
        |
Deterministic safety and routing rules
        |
Amazon Bedrock constrained language layer
        |
Curated support-resource services
~~~

See [Architecture and implementation matrix](docs/ARCHITECTURE.md).

## Privacy approach

The proposed production system should minimize sensitive data collection, avoid retaining conversation content by default, redact operational logs, and require explicit consent for persistent personalization or trusted-contact workflows.

## License

This project is open source under the [MIT License](LICENSE).
