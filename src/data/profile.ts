export const profile = {
  name: "홍덕화",
  bio: "차체 엔지니어 | 요즘에는 AI 개발에 관심이 많아요",
  // public/ 아래 파일 경로. null이면 이름 이니셜 표시
  image: "/profile.png" as string | null,
};

export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

// id는 클릭 수 집계 키이므로 바꾸면 기록이 분리됨
export const links: LinkItem[] = [
  { id: "github", title: "🐙 Github", url: "https://github.com/darkhdh" },
  { id: "blog", title: "📝 블로그", url: "https://blog.naver.com/hong-alpha" },
  { id: "email", title: "✉️ 이메일", url: "mailto:darkhdh@gmail.com" },
];
