import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Simulate database ingress / connection pool latency (600ms)
    await new Promise((resolve) => setTimeout(resolve, 600));

    // Validation or simulated errors based on input values
    if (body.email && body.email.toLowerCase().includes("error")) {
      return NextResponse.json(
        { success: false, message: "Security Node: Ingress packet rejected due to validation failure." },
        { status: 400 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Architectural consultation request queued successfully.",
      payload: {
        timestamp: new Date().toISOString(),
        id: `proposal_${Math.floor(100000 + Math.random() * 900000)}`,
        ...body
      }
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Ingress Failure: Internal Server Error" },
      { status: 500 }
    );
  }
}
