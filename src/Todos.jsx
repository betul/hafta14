import { useMemo } from "react";

function Todos( {yapilacakIsler, isEkle} ) {
    console.log("Todos render oldu");

    return (
      <>
        <h2>Yapılacak İşler</h2>
        
        {yapilacakIsler.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}

        <button onClick={isEkle}>İş Ekle</button>
      </>
    );
}

export default memo(Todos)