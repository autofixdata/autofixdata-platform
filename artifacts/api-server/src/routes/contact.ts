import { Router, type Request, type Response } from "express";
import { Resend } from "resend";

const router = Router();
const resend = new Resend(process.env.RESEND_API_KEY || "re_DWUfgZ7j_4ihhaAFXnBaft2wWf7PBhJ2m");

router.post("/contact", async (req: Request, res: Response): Promise<void> => {
  try {
    // Both forms (Free Trial & Contact) send slightly different bodies, so we grab all potential fields.
    const { name, email, workshop, country, technicians, message, subject } = req.body;

    if (!name || !email) {
      res.status(400).json({ error: "Name and Email are required fields." });
      return;
    }

    const htmlBody = `
      <h2>New Lead Submission from Auto Fix Data</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${workshop ? `<p><strong>Workshop:</strong> ${workshop}</p>` : ""}
      ${country ? `<p><strong>Country:</strong> ${country}</p>` : ""}
      ${technicians ? `<p><strong>Technicians:</strong> ${technicians}</p>` : ""}
      ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
      ${message ? `<p><strong>Message:</strong><br/>${message}</p>` : ""}
    `;

    const { data, error } = await resend.emails.send({
      from: "Autofixdata <contact@car.autofixdata.com>",
      to: ["contact@autofixdata.com"],
      subject: subject || "New Auto Fix Data Form Submission",
      html: htmlBody,
    });

    if (error) {
      console.error("Resend API Error:", error);
      res.status(500).json({ error: error.message });
      return;
    }

    res.status(200).json({ success: true, data });
  } catch (err: any) {
    console.error("Server Error on /contact:", err);
    res.status(500).json({ error: err.message || "Internal server error" });
  }
});

export default router;
