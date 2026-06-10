import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields (Name, Email, Message)." },
        { status: 400 }
      );
    }

    // Simulate database storage / network latency
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Log the submission in the console for reference
    console.log("New Project Request Received:", {
      name,
      email,
      phone: phone || "Not provided",
      company: company || "Not provided",
      message,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({
      success: true,
      message: "Your project specifications have been submitted successfully! We will contact you soon.",
    });
  } catch (error) {
    console.error("Error in contact API route:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
