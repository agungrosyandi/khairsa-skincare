export default function H1Title({ children }) {
  return (
    <h1 className="font-DrukMediumTrial text-5xl px-10 tabletMinWidth:text-6xl desktopMinWidth:text-7xl">
      {children}
    </h1>
  );
}
