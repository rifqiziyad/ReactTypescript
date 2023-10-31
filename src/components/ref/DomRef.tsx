import { useEffect, useRef } from "react";

const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!); // null! is non-null assertion operator. Ketika Anda menggunakan null! setelah suatu nilai, Anda memberi tahu TypeScript bahwa Anda yakin bahwa nilai tersebut tidak akan berisi null atau undefined

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default DomRef;
