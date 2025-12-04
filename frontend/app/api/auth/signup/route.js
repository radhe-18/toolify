// import { NextResponse } from 'next/server';

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const response = await fetch('http://localhost:5005/api/auth/register', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(body),
//     });

//     const data = await response.json();

//     if (response.ok) {
//       return NextResponse.json(data);
//     } else {
//       return NextResponse.json(data, { status: response.status });
//     }
//   } catch (error) {
//     return NextResponse.json({ message: 'Internal server error' }, { status: 500 });
//   }
// }
import { NextResponse } from "next/server";

const API = process.env.NEXT_PUBLIC_API_URL || "https://toolify-1-gateway.onrender.com";

export async function POST(request) {
  try {
    const body = await request.json();

    const response = await fetch(`${API}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(data);
    } else {
      return NextResponse.json(data, { status: response.status });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error", error: error.message },
      { status: 500 }
    );
  }
}
