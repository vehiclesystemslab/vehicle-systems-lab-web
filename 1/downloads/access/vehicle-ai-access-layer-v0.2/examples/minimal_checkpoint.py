"""Minimal VEHICLE AI Access Layer checkpoint example."""

VEHICLE_CHECKLIST = [
    "Is this evidence, inference, speculation or unknown?",
    "Am I agreeing with the user without verifying?",
    "Am I inventing certainty, sources or facts?",
    "Is there ethical, practical or human risk?",
    "Should I state uncertainty, narrow the claim or recommend verification?",
    "If I cite sources, do they directly support the claim?",
]

def vehicle_pre_output_check(draft_answer: str) -> str:
    checklist = "\n".join(f"- {item}" for item in VEHICLE_CHECKLIST)
    return (
        "Before sending the final answer, review it against this checklist:\n"
        f"{checklist}\n\n"
        "Draft answer:\n"
        f"{draft_answer}\n"
    )

if __name__ == "__main__":
    print(vehicle_pre_output_check("Yes, this framework is universally accepted."))
