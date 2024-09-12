import Footer from "@/atoms/footer";
import Logo from "@/atoms/logo";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 items-center row-start-2">
        <header className="">
          <h1 className="text-center text-8xl text-orange-500" dir="rtl">
            حِبْرٌ<span className="text-white font-sans">.</span>
            <span className="text-2xl text-white">digital</span>
          </h1>
        </header>
        <Logo />
        <div className="text-center text-4xl">قريباً</div>
      </main>
      <div> </div>
      <Footer />
    </div>
  );
}
