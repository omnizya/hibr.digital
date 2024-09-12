import Footer from "@/atoms/footer";
import Logo from "@/atoms/logo";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center ">
        <h1 className="text-center text-8xl text-orange-500">حِبْرٌ</h1>
        <h2 className={`text-center text-8xl`}>
          Hibr<span className="text-orange-500">.</span>Digital
        </h2>
        <Logo />
        <div className="text-center text-8xl">قريباً</div>
      </main>
      <Footer />
    </div>
  );
}
