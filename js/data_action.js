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
        title: "Agarre",
        icon: "grab",
        subtitle: "Ataque sin armas",
        description: "Intentas agarrar una criatura",
        reference: "PHB, pg. 362.",
        bullets: [
            "El objetivo debe superar una tirada de salvación de Fuerza o Destreza (a su elección) con CD 8 + bon. por fuerza + bon. por competencia",
            "El tamaño del objetivo debe de estar, como mucho, una categoría por encima de la tuya.",
            "Debes tener una mano libre para agarrarlo.",
            "Si tienes éxito, <b>sometes al objetivo al estado <i>agarrado</i></b>"
        ]
    },
    {
        title: "Empujón",
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
        title: "Magia",
        icon: "magic-swirl",
        subtitle: "Tiempo de lanzamiento de 1 acción",
        description: "Lanza un conjuro con tiempo de lanzamiento: acción",
        reference: "PHB, pg. 236-237, 364.",
        bullets: [
            "Si el conjuro tiene un tiempo de lanzamiento de 1 minuto o superior, debes de realizar la acción de magia cada turno y mantener concentración mientras lo haces. Si pierdes la concentración el conjuro falla pero no gastas espacio de conjuro.",
            "Durante un turno, solo puedes gastar un espacio de conjuro para lanzar un conjuro. No puedes, por ejemplo, lanzar un conjuro gastando un espacio como acción y otro como acción adicional.",
            "<b>Concentración.</b> Algunos conjuros requieren concentración para permanecer activos. Si pierdes la concentración, el conjuro concluye. Puedes dejar de concentrarte en cualquier momento (no requiere acción).<ul>"+
            "<li><b>Otro efecto de concentración.</b> Pierdes la concentración en un efecto en cuanto comienzas a lanzar otro conjuro que requiera concentración.</li>"+
            "<li><b>Daño.</b> Si sufres daño, debes superar una tirada de salvación de Constitución para mantenerte concentrado. La CD es 10 o la mitad del daño sufrido (redondeando hacia abajo), hasta un máximo de 30.</li>"+
            "<li><b>Incapacitado o muerto.</b> Tu concentración acaba si tienes el estado incapacitado o mueres.</li>"+
            "</ul>"
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
        title: "Escape",
        icon: "manacles",
        subtitle: "Escape a grapple",
        description: "Escape a grapple",
        reference: "PHB, pg. 195.",
        bullets: [
            "To escape a grapple, you must succeed on a Strength (Athletics) or Dexterity (Acrobatics) check contested by the grappler's Strength (Athletics) check.",
            "Escaping other conditions that restrain you (such as manacles) may require a Dexterity or Strength check, as specified by the condition."
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
            +"Este beneficio concluye si el aliado no lo usa antes del principio de tu siguiente turno",
            "<b>Ayudar en una tirada de ataque.</b> Distraes a un enemigo a 5 pies o menos de ti, lo que da ventaja a la siguiente tirada de ataque que un aliado haga contra ese enemigo" 
            +"Este beneficio concluye al principio de tu siguiente turno"
        ]
    },
    {
        title: "Use Object",
        icon: "snatch",
        subtitle: "Interact, use special abilities",
        description: "Interact with a second object or use special object abilities",
        reference: "PHB, pg. 193.",
        bullets: [
            "You can interact with one object for free during your turn (such as drawing a weapon or opening a door). If you want to interact with a second object, use this action.",
            "When an object requires your action for its use, you also take this action."
        ]
    },
    {
        title: "Use shield",
        icon: "round-shield",
        subtitle: "Equip or unequip a shield",
        description: "Equip or unequip a shield",
        reference: "PHB, pgs. 144-146.",
        bullets: [
            "A shield always takes an action to equip or unequip.",
            "Armor takes several minutes to equip or unequip."
        ]
    },
    {
        title: "Esconderse",
        icon: "hood",
        subtitle: "",
        description: "Tratas de ocultarte",
        reference: "PHB, pg. 367.",
        bullets: [
            "Debes de superar una prueba de Destreza (Sigilo) CD 15 mientras estás en una zona muy oscura o detrás de una cobertura tres cuartos o completa, y deberás de estar fuera de línea de visión de cualquier enemigo; si puedes ver a una criatura, sabrás si te puede ver o no.",
            "Si la superas, tendrás el estado <i>invisible</i> mientras permanezcas oculto. Anota el resultado de tu prueba, que es la CD para que te detecten con Sabiduría (Percepción).",
            "Dejas de estar oculto si: <br><ul><li>haces ruido mas alto que un sususurro</li><li>un enemigo te detecta</li><li>haces una tirada de ataque</li><li>lanzas un conjuro con componente verbal</li><ul>"
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
        title: "Preparar una acción",
        icon: "stopwatch",
        subtitle: "Choose trigger and action",
        description: "Choose a trigger and a response reaction",
        reference: "PHB, pg. 193.",
        bullets: [
            "First, you decide what perceivable circumstance will trigger your reaction.",
            "Then, you choose the action you will take in response to that trigger, or you choose to move up to your speed in response to it.",
            "When the trigger occurs, you can either take your reaction right after the trigger finishes or ignore the trigger.",
            "When you ready a spell, you cast it as normal but hold its energy, which you release with your reaction when the trigger occurs. To be readied, a spell must have a casting time of 1 action, and holding onto the spell's magic requires concentration"
        ]
    },
    {
        title: "Stabilize a creature",
        icon: "first-aid",
        subtitle: "Administer first aid to a dying creature",
        description: "Stop a dying creature from needing to make death saving throws",
        reference: "PHB, pg. 197.",
        bullets: [
            "Make a Wisdom (Medicine) check with DC 10",
            "On a success, the creature is stable and no longer needs to make death saving throws",
            "A stable creature regains 1 hit point after 1d4 hours"
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
