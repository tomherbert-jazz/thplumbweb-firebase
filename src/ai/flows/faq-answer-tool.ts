'use server';

/**
 * @fileOverview An AI-powered tool that answers frequently asked questions about plumbing and heating issues.
 *
 * - answerFAQ - A function that answers FAQs.
 * - FAQAnswerInput - The input type for the answerFAQ function.
 * - FAQAnswerOutput - The return type for the answerFAQ function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FAQAnswerInputSchema = z.object({
  question: z.string().describe('The question about plumbing or heating.'),
});

export type FAQAnswerInput = z.infer<typeof FAQAnswerInputSchema>;

const FAQAnswerOutputSchema = z.object({
  answer: z.string().describe('The answer to the question.'),
  contactFormRecommended: z
    .boolean()
    .describe(
      'Whether the user should be routed to the contact form if no satisfactory answer is found.'
    ),
});

export type FAQAnswerOutput = z.infer<typeof FAQAnswerOutputSchema>;

export async function answerFAQ(input: FAQAnswerInput): Promise<FAQAnswerOutput> {
  try {
    return await faqAnswerFlow(input);
  } catch (error: any) {
    console.error("Error in answerFAQ:", error);
    return {
      answer: "An error occurred while getting the answer. Please try again.",
      contactFormRecommended: true,
    };
  }
}

const faqAnswerPrompt = ai.definePrompt({
  name: 'faqAnswerPrompt',
  input: {schema: FAQAnswerInputSchema},
  output: {schema: FAQAnswerOutputSchema},
  prompt: `You are an AI-powered tool that answers frequently asked questions about plumbing and heating issues.

  Answer the following question:

  Question: {{{question}}}

  If you cannot find a satisfactory answer, set contactFormRecommended to true.
  Contact form recommended: {{contactFormRecommended}}`,
});

const faqAnswerFlow = ai.defineFlow(
  {
    name: 'faqAnswerFlow',
    inputSchema: FAQAnswerInputSchema,
    outputSchema: FAQAnswerOutputSchema,
  },
  async input => {
    const {output} = await faqAnswerPrompt({
      ...input,
    });
    return output!;
  }
);
