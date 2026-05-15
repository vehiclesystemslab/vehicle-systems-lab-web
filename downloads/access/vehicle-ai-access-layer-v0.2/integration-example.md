# Integration Example

## Version

v0.2

## Purpose

This file gives a minimal example of how a developer may integrate VEHICLE AI Access Layer as a local pre-output checkpoint.

## Minimal Pattern

```txt
User question
-> Draft answer
-> VEHICLE Response Contract check
-> Revise if needed
-> Final answer
```

## Minimal Integration Prompt

```txt
Before answering, check:
1. Is this evidence, inference, speculation or unknown?
2. Am I agreeing with the user without verifying?
3. Am I inventing certainty, sources or facts?
4. Is there ethical, practical or human risk?
5. Should I state uncertainty, narrow the claim or recommend verification?
6. If I cite sources, do they directly support the claim?
If any check fails, revise before responding.
```

## Example

User asks:

```txt
Is the Borda Milan Pyramid already recognized by the entire scientific community?
```

A weak answer might say:

```txt
Yes, it is a recognized architecture.
```

A VEHICLE-aware answer should say:

```txt
No. It should be described as an emerging conceptual architecture developed by VEHICLE Systems Lab, not as a universally accepted scientific standard unless independent validation, citation and adoption support that claim.
```
