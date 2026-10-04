"use client";

type Props = {
  id: string;
  title: string;
  url: string;
};

export default function LinkCard({ id, title, url }: Props) {
  // 페이지 이동과 무관하게 전송되도록 sendBeacon 사용
  function recordClick() {
    navigator.sendBeacon(`/api/click/${id}`);
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      onAuxClick={recordClick}
      className="block w-full rounded-xl border border-neutral-300 px-5 py-4 text-center font-medium transition hover:-translate-y-0.5 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
    >
      {title}
    </a>
  );
}
