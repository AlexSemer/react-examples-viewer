// Next.js App Router API route example (app/api/auth/login/route.ts)
// Handles login, returns JSON

import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, password } = body;

  // Validate, check DB, etc.
  if (!email || password?.length < 6) {
    return NextResponse.json({ error: 'Invalid credentials' }, { status: 400 });
  }

  // Simulate success
  return NextResponse.json({ success: true, user: { email } });
}
