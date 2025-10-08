
'use server';

import { z } from 'zod';
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

  // Here you would typically send an email
  console.log('Contact Form Data:', validatedFields.data);

  return {
    message: 'Thank you! Your quote request has been sent.',
    status: 'success',
    errors: null,
  };
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
