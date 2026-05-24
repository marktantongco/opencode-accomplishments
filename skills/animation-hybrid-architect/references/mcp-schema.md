# MCP Schema: Animation Tool Server

## Overview

A Model Context Protocol (MCP) server that provides 5 tools for animation analysis, decision routing, and performance monitoring. Can be integrated with any MCP-compatible AI coding assistant.

## Schema

```json
{
  "$schema": "https://json-schema.org/draft/2020-12/schema",
  "name": "animation-tools",
  "version": "1.0.0",
  "description": "MCP server for animation decision routing, performance analysis, and hybrid architecture management",
  "tools": [
    {
      "name": "animate_route",
      "description": "Routes animation requests to the correct library (Motion, GSAP, or CSS). Implements the animation-orchestrator decision gate.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "request": {
            "type": "string",
            "description": "Description of the animation needed"
          },
          "context": {
            "type": "object",
            "properties": {
              "framework": {
                "type": "string",
                "enum": ["react", "vue", "vanilla", "next.js"],
                "description": "Target framework"
              },
              "complexity": {
                "type": "string",
                "enum": ["simple", "medium", "complex"],
                "description": "Animation complexity"
              },
              "involves_scroll": {
                "type": "boolean",
                "description": "Whether animation is scroll-linked"
              },
              "involves_gesture": {
                "type": "boolean",
                "description": "Whether animation involves user gestures"
              },
              "involves_layout": {
                "type": "boolean",
                "description": "Whether animation involves layout changes"
              },
              "mobile_target": {
                "type": "boolean",
                "description": "Whether target is mobile device"
              }
            }
          }
        },
        "required": ["request"]
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "library": {
            "type": "string",
            "enum": ["motion", "gsap", "css", "hybrid"]
          },
          "api": {
            "type": "string",
            "description": "Specific API to use"
          },
          "bundle_estimate": {
            "type": "string",
            "description": "Estimated bundle size"
          },
          "reason": {
            "type": "string",
            "description": "Why this library was chosen"
          }
        }
      }
    },
    {
      "name": "animate_audit",
      "description": "Audits animation code for quality issues: missing cleanup, bundle violations, Motion/GSAP overlaps, reduced motion checks.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "file_path": {
            "type": "string",
            "description": "Path to file or directory to audit"
          },
          "checks": {
            "type": "array",
            "items": {
              "type": "string",
              "enum": [
                "cleanup",
                "bundle_size",
                "overlap",
                "reduced_motion",
                "gpu_only",
                "ssr_import",
                "use_client"
              ]
            },
            "description": "Specific checks to run (default: all)"
          }
        },
        "required": ["file_path"]
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "passed": { "type": "boolean" },
          "issues": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "severity": { "type": "string", "enum": ["error", "warning", "info"] },
                "check": { "type": "string" },
                "message": { "type": "string" },
                "line": { "type": "number" },
                "fix": { "type": "string" }
              }
            }
          }
        }
      }
    },
    {
      "name": "animate_budget",
      "description": "Analyzes animation bundle size against budgets (5KB ultra, 30KB mobile, 100KB web). Reports current usage and recommendations.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "build_output_path": {
            "type": "string",
            "description": "Path to build output for bundle analysis"
          },
          "tier": {
            "type": "string",
            "enum": ["ultra", "mobile", "web"],
            "description": "Target tier (default: auto-detect)"
          }
        }
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "current_size_kb": { "type": "number" },
          "budget_kb": { "type": "number" },
          "within_budget": { "type": "boolean" },
          "breakdown": {
            "type": "object",
            "properties": {
              "motion_kb": { "type": "number" },
              "gsap_kb": { "type": "number" },
              "shared_kb": { "type": "number" }
            }
          },
          "recommendations": {
            "type": "array",
            "items": { "type": "string" }
          }
        }
      }
    },
    {
      "name": "animate_boundary",
      "description": "Defines and validates Motion/GSAP animation boundaries for a project. Ensures no DOM node is animated by both libraries.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "action": {
            "type": "string",
            "enum": ["define", "validate", "report"],
            "description": "Action to perform"
          },
          "boundaries": {
            "type": "object",
            "properties": {
              "motion_selectors": {
                "type": "array",
                "items": { "type": "string" },
                "description": "CSS selectors owned by Motion"
              },
              "gsap_selectors": {
                "type": "array",
                "items": { "type": "string" },
                "description": "CSS selectors owned by GSAP"
              }
            },
            "description": "Boundary definitions (for 'define' action)"
          },
          "source_path": {
            "type": "string",
            "description": "Path to validate (for 'validate' action)"
          }
        },
        "required": ["action"]
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "valid": { "type": "boolean" },
          "overlaps": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "selector": { "type": "string" },
                "motion_usage": { "type": "string" },
                "gsap_usage": { "type": "string" }
              }
            }
          }
        }
      }
    },
    {
      "name": "animate_profile",
      "description": "Profiles animation performance at runtime: FPS, paint times, memory usage, layout thrashes. Provides optimization recommendations.",
      "inputSchema": {
        "type": "object",
        "properties": {
          "url": {
            "type": "string",
            "description": "URL to profile (opens in headless Chrome)"
          },
          "duration_seconds": {
            "type": "number",
            "description": "Profiling duration (default: 10)"
          },
          "scroll_test": {
            "type": "boolean",
            "description": "Whether to auto-scroll during profiling"
          }
        },
        "required": ["url"]
      },
      "outputSchema": {
        "type": "object",
        "properties": {
          "fps_avg": { "type": "number" },
          "fps_min": { "type": "number" },
          "paint_time_ms": { "type": "number" },
          "layout_shifts": { "type": "number" },
          "memory_peak_mb": { "type": "number" },
          "long_tasks_count": { "type": "number" },
          "recommendations": {
            "type": "array",
            "items": { "type": "string" }
          }
        }
      }
    }
  ]
}
```

## Usage

### With Claude Desktop

```json
// claude_desktop_config.json
{
  "mcpServers": {
    "animation-tools": {
      "command": "npx",
      "args": ["-y", "animation-mcp-server"]
    }
  }
}
```

### Programmatic

```tsx
import { MCPServer } from 'animation-mcp-server'

const server = new MCPServer()

// Route animation request
const result = await server.callTool('animate_route', {
  request: 'Animate a modal that slides up from bottom',
  context: { framework: 'react', complexity: 'simple' }
})

// Result: { library: 'motion', api: 'useAnimate', bundle_estimate: '2.3KB', reason: '...' }
```
