import "./index.css";
import "./App.css";

function App() {
  return (
    <>
      <div className="flex min-h-screen">
        <aside className="w-full bg-red-900 text-red-200 p-4"> Sidebar </aside>
        <main className="flex-1 bg-gray-50 p-8">AHA!</main>
      </div>
    </>
  );
}

export default App;
