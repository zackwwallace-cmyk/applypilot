import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const resume = String(body.resumeText || '').toLowerCase()
  if (!resume) return NextResponse.json({ error: 'Resume text is required' }, { status: 400 })

  let query = 'remote coordinator'
  if (resume.includes('hr') || resume.includes('recruit') || resume.includes('onboarding')) query = 'hr coordinator'
  if (resume.includes('payroll'))