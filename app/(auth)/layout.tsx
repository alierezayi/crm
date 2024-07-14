export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center items-center min-h-screen px-3 sm:px-0">
      {children}
    </div>
  );
}
