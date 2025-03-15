import clsx from "clsx";

/**
 * 마크다운이나 리치 텍스트에 일관된 타이포그래피 스타일을 적용하는 래퍼 컴포넌트입니다.
 * @author 도형
 */

export function Prose({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        className,
        "prose prose-sm prose-blue max-w-none prose-p:text-secondary prose-headings:text-primary",
      )}
    >
      {children}
    </div>
  );
}
