import { dataCustomer, columns } from "./datas/dataCustomer";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";

function App() {
  return (
    <div className="flex h-screen">
      {/* side bar */}
      <div className="bg-orange-400 w-[25%] h-full"></div>
      {/* side bar */}

      <div className="w-full mx-5">
        <Navbar />
        <div className=" h-full flex gap-5 p-3">
          <div className="w-[80%] ">
            <Banner />
            <div style={{ height: 500, width: "100%" }} className="mt-4">
              <DataGrid rows={dataCustomer} columns={columns} />
            </div>
          </div>
          <div className="w-[20%] bg-green-400">content 2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
