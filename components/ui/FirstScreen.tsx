import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

async function getMostUsedLanguage() {
  const response = await fetch(`https://api.github.com/users/taylors42/repos`);
  const data = await response.json();
  const response1 = await fetch(`https://api.github.com/users/taylors42`);
  const data1 = await response1.json();
  console.log(data);
  const languages = data.reduce((acc, repo) => {
    const { language } = repo;
    if (language) {
      acc[language] = (acc[language] || 0) + 1;
    }
    return acc;
  }, {});

  const mostUsedLanguage = Object.keys(languages).reduce((a, b) =>
    languages[a] > languages[b] ? a : b
  );

  return mostUsedLanguage;
}
let language: any = [];
if (language.length > 1) {
  language.pop();
}
getMostUsedLanguage()
  .then((mostUsedLanguage) => language.push(mostUsedLanguage))
  .catch((error) => console.error(error));
export default function FirstScreen() {
  return (
    <header className="flex items-center">
      <div className="flex justify-center items-center gap-2 ">
        <div className="scale-150 mx-2 my-2">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/96550502?s=400&u=15f0af6a189c6887581ad3d9beb06e6ca933214d&v=4" />
            <AvatarFallback>TAY</AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col justify-center items-left">
          <p className="text-white">taylor</p>
          <Badge variant="secondary"> Web Developer</Badge>
        </div>
      </div>
    </header>
  );
}
