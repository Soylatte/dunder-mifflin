import { ThemeProvider } from "@material-tailwind/react";
import { Main } from "./components/Main";

export default function Home() {
  return (
    <ThemeProvider>
      <h1>나만의 칵테일을 만들어봐요!</h1>
      <Main />
    </ThemeProvider>
  );

}
