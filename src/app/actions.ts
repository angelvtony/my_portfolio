"use server";

import { z } from "zod";
import { personalInfo } from "@/lib/data";

const formSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string(),
});

export async function sendEmail(formData: z.infer<typeof formSchema>) {
  // This is a placeholder for a real email sending service.
  // In a real application, you would use a service like Nodemailer, SendGrid, or Resend.
  console.log("Sending email with the following data:");
  console.log({
    to: personalInfo.contact.email,
    from: formData.email,
    subject: `Message from ${formData.name} via Portfolio`,
    text: formData.message,
  });

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  // Simulate a successful response
  return { success: true };
}
