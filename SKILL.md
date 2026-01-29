---
name: toxic-check
description: Detect exclusionary or problematic language in code. Use when auditing inclusivity.
---

# Toxic Check

Code and comments can contain exclusionary language without intent. This tool scans for problematic terms and suggests alternatives.

**One command. Zero config. Just works.**

## Quick Start

```bash
npx ai-toxic-check ./src/
```

## What It Does

- Scans code and comments for problematic language
- Identifies master/slave, whitelist/blacklist patterns
- Suggests inclusive alternatives
- Reports location and context

## Usage Examples

```bash
# Scan source code
npx ai-toxic-check ./src/

# Scan documentation
npx ai-toxic-check ./docs/
```

## Best Practices

- **Run in CI** - catch issues before merge
- **Update gradually** - don't break everything at once
- **Consider context** - some terms have technical origins
- **Educate the team** - explain why this matters

## When to Use This

- Inclusivity audits
- New project setup
- CI pipeline checks
- Documentation reviews

## Part of the LXGIC Dev Toolkit

This is one of 110+ free developer tools built by LXGIC Studios. No paywalls, no sign-ups, no API keys on free tiers. Just tools that work.

**Find more:**
- GitHub: https://github.com/LXGIC-Studios
- Twitter: https://x.com/lxgicstudios
- Substack: https://lxgicstudios.substack.com
- Website: https://lxgicstudios.com

## Requirements

No install needed. Just run with npx. Node.js 18+ recommended. Needs OPENAI_API_KEY environment variable.

```bash
npx ai-toxic-check --help
```

## How It Works

Scans your code and comments for terms that may be exclusionary or problematic. Uses a curated list plus AI analysis to identify issues and suggest inclusive alternatives.

## License

MIT. Free forever. Use it however you want.
