import { Editor } from "./components/Editor";
import { useCVStore } from "./store";

const App = () => {
  const cv = useCVStore((state) => state);
  return (
    <div className="w-full h-full flex flex-row text-text_1 bg-[#ffffff] relative">
      <div className="w-1/2 h-full bg-white">
        <Editor/>
      </div>

      <div className="w-1/2 h-screen bg-gray1 fixed top-0 left-[50%]">
        {cv.namecv}
      </div>

    </div>
  )
}

export default App;
