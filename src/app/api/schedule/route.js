// app/api/schedule/route.js
import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, date, time } = body;
    const errors = {};

    // --- SERVER SIDE VALIDATION ---
    if (!name || name.trim().length < 2) errors.name = "Full name is required";
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.email = "Valid email is required";
    if (!phone || phone.length < 10) errors.phone = "Valid phone number is required";
    if (!time) errors.time = "Time is required";
    
    // Past Date Validation
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time to compare only dates
    
    if (!date) {
      errors.date = "Date is required";
    } else if (selectedDate < today) {
      errors.date = "Date cannot be in the past";
    }

    // Return errors if any exist
    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ errors }, { status: 400 });
    }

    // --- SMTP Logic (Only runs if validation passes) ---
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT),
      auth: { user: process.env.MAIL_USERNAME, pass: process.env.MAIL_PASSWORD },
    });

    // 1. ADMIN EMAIL (Simple & Functional)
    const adminMailOptions = {
      from: `"DIGIELABS System" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🚀 New Appointment Lead from: ${name}`,
      html: `<h3>New Consultation Request</h3><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Date:</strong> ${date} at ${time}</p>`,
    };
    // 2. USER EMAIL (Stunning & Branded)
    const userMailOptions = {
      from: `"DIGIELABS Engineering" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: email,
      subject: `Your Consultation is Confirmed — DIGIELABS`,
      html: `
        <div style="background-color: #020617; padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; color: #ffffff; text-align: center;">
          <div style="max-width: 600px; margin: 0 auto; background: #0f172a; border: 1px solid #1e293b; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);">
            
            <div style="height: 6px; background: linear-gradient(to right, #3b82f6, #6366f1, #a855f7);"></div>
            
            <div style="padding: 40px;">
              <h1 style="margin: 0; font-size: 24px; letter-spacing: -1px; font-weight: 800; color: #ffffff;">DIGIE<span style="color: #6366f1;">LABS</span></h1>
              
              <div style="margin-top: 30px; border-bottom: 1px solid #1e293b; padding-bottom: 30px;">
                <h2 style="font-size: 32px; font-weight: 900; margin: 0; line-height: 1.2;">Booking Confirmed.</h2>
                <p style="color: #94a3b8; font-size: 16px; margin-top: 10px;">We've reserved a session for your technical assessment.</p>
              </div>

              <div style="margin: 30px 0; background: #020617; border-radius: 16px; padding: 25px; border: 1px solid #334155; text-align: left;">
                <p style="margin: 0 0 10px 0; font-size: 12px; text-transform: uppercase; letter-spacing: 2px; color: #6366f1; font-weight: bold;">Session Details</p>
                <p style="margin: 5px 0; font-size: 18px; font-weight: bold; color: #f8fafc;">${name}</p>
                <p style="margin: 5px 0; font-size: 16px; color: #cbd5e1;">📅 ${date}</p>
                <p style="margin: 5px 0; font-size: 16px; color: #cbd5e1;">⏰ ${time} (Virtual Session)</p>
              </div>

              <p style="color: #64748b; font-size: 14px; line-height: 1.6;">
                Our lead engineer will review your request. You will receive a Google Meet link shortly before the scheduled time. 
                Please have your technical requirements or current architecture ready for discussion.
              </p>

              <div style="margin-top: 40px;">
                <a href="https://digielabs.com" style="background: #6366f1; color: #white; padding: 16px 32px; border-radius: 12px; font-weight: bold; text-decoration: none; display: inline-block;">Visit Client Portal</a>
              </div>
            </div>

            <div style="background: #020617; padding: 20px; border-top: 1px solid #1e293b;">
              <p style="margin: 0; font-size: 12px; color: #475569;">&copy; 2026 DIGIELABS Engineering Unit. All rights reserved.</p>
            </div>
          </div>
        </div>
      `,
    };
    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ]);

    return NextResponse.json({ message: 'Success' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}