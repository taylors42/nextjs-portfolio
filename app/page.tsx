import FirstScreen from "@/components/ui/FirstScreen";
export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center ">
      <div className="mt-2 mx-4 bg-neutral-800 w-[32rem] h-[22rem] rounded-lg flex items-center">
        <div className="my-[2rem] mx-[2rem]">
          <FirstScreen />
        </div>
      </div>
    </main>
  );
}
