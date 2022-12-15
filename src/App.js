import CardContainer from "./components/CardContainer";
import { createTheme, NextUIProvider } from "@nextui-org/react"
import './index.css';

const theme = createTheme({
  type: 'dark',
  theme: {
    colors: {
      background: '#1d1d1d',
      text: '#fff',
      myDarkColor: '#ff4ecd'
    },
    space: {},
    fonts: {}
  }
})

function App() {
  return (
      <NextUIProvider theme={theme}>
        <CardContainer/>
      </NextUIProvider>
  );
}

export default App;