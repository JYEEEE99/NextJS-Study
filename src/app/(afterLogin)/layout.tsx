import { ReactNode } from "react";

export default function AfterLoginLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <h2>After Login Layout</h2>
      {children}
    </>
  );
}
