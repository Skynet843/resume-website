import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { firstName, lastName, email, service, phone, message } = body;

    // Configure the transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Use your email service provider
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Send email
    await transporter.sendMail({
      from: email,
      to: process.env.RECEIVER_EMAIL, // Your email to receive messages
      subject: `Contact Form Submission from ${firstName}`,
      text: `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${
        phone ? phone : "no phone number"
      }\nService: ${service}\nMessage: ${message}`,
    });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
