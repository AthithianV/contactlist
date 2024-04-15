import { useState } from "react";
import Table from "./pages/Table/table";
import Form from "./pages/form/form";

function App() {
  const [showForm, setShowForm] = useState(false);
  const [contact, setContact] = useState({address:{}});

  return (
    <div className="App">
      {showForm && <Form setShowForm={setShowForm} contact={contact} />}
      <Table setShowForm={setShowForm} setContact={setContact} />
    </div>
  );
}

export default App;
