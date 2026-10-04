type Props = {
  name: string;
  bio: string;
  image: string | null;
};

export default function ProfileHeader({ name, bio, image }: Props) {
  return (
    <header className="flex flex-col items-center text-center">
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={`${name} 프로필 사진`}
          className="h-44 w-44 rounded-full object-cover"
        />
      ) : (
        <div
          aria-hidden
          className="flex h-44 w-44 items-center justify-center rounded-full bg-neutral-200 text-5xl font-semibold text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300"
        >
          {name.charAt(0)}
        </div>
      )}
      <h1 className="mt-6 text-2xl font-bold">{name}</h1>
      <p className="mt-2 text-neutral-600 dark:text-neutral-400">{bio}</p>
    </header>
  );
}
