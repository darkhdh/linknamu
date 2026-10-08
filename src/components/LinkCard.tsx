"use client";

type Props = {
  id: string;
  title: string;
  url: string;
  count: number;
  onClick: () => void;
};

export default function LinkCard({ id, title, url, count, onClick }: Props) {
  // 페이지 이동과 무관하게 전송되도록 sendBeacon 사용
  function recordClick() {
    navigator.sendBeacon(`/api/click/${id}`);
    onClick();
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={recordClick}
      onAuxClick={recordClick}
      className="relative block w-full rounded-xl border border-neutral-300 px-5 py-4 text-center font-medium transition hover:-translate-y-0.5 hover:bg-neutral-100 dark:border-neutral-700 dark:hover:bg-neutral-800"
    >
      {title}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-normal text-neutral-500">
        {count}회
      </span>
    </a>
  );
}
