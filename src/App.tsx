import Details from "page/Details";
import List from "page/List";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <div>
            <header>
              <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
                Learn React
              </a>
            </header>
            <section>
              <Routes>
                <Route path="/details" element={<Details />} />
                <Route path="/list" element={<List />} />
                <Route path="/" element={<List />} />
              </Routes>
            </section>
          </div>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
