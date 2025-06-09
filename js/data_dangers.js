data_dangers = [
    {
        title: "Asfixia",
        icon: "internal-injury",
        subtitle: "Quedarse sin aire o ahogarse",
        description: "",
        reference: "PHB, pg. 362.",
        bullets: [
            "Puedes aguantar la respiración 1 minuto más tu modificador por Constitución (mínimo 30 segundos) antes de empezar a afixiarte.",
            "Cuando te afixies o te quedes sin aire, sumas 1 nivel de cansancio al final de cada turno.",
            "Cuando recuperes el aliento pierdes todos los niveles de cansancio sumados por la asfixia."
        ]
    },
    {
        title: "Caídas",
        icon: "falling",
        subtitle: "1d6 daño cada 10 pies",
        description: "",
        reference: "PHB, pg. 363.",
        bullets: [
            "Una criatura que sufra una caída recibe 1d6 de daño contundente por cada 10 pies que haya caído antes de golpear el suelo.",
            "Máximo 20d6.",
            "Tendrá el estado <i>derribado</i>, salvo que evite el daño de la caída.",
            "Si cae en agua puede usar su reacción y hacer una prueba de Fuerza (Atletismo) o  Destreza (Acrobacias) con CD 15 para caer bien y reducir el daño a la mitad."

        ]
    },
    {
        title: "Deshidratación",
        icon: "water-drop",
        subtitle: "Cantidades mínimas de agua al día",
        description: "",
        reference: "PHB, pg. 366.",
        bullets: [
            "Las criaturas requieren una cantidad de agua al día en función de su tamaño.",
            "<table>" +
            "<tr style='text-align:left'><th style='width:30%'>Tamaño</th><th style='width:40%'>Agua (l)</th><th style='width:40%'>Agua (galones)</th></tr>" +
            "<tr><td>Diminuto</td><td>1 l</td><td>1/4 galón</td></tr>" +
            "<tr><td>Pequeño</td><td>4 l</td><td>1 galón</td></tr>" +
            "<tr><td>Mediano</td><td>4 l</td><td>1 galón</td></tr>" +
            "<tr><td>Grande</td><td>16 l</td><td>4 galones</td></tr>" +
            "<tr><td>Enorme</td><td>64 l</td><td>16 galones</td></tr>" +
            "<tr><td>Gargantuesco</td><td>256 l</td><td>64 galones</td></tr>" +
            "</table>",
            "Si una criatura bebe menos de la mitad que necesita al día, suma 1 nivel de cansancio al final del día.",
            "El cansancio causado por la deshidratación no puede eliminarse hasta que beba la cantidad completa necesaria al día."
        ]
    },
    {
        title: "Desnutrición",
        icon: "meat",
        subtitle: "Cantidades mínimas de alimento al día",
        description: "",
        reference: "PHB, pg. 366.",
        bullets: [
            "Las criaturas necesitan cierta cantidad de alimentos al día en función de su tamaño.",
            "<table>" +
            "<tr style='text-align:left'><th style='width:30%'>Tamaño</th><th style='width:40%'>Alimentos (kg)</th><th style='width:40%'>Alimentos (libras)</th></tr>" +
            "<tr><td>Diminuto</td><td>125 g</td><td>1/2 libra</td></tr>" +
            "<tr><td>Pequeño</td><td>0,5 kg</td><td>1 libra</td></tr>" +
            "<tr><td>Mediano</td><td>0,5 kg</td><td>1 libra</td></tr>" +
            "<tr><td>Grande</td><td>2 kg</td><td>4 libras</td></tr>" +
            "<tr><td>Enorme</td><td>8 kg</td><td>16 libras</td></tr>" +
            "<tr><td>Gargantuesco</td><td>32 kg</td><td>64 libras</td></tr>" +
            "</table>",
            "Si ingiera menos de la mitad de lo necesario al día debe superar una salvación de Constitución CD 10 o suma 1 nivel de cansancio al final del día.",
            "Si no come durante 5 días, suma automáticamente un nivel de cansancio al final del día y de cada día posterior.",
            "El cansancio causado por desnutrición no puede eliminarse hasta que la criatura coma la cantidad completa de alimentos necesarios al día."
        ]
    },
        {
        title: "Fuego",
        icon: "flame",
        subtitle: "1d4 daño cada turno",
        description: "",
        reference: "PHB, pg. 368.",
        bullets: [
            "Una criatura u objeto que arda sufre 1d4 de daño de fuego al principio de cada turno.",
            "Como acción, puedes apagar el fuego adoptando el estado <i>derribado</i> y rodando por el suelo.",
            "También se extingue si se empapa, se sumerje o se ahoga."
        ]
    },
]
