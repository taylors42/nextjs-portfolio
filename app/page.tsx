import FirstScreen from "@/components/ui/FirstScreen";
export default function Home() {
  return (
    <main className="flex min-h-screen justify-center items-center">
      <div className="mt-2 mx-4 bg-neutral-800 w-[30rem] h-[20rem] rounded-lg flex items-center justify-center">
        <div className="mb-[10rem]">
          <FirstScreen />
        </div>
      </div>
    </main>
  );
}
