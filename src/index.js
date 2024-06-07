import React from "react";
import ReactDOM from "react-dom/client";
import Card from "./components/card";
import ClickCounterButton from "./components/clickCounterButton";
import Table from "./components/table";

const tableItems = [
  { id: 1, nome: "Igues", letra: "A" },
  { id: 2, nome: "Vanessa", letra: "H" },
  { id: 3, nome: "Tiago", letra: "L" },
  { id: 4, nome: "Libian", letra: "V" },
];
const card1 = (
  <Card>
    <h1>
      Rélou Uordi<span style={{ color: "red" }}>!</span>
    </h1>
    <Table
      colunas={[
        { titulo: "id", propriedade: "id" },
        { titulo: "Nome", propriedade: "nome" },
        { titulo: "Letra", propriedade: "letra" },
      ]}
      items={tableItems}
    />
  </Card>
);

const content = (
  <>
    {card1}
    <ClickCounterButton />
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(content);
