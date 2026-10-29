"use client";
import { useState } from "react";

export default function MostrarEsconder() {
const [aberto, setAberto] = useState(false);

return (
<div>
    <button onClick={() => setAberto(!aberto)}>
        {aberto ? "Esconder" : "Ver detalhes"}
    </button>
    {aberto && <p>Feito com HTML, CSS e JS.</p>}
</div>
);

}

