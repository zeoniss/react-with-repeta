import React from "react"
import Logo from "./components/Logo"
import paintings from "./paintings.json"
import PaintingList from "./components/PaintingList"
import Panel from "./components/Panel"

const App = () => {
  return (
    <div>
      <Panel>
        <p>Привет</p>
      </Panel>
      <Logo text='Главный компонент-контейнер приложения' />
      <PaintingList paintings={paintings} />
    </div>
  )
}
export default App
