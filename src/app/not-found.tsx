import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6 px-4 text-center">
      <p className="text-8xl font-black text-primary">404</p>
      <h1 className="text-2xl font-bold">Page Not Found</h1>
      <p className="text-muted-foreground max-w-sm">
        Oops — looks like this page doesn&apos;t exist. Let&apos;s get you back home.
      </p>
      <Link href="/" className={cn(buttonVariants(), "rounded-full px-8")}>
        Back to Home
      </Link>
    </div>
  );
}
