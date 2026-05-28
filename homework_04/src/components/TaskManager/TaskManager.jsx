import React from 'react'
import { ErrorBoundary } from "react-error-boundary";
import { Suspense } from 'react';
import TaskBoard from './TaskBoard';

export default function TaskManager() {
  return (
    <ErrorBoundary
     fallbackRender={<p>An error occurred during loading data!</p>}>
        <Suspense>
            <TaskBoard />
        </Suspense>
    </ErrorBoundary>
  )
}
