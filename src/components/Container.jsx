export default function Container({ children }) {
  return (
    <div className="relative flex flex-col mx-auto w-screen min-h-screen">
      {children}
    </div>
  );
}
