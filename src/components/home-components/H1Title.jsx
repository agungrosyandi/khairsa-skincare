export default function H1Title({ children }) {
  return (
    <h1 className="font-DrukMediumTrial text-4xl px-20 tabletMinWidth:text-5xl fullHdMinWidth:text-7xl">
      {children}
    </h1>
  );
}
