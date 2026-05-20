import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      message,
    } = body;

    // VALIDATIONS

    if (
      !name ||
      !email ||
      !phone ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message:
            "All fields are required.",
        },
        { status: 400 }
      );
    }

    const transporter =
      nodemailer.createTransport({
        service: "gmail",

        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_PASS,
        },
      });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,

      to: "actornikhilverma@gmail.com",

      subject:
        "New Contact Inquiry - Nikhil Verma",

      html: `
        <div style="
          font-family: Arial;
          padding: 20px;
          background: #0b0b0b;
          color: white;
        ">
          <h2>New Inquiry</h2>

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>Email:</strong> ${email}</p>

          <p><strong>Phone:</strong> ${phone}</p>

          <p><strong>Message:</strong></p>

          <p>${message}</p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message:
        "Message sent successfully.",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message:
          "Something went wrong.",
      },
      { status: 500 }
    );
  }
}