import { Detail, ActionPanel, Action } from "@raycast/api";
import { useState } from "react";

export default function Command() {
  const [qrText, setQrText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(
    "Live camera feed via browser APIs is not supported in Raycast extensions. Consider an alternative approach like capturing an image."
  );

  if (error) {
    return <Detail markdown={`# Error\\n\\n${error}`} />;
  }

  if (qrText) {
    return (
      <Detail
        markdown={`# QR Code Detected\\n\\n${qrText}`}
        actions={
          <ActionPanel>
            <Action.CopyToClipboard title="Copy Text" content={qrText} />
          </ActionPanel>
        }
      />
    );
  }

  return (
    <Detail
      markdown="# QR Code Reader\\n\\nThis extension needs to be modified to capture images using a different method (e.g., a command-line tool)."
      isLoading={false}
    />
  );
}
