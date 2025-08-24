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
  // In a real application, you would use a service like Nodemailer, SendGrid, or Resend, which requires API keys.
  // For now, this action simulates sending an email by logging the data to the server console.
  console.log("New contact form submission:");
  console.log({
    to: personalInfo.contact.email,
    from: formData.email,
    subject: `Message from ${formData.name} via Portfolio`,
    text: formData.message,
  });

  // Simulate network delay for a more realistic user experience
  await new Promise(resolve => setTimeout(resolve, 1000));

  // In a real implementation, you would have success/error handling based on the email service's response.
  // For this simulation, we'll always return success.
  return { success: true };
}
