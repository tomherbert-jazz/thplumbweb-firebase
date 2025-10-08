"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { getFaqAnswer } from "@/app/actions";
import type { FAQAnswerOutput } from "@/ai/flows/faq-answer-tool";
import { Loader, AlertCircle, Sparkles, MessageSquare, Send } from "lucide-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";

export default function Faq() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState<FAQAnswerOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!question.trim()) {
      setError("Please enter a question.");
      return;
    }
    setIsLoading(true);
    setError("");
    setResult(null);

    const { answer, error: apiError } = await getFaqAnswer(question);

    if (apiError) {
      setError(apiError);
    } else {
      setResult(answer);
    }
    setIsLoading(false);
  };

  return (
    <section id="faq" className="py-16 sm:py-24">
      <div className="container max-w-3xl">
        <div className="text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question? Ask our AI assistant for a quick answer.
          </p>
        </div>
        <Card className="mt-12 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <MessageSquare className="text-primary"/>
              Ask a Question
            </CardTitle>
            <CardDescription>
              Get instant answers to your plumbing and heating questions.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="text"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                placeholder="e.g., Why is my faucet dripping?"
                disabled={isLoading}
              />
              <Button type="submit" disabled={isLoading}>
                {isLoading ? (
                  <>
                    <Loader className="mr-2 h-4 w-4 animate-spin" />
                    Asking...
                  </>
                ) : (
                   <>
                    Ask <Send className="ml-2 h-4 w-4" />
                   </>
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter>
            <div className="w-full">
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              {result && (
                <div className="space-y-4">
                  <Alert>
                    <Sparkles className="h-4 w-4 text-primary" />
                    <AlertTitle className="font-bold">AI Answer</AlertTitle>
                    <AlertDescription>{result.answer}</AlertDescription>
                  </Alert>
                  {result.contactFormRecommended && (
                    <Alert variant="default" className="bg-blue-50 border-blue-200 dark:bg-blue-950 dark:border-blue-800">
                      <AlertCircle className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      <AlertTitle>Need More Help?</AlertTitle>
                      <AlertDescription>
                        For a more detailed assessment, we recommend contacting us directly.
                        <Button asChild variant="link" className="p-1 h-auto">
                          <Link href="#contact">Request a free quote here.</Link>
                        </Button>
                      </AlertDescription>
                    </Alert>
                  )}
                </div>
              )}
            </div>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
