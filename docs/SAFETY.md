# Safety and privacy boundaries

## Scope

MindBridge Home is designed as a wellness and support-navigation aid. It must not diagnose a mental disorder, recommend medication changes, provide psychotherapy, claim clinical efficacy, or represent itself as an emergency service.

## Escalation

Safety-sensitive requests should bypass routine wellness guidance. In the United States, the experience should direct a person in crisis to call or text 988. If danger is immediate, it should direct the person to call 911 or go to the nearest emergency department. The system should encourage connection with a trusted person when appropriate and never discourage professional care.

## Data minimization

A production implementation should:

- collect only information necessary for the requested task;
- avoid retaining conversation content by default;
- redact sensitive content from operational logs;
- require explicit consent for persistent personalization;
- use access controls and encryption for retained sensitive data;
- provide a clear deletion mechanism; and
- avoid advertising or secondary use of sensitive wellness data.

## Current prototype limitation

The current web prototype uses local, preconfigured interactions. It does not perform a clinical assessment, contact emergency services, find live providers, or execute MCP, Alexa+, or Amazon Bedrock operations.

## Testing priorities

Before a production or clinical pilot, the project requires threat modeling, privacy review, adversarial safety testing, accessibility evaluation, resource accuracy checks, and review by qualified clinical and legal professionals.
