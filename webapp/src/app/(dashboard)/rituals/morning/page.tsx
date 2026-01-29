"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronRight, Sun, CheckCircle2, Circle, Play, Pause, RotateCcw } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

const morningSteps = [
  {
    id: 1,
    title: "Gratitude Reflection",
    description: "List 3 things you're grateful for today",
    duration: 3,
  },
  {
    id: 2,
    title: "Intention Setting",
    description: "What is the one most important thing you must accomplish today?",
    duration: 2,
  },
  {
    id: 3,
    title: "Mental Model Review",
    description: "Review your current week's mental model and how you'll apply it",
    duration: 5,
  },
  {
    id: 4,
    title: "Visualization",
    description: "Visualize yourself successfully completing today's key priorities",
    duration: 3,
  },
  {
    id: 5,
    title: "Energy Check",
    description: "Rate your energy and plan how to optimize it throughout the day",
    duration: 2,
  },
];

export default function MorningRitualPage() {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const toggleStep = (stepId: number) => {
    if (completedSteps.includes(stepId)) {
      setCompletedSteps(completedSteps.filter(id => id !== stepId));
    } else {
      setCompletedSteps([...completedSteps, stepId]);
    }
  };

  const startStep = (stepId: number, duration: number) => {
    setCurrentStep(stepId);
    setTimer(duration * 60);
    setIsRunning(true);

    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          toggleStep(stepId);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = (completedSteps.length / morningSteps.length) * 100;

  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-zinc-400">
        <Link href="/" className="hover:text-zinc-100">Dashboard</Link>
        <ChevronRight className="h-4 w-4" />
        <span className="text-zinc-100">Morning Ritual</span>
      </div>

      {/* Header */}
      <div className="text-center space-y-4">
        <div className="flex justify-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-yellow-500/10">
            <Sun className="h-8 w-8 text-yellow-500" />
          </div>
        </div>
        <div>
          <h1 className="text-3xl font-bold">Morning Ritual</h1>
          <p className="text-zinc-400 mt-2">Start your day with intention and clarity</p>
        </div>
      </div>

      {/* Progress */}
      <Card className="border-zinc-800 bg-zinc-900/50">
        <CardContent className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-zinc-400">Today&apos;s Progress</span>
            <span className="text-sm font-medium">{completedSteps.length} / {morningSteps.length}</span>
          </div>
          <Progress value={progress} className="h-2 bg-zinc-800" />
        </CardContent>
      </Card>

      {/* Timer Display */}
      {currentStep && timer > 0 && (
        <Card className="border-yellow-500/30 bg-yellow-500/5">
          <CardContent className="p-6 text-center">
            <p className="text-sm text-yellow-400 mb-2">
              {morningSteps.find(s => s.id === currentStep)?.title}
            </p>
            <p className="text-5xl font-mono font-bold text-yellow-500">{formatTime(timer)}</p>
            <div className="flex justify-center gap-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setIsRunning(!isRunning)}
                className="border-yellow-500/30"
              >
                {isRunning ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setTimer(0);
                  setCurrentStep(null);
                  setIsRunning(false);
                }}
                className="border-yellow-500/30"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Steps */}
      <div className="space-y-3">
        {morningSteps.map((step) => {
          const isCompleted = completedSteps.includes(step.id);
          const isCurrent = currentStep === step.id;

          return (
            <Card
              key={step.id}
              className={`border-zinc-800 bg-zinc-900/50 transition-all ${
                isCurrent ? "border-yellow-500/30 ring-1 ring-yellow-500/20" : ""
              }`}
            >
              <CardContent className="p-4">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => toggleStep(step.id)}
                    className="shrink-0"
                  >
                    {isCompleted ? (
                      <CheckCircle2 className="h-6 w-6 text-green-500" />
                    ) : (
                      <Circle className="h-6 w-6 text-zinc-600" />
                    )}
                  </button>

                  <div className="flex-1">
                    <h3 className={`font-medium ${isCompleted ? "text-zinc-500 line-through" : ""}`}>
                      {step.title}
                    </h3>
                    <p className="text-sm text-zinc-400">{step.description}</p>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-sm text-zinc-500">{step.duration} min</span>
                    {!isCompleted && !isCurrent && (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => startStep(step.id, step.duration)}
                        className="border-zinc-700"
                      >
                        <Play className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Complete Button */}
      {completedSteps.length === morningSteps.length && (
        <div className="text-center">
          <Card className="border-green-500/30 bg-green-500/5">
            <CardContent className="p-6">
              <CheckCircle2 className="h-12 w-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-green-400">Ritual Complete!</h3>
              <p className="text-zinc-400 mt-2">You&apos;re ready to conquer the day.</p>
              <Link href="/">
                <Button className="mt-4 bg-green-600 hover:bg-green-700">
                  Back to Dashboard
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
