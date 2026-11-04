# Product Foundation: Band Studio OS (Working Title)

## 1. Executive Summary
Band Studio OS is an AI-powered control room and operating system designed for emergent, independent music bands (with an initial focus on the rock/indie scene). It centralizes and automates content creation, social media marketing, merchandising, and logistical management. The core value proposition is "doing more, doing better, with less"—allowing low-budget, time-poor artists to generate professional-grade campaigns and workflows without the need to hire expensive industry professionals or endure endless internal friction.

## 2. Target Market & Core Philosophy
*   **Target Persona:** Emergent bands operating with minimal budgets, often relying on volunteer effort from one or two "active" band members. 
*   **The Authenticity Mandate:** The platform must navigate the "Authenticity Trap." Indie/rock scenes reject overly sanitized, generic corporate aesthetics. The AI must amplify a band's unique grit and subcultural identity rather than overwriting it with polished perfection.
*   **The Problem:** Fragmented tools, amateur visual output, time-consuming promotional tasks, and internal band politics that slow down decision-making.

## 3. The Identity Studio (Brand Context & Onboarding)
The onboarding process is not a simple form; it is a deep context-gathering engine that acts as the persistent "brain" of the AI.
*   **Context Inheritance Architecture:** 
    *   *Base Layer:* Global identity, core logos, and fundamental aesthetic rules.
    *   *Campaign Overrides:* Temporary visual/strategic rules applied to specific sub-contexts (e.g., a specific album launch, a themed tour).
*   **The "Grit" Parameter:** A foundational UI slider (ranging from "DIY Basement" to "Stadium Polish") that dictates the intentional injection of noise, color degradation, or erratic pacing in generated assets.
*   **Negative Prompting (The Anti-Moodboard):** Bands define their aesthetic by establishing what they *despise* (e.g., uploading rival flyers or hated fonts), creating strict boundaries that prevent generic AI outputs.
*   **Sonic-to-Visual Fingerprinting:** Translating raw audio uploads (e.g., distortion levels, BPM) into visual design tokens.
*   **The Lore Repository:** A database for band micro-details, inside jokes, and specific gear photos, allowing the AI to plant authentic "easter eggs" in marketing materials.

## 4. Multi-Player Dynamics (The Consensus Engine)
Bands operate as chaotic democracies. The UI is designed to reduce internal friction and streamline approvals.
*   **Role-Based Workspaces:** Distinguishing between "Drivers" (members who generate and tweak campaigns) and "Reviewers" (members who just vote/approve).
*   **Asynchronous Voting:** When the AI generates marketing variants, they are pushed via notification to the band. Members "swipe-to-vote" to establish a consensus, eliminating messy group chat debates.
*   **Iterative Branching:** If a member vetoes a specific element, the AI generates a micro-revision (e.g., changing only a font) without disrupting the agreed-upon foundation.

## 5. MVP Focus: The Gig Promotion Lifecycle
To guarantee immediate ROI, the V1 Minimum Viable Product focuses purely on solving the recurring pain point of gig promotion.
*   **The Staged Campaign Wizard:** A guided, human-in-the-loop pipeline rather than a risky "one-click" generator. The AI proposes, the user curates, and the AI executes.
*   **Phase 1: Campaign Setup:** Ingesting venue data (maps links, photos) and establishing the core messaging and editorial schedule.
*   **Phase 2: Pre-Gig Blitz:** Generating aligned assets across formats (print flyers, 9:16 IG stories, programmatic audio-synced video teasers that bypass the high compute costs of generative video).
*   **Phase 3: Post-Gig Momentum:** Handling the post-show media dump to create highlight reels and "thank you" carousels.

## 6. Technical Architecture & Cost Management
*   **Client-Side Edge Triage:** To solve the bottleneck of uploading gigabytes of raw post-gig footage, the app uses on-device, lightweight ML to cull unusable media (black frames, blurry shots, clipped audio) locally. Only the top viable percentage is uploaded to the cloud for heavy AI processing.
*   **Pre-Processing Injection:** The band's identity context is injected into AI prompts *before* generation, minimizing API costs and latency compared to post-generation validation.
*   **Decoupled Distribution (V1):** For the MVP, the "brain" (asset generation) is separated from the "pipes" (direct social publishing). The system outputs a fully structured, ready-to-publish campaign folder (e.g., synced to a cloud drive), bypassing complex OAuth flows and API rate limits for early-stage development.

## 7. Future Horizons (Post-MVP)
*   **Automated Booking & Negotiation (Human-in-the-Loop):** RAG-based systems drafting localized outreach to venues, held in a `pending_review` state for manual dispatch.
*   **Direct API Social Publishing:** Native integrations for automated scheduling and cross-channel posting.
*   **Operations & Logistics:** Auto-generating technical riders, stage plots, and localized setlists based on venue profiles.
*   **Scene-Level Meta-Learning:** Aggregating anonymized performance data across the platform to optimize marketing strategies for bands lacking their own statistical data volume.
*   **Output Monetization:** Exploring revenue streams beyond SaaS subscriptions, such as taking micro-commissions on AI-facilitated merch drop-shipping or gig bookings.