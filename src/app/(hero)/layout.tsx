import Header from "@/components/header";

// 在这个(hero)路由组下的共享这个layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
       <Header />
       {children}
    </>
  );
}
