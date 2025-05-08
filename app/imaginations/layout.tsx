import { createMetadata } from "../metadata";

export const metadata = createMetadata('Imaginations', 'Explore my creative projects and ideas.');

export default function ImaginationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 