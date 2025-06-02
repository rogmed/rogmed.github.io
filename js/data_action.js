data_action = [
    {
        title: "Atacar",
        icon: "mixed-swords",
        subtitle: "Cuerpo a cuerpo o a distancia",
        description: "Atacas con un arma o un ataque sin armas",
        reference: "PHB, pgs. 15, 25-26, 362",
        bullets: [
            "<b>Equiparse y desequiparse armas.</b> Como parte de un ataque con arma, puedes equipartela o desequipartela. Puedes hacerlo antes o después del ataque. Equiparte incluye desenvainar o recogerla. Desequipar incluye envainar, guardar o soltarla.",
            "<b>Moverse entre ataques.</b> Si te mueves en tu turno y tienes un rasgo, <i>Ataque Adicional</i>, que te permite hacer varios ataques como parte de la acción de atacar, puedes usar parte del movimiento o todo él para moverte entre esos ataques.",

            "<b>Ataque sin armas</b>. Si tu ataque es sin armas puedes hacer:<ul>"
            + "<li>Daño. Haz una tirada de ataque contra el objetivo. Tu bonificador es tu modificador por Fuerza mas bon. por competencia. Haces daño contundente = 1 + modificador por Fuerza.</li>"
            + "<li>Agarre. Ver <i>Agarre</i>.</li>"
            + "<li>Empujón. Ver <i>Empujar</i>.</li>"
            + "</ul>"
        ]
    },
    {
        title: "Agarre [Atacar]",
        icon: "grab",
        subtitle: "Ataque sin armas",
        description: "Intentas agarrar una criatura",
        reference: "PHB, pg. 360-361, 362.",
        bullets: [
            "El objetivo debe superar una tirada de salvación de Fuerza o Destreza (a su elección) con CD 8 + bon. por fuerza + bon. por competencia",
            "El tamaño del objetivo debe de estar, como mucho, una categoría por encima de la tuya.",
            "Debes tener una mano libre para agarrarlo.",
            "Si tienes éxito, <b>sometes al objetivo al estado <i>agarrado</i></b>"
        ]
    },
    {
        title: "Empujón [Atacar]",
        icon: "hand",
        subtitle: "Ataque sin armas",
        description: "Empuja a una criatura, para derribarla o apartarla de ti.",
        reference: "PHB, pg. 362.",
        bullets: [
            "El objetivo debe superar una tirada de salvación de Fuerza o Destreza (a su elección) con CD 8 + bon. por fuerza + bon. por competencia",
            "El tamaño del objetivo debe de estar, como mucho, una categoría por encima de la tuya.",
            "Si tienes éxito, lo <b>empujas 5 pies o queda <i>derribado</i></b>."
        ]
    },
    {
        title: "Ayudar",
        icon: "telepathy",
        subtitle: "Das ventaja a un aliado",
        description: "Das ventaja a un aliado en una prueba de característica o ataque.",
        reference: "PHB, pg. 363.",
        bullets: [
            "<b>Ayudar en una prueba de característica.</b> Elige una de tus competencias en habilidades o herramientas y un aliado. Ese aliado tiene ventaja en la siguiente prueba de habilidad o herramienta elegida. "
            + "Este beneficio concluye si el aliado no lo usa antes del principio de tu siguiente turno",
            "<b>Ayudar en una tirada de ataque.</b> Distraes a un enemigo a 5 pies o menos de ti, lo que da ventaja a la siguiente tirada de ataque que un aliado haga contra ese enemigo"
            + "Este beneficio concluye al principio de tu siguiente turno"
        ]
    },
    {
        title: "Estabilizar [Ayudar]",
        icon: "first-aid",
        subtitle: "Estabiliza a una criatura con 0 pg",
        description: "",
        reference: "PHB, pg. 29.",
        bullets: [
            "Haz una prueba de Sabiduría (Medicina) con CD 10.",
            "Éxito. La criatura está estable y no tiene que hacer tiradas de salvación contra muerte aunque tenga 0 pg, pero conserva el estado inconsciente.",
            "Si la criatura sufre daño, deja de estar estable y empieza a hacer tiradas de salvación contra muerte otra vez.",
            "Una criatura estable recuperará 1 pg tras 1d4 horas."
        ]
    },
    {
        title: "Buscar",
        icon: "magnifying-glass",
        subtitle: "Usa tu sabiduría",
        description: "",
        reference: "PHB, pg. 363.",
        bullets: [
            "Realizas una prueba de Sabiduría para distinguir algo que no resulta evidente",
            "<b>Medicina</b>. Dolencia o causa de la muerte de una criatura.",
            "<b>Percepción</b>. Criatura u objeto ocultos.",
            "<b>Perspicacia</b>.  Estado mental de una criatura.",
            "<b>Supervivencia</b>. Huellas o alimentos."
        ]
    },
    {
        title: "Correr",
        icon: "sprint",
        subtitle: "Velocidad de movimiento doble",
        description: "",
        reference: "PHB, pg. 365.",
        bullets: [
            "Consigues movimiento adicional igual a tu velocidad, tras aplicar cualquier modificador pertinente",
            "Por ejemplo, si tu velocidad fuera de 30 pies, podrías moverte 60 en un turno en el que corras."
        ]
    },
    {
        title: "Destrabarse",
        icon: "journey",
        subtitle: "Evita ataques de oportunidad",
        description: "Tu movimiento no provoca ataques de oportunidad durante el resto del turno actual.",
        reference: "PHB, pg. 366.",
        bullets: [
        ]
    },
    {
        title: "Escapar",
        icon: "manacles",
        subtitle: "Escapar de un agarre",
        description: "",
        reference: "PHB, pg. 361.",
        bullets: [
            "Para escapar de una agarre, puedes emplear tu acción y para hacer una prueba de Fuerza (Atletismo) o Destreza (Acrobacias) contra la CD para escapar del agarre. Si la superas, pones fin al estado",
            "El estado también termina si quien agarra tiene el estado incapacitado o la distancia entre el objetivo y el agarrado y quien lo agarra supera el alcance del agarre."
        ]
    },
    {
        title: "Esconderse",
        icon: "hood",
        subtitle: "Tratas de ocultarte",
        description: "Tratas de ocultarte",
        reference: "PHB, pg. 367.",
        bullets: [
            "Debes de superar una prueba de Destreza (Sigilo) CD 15 mientras estás en una zona muy oscura o detrás de una cobertura tres cuartos o completa, y deberás de estar fuera de línea de visión de cualquier enemigo; si puedes ver a una criatura, sabrás si te puede ver o no.",
            "Si la superas, tendrás el estado <i>invisible</i> mientras permanezcas oculto. Anota el resultado de tu prueba, que es la CD para que te detecten con Sabiduría (Percepción).",
            "Dejas de estar oculto si: <br><ul><li>haces ruido mas alto que un sususurro</li><li>un enemigo te detecta</li><li>haces una tirada de ataque</li><li>lanzas un conjuro con componente verbal</li><ul>"
        ]
    },
    {
        title: "Esquivar",
        icon: "aura",
        subtitle: "Aumenta tu defensa",
        description: "Focus entirely on avoiding attacks",
        reference: "PHB, pg. 367.",
        bullets: [
            "Hasta el principio de tu siguiente turno, las tiradas de ataque contra ti tendrán desventaja si puedes ver al atacante.",
            "Tendrás ventaja en las tiradas de salvación de Destreza",
            "Pierdes estos beneficios si tienes el estado <l>incapacitado</l> o si tu velocidad es 0"
        ]
    },
    {
        title: "Estudiar",
        icon: "semi-closed-eye",
        subtitle: "Identifica un conjuro activo",
        description: "",
        reference: "PHB, pg. 238, 375.",
        bullets: [
            "Si aun está activo, puedes intentar identificar un conjuro <b>no instantáneo</b> por sus efectos activos observables.",
            "Lleva a cabo una acción de estudiar y supera una prueba de <b>Inteligencia (C. Arcano) con CD 15</b>."
        ]
    },
    {
        title: "Magia",
        icon: "magic-swirl",
        subtitle: "Tiempo de lanzamiento de 1 acción",
        description: "Lanza un conjuro con tiempo de lanzamiento: acción",
        reference: "PHB, pg. 236-237, 364.",
        bullets: [
            "Si el conjuro tiene un tiempo de lanzamiento de 1 minuto o superior, debes de realizar la acción de magia cada turno y mantener concentración mientras lo haces. Si pierdes la concentración el conjuro falla pero no gastas espacio de conjuro.",
            "Durante un turno, solo puedes gastar un espacio de conjuro para lanzar un conjuro. No puedes, por ejemplo, lanzar un conjuro gastando un espacio como acción y otro como acción adicional.",
            "<b>Concentración.</b> Algunos conjuros requieren concentración para permanecer activos. Si pierdes la concentración, el conjuro concluye. Puedes dejar de concentrarte en cualquier momento (no requiere acción).<ul>" +
            "<li><b>Otro efecto de concentración.</b> Pierdes la concentración en un efecto en cuanto comienzas a lanzar otro conjuro que requiera concentración.</li>" +
            "<li><b>Daño.</b> Si sufres daño, debes superar una tirada de salvación de Constitución para mantenerte concentrado. La CD es 10 o la mitad del daño sufrido (redondeando hacia abajo), hasta un máximo de 30.</li>" +
            "<li><b>Incapacitado o muerto.</b> Tu concentración acaba si tienes el estado incapacitado o mueres.</li>" +
            "</ul>"
        ]
    },
    {
        title: "Preparar una acción",
        icon: "stopwatch",
        subtitle: "Elige condición y acción",
        description: "Elige una condición y una reacción en respuesta",
        reference: "PHB, pg. 372.",
        bullets: [
            "Preparas una acción para esperar a que ocurra algo en concreto antes de actuar.",
            "Primero, decide que circunstancia activará tu reacción",
            "Elige la acción que realizarás en respuesta a dicha circunstancia. En vez de una acción puedes elegir un movimiento.",
            "Cuando se produzca la circunstancia de activación, podrás elegir entre usar tu reacción o ignorarla.",
            "Cuando preparas un conjuro, lo lanzas con normalidad (gastando sus recursos), pero retienes su energía y la liberas usando tu reacción cuando se produzca la circunstancia que la desencadene. Solo conjuros con tiempo de lancamiento de 1 acción pueden formar parte de una acción preparada. Exige concentración, que podrás mantener hasta el principio de tu siguiente turno. Si pierdes la concentración, el conjuro se disipa sin efecto."
        ]
    },
    {
        title: "Usar escudo",
        icon: "round-shield",
        subtitle: "Ponerse o quitarse un escudo",
        description: "",
        reference: "PHB, pgs. 219.",
        bullets: [
            "Escudo: Acción de utilizar para ponérselo o quitárselo.",
            "Las armaduras tardan varios minutos en ponérsela o quitársela:" +
            "<ul>" +
            "<li>Armadura ligera: 1 minuto para ponérsela o quitársela.</li>" +
            "<li>Armadura ligera: 5 minutos para ponérsela y 1 para quitársela.</li>" +
            "<li>Armadura ligera: 10 minutos para ponérsela y 5 para quitársela.</li>" +
            "</ul>"
        ]
    },
    {
        title: "Utilizar",
        icon: "snatch",
        subtitle: "Utiliza un objeto",
        description: "",
        reference: "PHB, pg. 376.",
        bullets: [
            "Normalmente interactuas con un objeto mientras haces otra cosa, como cuando desenvainas una espada como parte de una acción de atacar.",
            "Si quieres utilizar un objeto que requiera una acción para ello, tendrás que llevar a cabo la acción de <i>utilizar</i>."

        ]
    },
    {
        title: "Improvisar",
        icon: "juggler",
        subtitle: "Cualquier otra acción",
        description: "Haz cualquier acción que te imagines",
        reference: "PHB, pg. 15.",
        bullets: [
            "Para realizar una acción que no aparezcan en las reglas, tu DM te dirá si esa acción es posible y que tipo de prueba con d20 tienes que realizar (si fuera necesario)."
        ]
    }
]
