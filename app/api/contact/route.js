import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // Parse the incoming request body as JSON
    const { name, email, message } = await req.json();

    // Validate that all fields are provided
    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'All fields are required' }, { status: 400 });
    }

    // Setup Nodemailer Transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // Your Gmail App Password
      },
    });

    // Email Content
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Send email to yourself
      subject: `New Message from Portfolio Website - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Return a success response
    return NextResponse.json({ success: true, message: 'Message sent successfully' });

  } catch (error) {
    // Log the error and return an error response
    console.error('Error sending email:', error);
    return NextResponse.json({ success: false, message: 'Error sending message' }, { status: 500 });
  }
}
