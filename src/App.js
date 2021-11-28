import React from "react"
import Logo from "./components/Logo"
import paintings from "./paintings.json"
import PaintingList from "./components/PaintingList"
import Panel from "./components/Panel"
import Counter from "./components/Counter"

const App = () => {
  return (
    <div>
      <Counter />
      <Panel>
        <p>Привет</p>
      </Panel>
      <Logo text='Главный компонент-контейнер приложения' />
      <PaintingList paintings={paintings} />
    </div>
  )
}
export default App
