require("dotenv").config();

const { sendEmail } = require("../services/emailService");

async function testEmail() {
  try {
    const recipient = process.argv[2];

    if (!recipient) {
      throw new Error("Please provide a recipient email address.");
    }

    const result = await sendEmail({
      to: recipient,
      subject: "VELORA - Email Service Test",
      text: "Your VELORA email service is working successfully.",
      html: `
        <div style="background:#f7f4ef;padding:40px;font-family:Arial,sans-serif;">
          <div style="max-width:500px;margin:auto;background:#ffffff;padding:35px;text-align:center;">

            <h1 style="font-family:Georgia,serif;letter-spacing:6px;color:#252320;">
              VELORA
            </h1>

            <hr style="border:0;border-top:1px solid #ddd5cc;">

            <h2 style="font-family:Georgia,serif;color:#252320;">
              Email Service Activated
            </h2>

            <p style="color:#777;line-height:1.7;">
              Your VELORA email service is working successfully.
            </p>

            <p style="color:#8b7460;">
              Modern femininity. Timeless elegance.
            </p>

          </div>
        </div>
      `
    });

    console.log("Test email sent successfully!");
    console.log("Accepted recipients:", result.accepted);
    console.log("Message ID:", result.messageId);

  } catch (error) {
    console.error("Email test failed:", error.message);
    process.exitCode = 1;
  }
}

testEmail();