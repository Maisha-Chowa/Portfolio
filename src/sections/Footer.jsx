import { profile } from "@/data/portfolio-data";

export default function Footer() {
  return (
    <footer className="bg-primary py-8">
      <p className="text-center text-sm text-primary-foreground">
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </p>
    </footer>
  );
}
