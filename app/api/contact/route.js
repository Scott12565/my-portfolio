import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // Your App Password
      },
    });

    // Email Content
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Send email to yourself
      subject: `New Message from Portfolio Website - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send Email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Message sent successfully" });

  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ success: false, message: "Error sending message" }, { status: 500 });
  }
}
