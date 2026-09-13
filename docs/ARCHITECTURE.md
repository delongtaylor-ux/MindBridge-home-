# Architecture

## Current web prototype

The current application is a frontend-only React and TypeScript project. Scenario selection and phrase matching run locally in the browser. Responses are deterministic and preconfigured. No health record, user profile, or conversation is transmitted to a backend.

## Proposed competition architecture

1. An Alexa+ conversational experience or qualifying simulator receives a request.
2. A Streamable HTTP MCP server exposes narrowly scoped tools.
3. Application-owned safety rules determine when ordinary wellness support is inappropriate.
4. Amazon Bedrock may interpret intent and compose constrained language.
5. Curated resource services provide support categories or verified resources.

## Proposed MCP tools

| Tool | Purpose |
| --- | --- |
| `daily_check_in` | Collect a brief, non-diagnostic wellness reflection. |
| `grounding_exercise` | Deliver a short, bounded grounding activity. |
| `create_action_plan` | Break an overwhelming problem into manageable steps. |
| `find_support_resource` | Return an appropriate category of human support. |
| `wellness_summary` | Summarize user-provided check-in information without diagnosis. |
| `escalate_support` | Direct urgent situations toward immediate human support. |

## Implementation matrix

| Capability | Status |
| --- | --- |
| Public interactive React prototype | Implemented |
| Responsive conversation interface | Implemented |
| Preconfigured safety demonstration | Implemented |
| Visible MCP tool labels | Simulated |
| Streamable HTTP MCP server | Planned |
| Alexa+ integration | Planned |
| Amazon Bedrock integration | Planned |
| AWS AgentCore or Strands SDK | Planned |
| Live support-resource lookup | Planned |

## Design principle

Generative language should not be the sole authority for safety-sensitive routing. The intended design separates conversational interpretation from deterministic application rules and keeps tool permissions narrow.
