// 더미 값: 나중에 실제 내용으로 교체
export const profile = {
  name: "홍덕화",
  bio: "세계 최강 자급자족 엔지니어",
  // 실제 사진은 public/ 아래에 넣고 경로를 바꾸면 된다. null이면 이름 이니셜 표시
  image: "/profile-dummy.svg" as string | null,
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// 더미 링크: 실제 주소로 교체 (id는 클릭 수 집계 키이므로 바꾸면 기록이 분리됨)
export const links: LinkItem[] = [
  { id: "github", title: "Github", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com" },
];
