import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col items-center px-4 py-16">
      <ThemeToggle />
      <ProfileHeader
        name={profile.name}
        bio={profile.bio}
        image={profile.image}
      />
      <LinkList links={links} />
    </main>
  );
}
