import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const defaultCopyTxt = "Copy";
  const [copiedTxt, setcopiedTxt] = useState(defaultCopyTxt);
  const [length, setLength] = useState(12);
  const [numAllowed, setnumAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let getPass = "";
    let getChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let getNum = "0123456789";
    let getAllowedChar = "!#$%&*+=@[]^_{}~`";
    if (numAllowed) getChar += getNum;
    if (charAllowed) getChar += getAllowedChar;
    for (let i = 1; i <= length; i++) {
      let randomChar = Math.floor(Math.random() * getChar.length + 1);
      getPass += getChar.charAt(randomChar);
    }
    setPassword(getPass);
    setcopiedTxt(defaultCopyTxt)
  }, [length, numAllowed, charAllowed, setPassword, setcopiedTxt]);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,50)
    window.navigator.clipboard.writeText(password)
    setcopiedTxt("Copied");
  }, [password, setcopiedTxt])


  useEffect(()=>{
    passwordGenerator()
  },[length, numAllowed, charAllowed, passwordGenerator]);
  
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-5 my-8 text-orange-500 bg-gray-800">
        <h1 className="text-white text-center my-3">Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button className="outline-none bg-blue-700 text-white px-3 py-1 shrink-1"
          onClick={copyPasswordToClipboard}
          >
            {copiedTxt}
          </button>
        </div>
        <div className="flex text-sm gap-x-4">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={50}
              onChange={(e) => {
                setLength(e.target.value);
              }}
              value={length}
              className="cursor-pointer"
            />
            <label>Length : {length}</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numAllowed}
              id="numberInput"
              onChange={() => {
                setnumAllowed((prev) => !prev);
              }}
            />
             <label htmlFor="number">Numbers</label>
          </div>



          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setcharAllowed((prev) => !prev);
              }}
            />
             <label htmlFor="characters">Characters</label>
          </div>

        </div>
      </div>
    </>
  );
}
export default App;
