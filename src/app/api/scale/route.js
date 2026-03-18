import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone } = body;

    // 1. Server-Side Validation
    const errors = {};
    if (!name || name.trim().length < 2) errors.name = "Full Name is required";
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) errors.email = "Valid email is required";
    if (!phone || phone.trim().length < 10) errors.phone = "Valid mobile is required";

    if (Object.keys(errors).length > 0) {
      return NextResponse.json({ success: false, errors }, { status: 400 });
    }

    // 2. Transporter - Configured using your exact .env keys
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: parseInt(process.env.MAIL_PORT),
      secure: false, // true for 465, false for 587
      auth: {
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false // Helps with some hosting provider restrictions
      }
    });

    // 3. Email to Admin (Using ADMIN_EMAIL from .env)
    const adminMail = {
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `🚀 New Scale-Up Lead: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
          <h2 style="color: #4f46e5;">New Lead from ReadyToScale</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
        </div>
      `,
    };

    // 4. Confirmation Email to User
    const userMail = {
      from: `"${process.env.MAIL_FROM_NAME}" <${process.env.MAIL_FROM_ADDRESS}>`,
      to: email,
      subject: `Confirmation: We received your request, ${name}!`,
      html: `
        <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; color: #2d3436; max-width: 600px; margin: 0 auto; border: 1px solid #edf2f7; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
      
            <div style="background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%); padding: 50px 20px; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 32px; font-weight: 800; letter-spacing: -1px;">DIGIELABS</h1>
                <div style="height: 2px; width: 40px; background: #ffffff; margin: 15px auto; opacity: 0.5;"></div>
                <p style="color: rgba(255,255,255,0.9); margin-top: 5px; font-size: 13px; text-transform: uppercase; letter-spacing: 3px;">Accelerating Digital Future</p>
            </div>

      <div style="padding: 40px 35px; background-color: #ffffff;">
        <h2 style="color: #1a202c; margin-top: 0; font-size: 24px;">Hi ${name},</h2>
        <p style="font-size: 16px; line-height: 1.8; color: #4a5568;">
          We’ve successfully logged your inquiry for <strong style="color: #4f46e5;">${phone}</strong>. 
          Our automation and development leads are currently reviewing your requirements.
        </p>
        
        <div style="margin: 35px 0; padding: 25px; background-color: #f5f3ff; border-radius: 12px; border-left: 4px solid #7c3aed;">
          <h4 style="margin: 0 0 10px 0; color: #5b21b6; font-size: 16px;">What happens next?</h4>
          <ul style="margin: 0; padding-left: 20px; font-size: 14px; color: #6d28d9; line-height: 1.6;">
            <li>Requirement Analysis (In Progress)</li>
            <li>Custom Proposal Drafting</li>
            <li>Direct Outreach via Email/WhatsApp</li>
          </ul>
        </div>

        <h3 style="font-size: 18px; color: #1a202c; margin: 40px 0 20px; text-align: center; font-weight: 700;">Our Expertise</h3>
        
        <table width="100%" cellspacing="0" cellpadding="0">
          <tr>
            <td style="padding: 15px; border: 1px solid #f1f5f9; border-radius: 10px; width: 48%; background: #ffffff;">
              <strong style="color: #4f46e5; font-size: 14px;">Automation & AI</strong>
              <p style="font-size: 11px; color: #94a3b8; margin: 5px 0;">Google Workspace, Chatbots, & Workflow Systems.</p>
            </td>
            <td width="4%"></td>
            <td style="padding: 15px; border: 1px solid #f1f5f9; border-radius: 10px; width: 48%; background: #ffffff;">
              <strong style="color: #4f46e5; font-size: 14px;">Full-Stack Dev</strong>
              <p style="font-size: 11px; color: #94a3b8; margin: 5px 0;">React, Next.js, Node.js & SaaS Platforms.</p>
            </td>
          </tr>
          <tr><td height="15"></td></tr>
          <tr>
            <td style="padding: 15px; border: 1px solid #f1f5f9; border-radius: 10px; width: 48%; background: #ffffff;">
              <strong style="color: #4f46e5; font-size: 14px;">API & Integrations</strong>
              <p style="font-size: 11px; color: #94a3b8; margin: 5px 0;">Zoho, Salesforce, Zapier & Custom APIs.</p>
            </td>
            <td width="4%"></td>
            <td style="padding: 15px; border: 1px solid #f1f5f9; border-radius: 10px; width: 48%; background: #ffffff;">
              <strong style="color: #4f46e5; font-size: 14px;">Data & Growth</strong>
              <p style="font-size: 11px; color: #94a3b8; margin: 5px 0;">Web Scraping, Python Scripts & Google Ads.</p>
            </td>
          </tr>
        </table>

        <div style="margin-top: 45px; text-align: center; border-top: 1px solid #f1f5f9; padding-top: 30px;">
          <p style="margin-bottom: 15px; font-weight: 600; color: #1e293b; font-size: 14px;">Connect with DIGIELABS</p>
          
          <a href="https://linkedin.com/company/digielabs" style="text-decoration: none; margin: 0 10px; display: inline-block;">
            <span style="background: #f1f5f9; padding: 8px 15px; border-radius: 20px; font-size: 12px; color: #0077b5; font-weight: bold;">LinkedIn</span>
          </a>
          <a href="https://instagram.com/digielabs" style="text-decoration: none; margin: 0 10px; display: inline-block;">
            <span style="background: #f1f5f9; padding: 8px 15px; border-radius: 20px; font-size: 12px; color: #e1306c; font-weight: bold;">Instagram</span>
          </a>
          
          <p style="margin-top: 25px; font-size: 13px; color: #64748b;">
            📍 DIGIELABS India<br>
            📧 <a href="mailto:support@digielabs.com" style="color: #4f46e5; text-decoration: none;">support@digielabs.com</a> | 🌐 <a href="https://digielabs.com" style="color: #4f46e5; text-decoration: none;">digielabs.com</a> |  📞 <a href="tel:+918050739493" style="color: #4f46e5; text-decoration: none;">+91 80507 39493</a>
          </p>
        </div>
      </div>

      <div style="background-color: #f8fafc; padding: 25px; text-align: center; font-size: 11px; color: #94a3b8; letter-spacing: 0.5px;">
        <p>© ${new Date().getFullYear()} DIGIELABS. All rights reserved.</p>
        <p>You received this because you requested a service quote from our website.</p>
      </div>
    </div>
      `,
    };

    // Verify connection before sending
    await transporter.verify();

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMail),
      transporter.sendMail(userMail)
    ]);

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("SMTP Error:", error);
    return NextResponse.json({ 
      success: false, 
      message: "Failed to send email. Check server logs." 
    }, { status: 500 });
  }
}