
'use server';

import { z } from 'zod';
import nodemailer from 'nodemailer';
import { answerFAQ } from '@/ai/flows/faq-answer-tool';
import type { FAQAnswerOutput } from '@/ai/flows/faq-answer-tool';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email.' }),
  details: z.string().min(10, { message: 'Details must be at least 10 characters.' }),
});

export type ContactFormState = {
  message: string;
  status: 'idle' | 'success' | 'error';
  errors?: {
    name?: string[];
    email?: string[];
    details?: string[];
  } | null;
}

export async function handleContactForm(
  prevState: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    details: formData.get('details'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Please correct the errors below.',
      status: 'error',
    };
  }
  
  const { name, email, details } = validatedFields.data;
  const recipientEmail = 'tomherbertjazz@gmail.com,thplumbingllc@gmail.com';

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_EMAIL,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  const mailOptions = {
    from: `"${name}" <${process.env.GMAIL_EMAIL}>`,
    to: recipientEmail,
    replyTo: email,
    subject: `New Quote Request from ${name}`,
    html: `
      <h2>New Quote Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Details:</strong></p>
      <p>${details.replace(/\n/g, '<br>')}</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      message: 'Thank you! Your quote request has been sent.',
      status: 'success',
      errors: null,
    };
  } catch (error) {
    console.error('Failed to send email:', error);
    return {
      message: 'Sorry, something went wrong and we couldn\'t send your message. Please try again later.',
      status: 'error',
      errors: null,
    };
  }
}

export async function getFaqAnswer(question: string): Promise<{ answer: FAQAnswerOutput | null; error: string | null }> {
  if (!question || question.trim().length === 0) {
    return { answer: null, error: 'Please enter a question.' };
  }
  try {
    const result = await answerFAQ({ question });
    return { answer: result, error: null };
  } catch (e) {
    console.error(e);
    return { answer: null, error: 'An error occurred while getting the answer. Please try again.' };
  }
}
