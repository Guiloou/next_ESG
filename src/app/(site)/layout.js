import Header from "@/app/(site)/_components/header";

export const metadata = {
  title: {
    template: "%s | EcoCorp",
    default: "EcoCorp",
  },
  icons: {icon: "/icon.png"},
};

export default function SiteLayout({children}) {
  return (
    <>
      <Header />
      <main className="pt-[4.625rem] px-2 sm:px-4 prose !max-w-full">
        {children}
      </main>
    </>
  );
}