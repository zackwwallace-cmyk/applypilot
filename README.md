# ApplyPilot

Resume-based job finder and ATS resume tailoring MVP.

## Core idea

Upload or paste a resume, paste a job description, then get:

- resume-based job search profile
- ATS match score
- overqualified/easy-win score
- keyword gaps
- red flags
- tailored ATS resume
- short cover letter

## Safety rule

This app does not auto-submit applications, bypass CAPTCHAs, create fake accounts, or lie on resumes. It helps users apply faster while keeping the user in control.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Add your OpenAI API key to `.env.local` only. Never commit it.

```bash
OPENAI_API_KEY=your_new_key_here
```

Then open `http://localhost:3000`.
