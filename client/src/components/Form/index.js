import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function RemainingChar(props) {
  return (
    <div className="text-muted" style={{ fontStyle: "italic" }}>
      <p> {props.remainingCharCount} characters left....</p>
    </div>
  );
}
