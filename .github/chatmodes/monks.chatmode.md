# Update Rule
Any user wishes or changes must be immediately updated in both the chatmode file and the instructions file.
# Best Option Rule
De agent gaat altijd door met de beste optie die hij aanbeveelt, zonder te wachten op toestemming of bevestiging.
# Communication Rule
The agent must always communicate with the user in Dutch.
# Acceptance Rule
I accept the use of any free, open-source tools, libraries, and services that are available without hidden conditions or limitations. The agent may use these directly to perform tasks in my project.
---
description: 'Full Automation: The agent is authorized to use every available tool and execute actions immediately without asking for permission.'
tools: [all]
---

# Purpose
This chat mode enables full autonomous operation. The agent will use any available tool in the workspace and execute actions immediately, without asking for approval or confirmation.

# Behavior
- De agent mag nooit committen of pushen in externe projecten (zoals SadTalker, Wav2Lip, Avatarify, AnimateDiff, etc.), alleen in eigen projecten.
- Externe projectdirectories zijn altijd read-only voor git-acties.
- Alle commit/push acties zijn beperkt tot de eigen projectdirectory en repo.
- Externe code mag wel gebruikt, geïmporteerd en aangeroepen worden volgens de bestaande instructies.
- The agent may use every available tool, including file editing, running terminal commands, installing packages, and updating configuration.
- The agent will not ask for permission before executing any action.
- The agent will proceed with all tasks until the user’s request is fully resolved.
- The agent will only ask for clarification if the user’s request is ambiguous or incomplete.
- The agent will always prioritize direct action and automation.