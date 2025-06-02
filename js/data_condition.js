data_condition = [
    {
        title: "Agarrado",
        icon: "grab",
        subtitle: "Grappled",
        description: "You are grappled",
        reference: "PHB, pg. 290.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "The condition ends if your grappler is incapacitated.",
            "The condition also ends if you are removed from the reach of your grappler."
        ]
    },
    {
        title: "Apresado",
        icon: "imprisoned",
        subtitle: "Restrained",
        description: "You are restrained",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your speed becomes 0, and you can't benefit from any bonus to your speed.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage.",
            "You have disadvantage on Dexterity saving throws."
        ]
    },
    {
        title: "Asustado",
        icon: "sharp-smile",
        subtitle: "Frightened",
        description: "You are frightened",
        reference: "PHB, pg. 290.",
        bullets: [
            "You have disadvantage on ability checks and attack rolls while the source of your fear is within line of sight.",
            "You can't willingly move closer to the source of your fear."
        ]
    },
    {
        title: "Aturdido",
        icon: "internal-injury",
        subtitle: "Stunned",
        description: "You are stunned",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are incapacitated, can't move, and can speak only falteringly.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Cansancio",
        icon: "crawl",
        subtitle: "Exhaustion",
        description: "El cansancio se mide en 6 niveles",
        reference: "PHB, pg. 366.",
        bullets: [
            "<table>" +
            "<tr><th style='text-align:left;width:30%'>Nivel</th><th style='text-align:left;width:40%'>Tiradas d20</th></th><th style='text-align:left'>Velocidad</th></tr>" +
            "<tr><td>1</td><td>-2</td><td>-5'</td></tr>" +
            "<tr><td>2</td><td>-4</td><td>-10'</td></tr>" +
            "<tr><td>3</td><td>-6</td><td>-15'</td></tr>" +
            "<tr><td>4</td><td>-8</td><td>-20'</td></tr>" +
            "<tr><td>5</td><td>-10</td><td>-25'</td></tr>" +
            "<tr><td>6</td><td>Muerte</td><td></td></tr>" +
            "</table>",
            "<b>Niveles de cansancio.</b> Este estado es acumulativo. Cuando lo recibes, subes un nivel de cansancio. Mueres si tu Cansancio es nivel 6.",
            "<b>Pruebas de d20 afectadas.</b> Cuando haces una prueba con d20, la tirada se reduce en 2 por nivel de cansancio.",
            "<b>Velocidad reducida.</b> Tu velocidad se reduce en 5 pies por cada nivel de Cansancio.",
            "<b>Reducir nivel de cansancio.</b> Al terminar un descanso largo reduces en 1 tu nivel de cansancio. Cuando llega a 0, el estado acaba."
        ]
    },
    {
        title: "Cegado",
        icon: "one-eyed",
        subtitle: "Blinded",
        description: "You can't see",
        reference: "PHB, pg. 290.",
        bullets: [
            "You automatically fail any ability check which requires sight.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage."
        ]
    },
    {
        title: "Derribado",
        icon: "crawl",
        subtitle: "Prone",
        description: "You are prone",
        reference: "PHB, pg. 292.",
        bullets: [
            "Your only movement option is to crawl, unless you stand up.",
            "You have disadvantage on attack rolls.",
            "Attack rolls against you have advantage if the attacker is within 5 feet of you, otherwise the attack roll has disadvantage."
        ]
    },
    {
        title: "Ensordecido",
        icon: "elf-ear",
        subtitle: "Deafened",
        description: "You can't hear",
        reference: "PHB, pg. 290.",
        bullets: [
            "You automatically fail any ability check which requires hearing."
        ]
    },
    {
        title: "Envenenado",
        icon: "deathcab",
        subtitle: "Poisoned",
        description: "You are poisoned",
        reference: "PHB, pg. 292.",
        bullets: [
            "You have disadvantage on attack rolls and ability checks."
        ]
    },
    {
        title: "Hechizado",
        icon: "smitten",
        subtitle: "Charmed",
        description: "You are charmed by another creature",
        reference: "PHB, pg. 290.",
        bullets: [
            "You can't attack your charmer or target them with harmful abilities or magical effects.",
            "Your charmer has advantage on ability checks to interact socially with you."
        ]
    },
    {
        title: "Incapacitado",
        icon: "internal-injury",
        subtitle: "Incapacitated",
        description: "You can't take actions or reactions",
        reference: "PHB, pg. 290.",
        bullets: [
        ]
    },
        {
        title: "Inconsciente",
        icon: "coma",
        subtitle: "Unconscious",
        description: "You are unconscious",
        reference: "PHB, pg. 292.",
        bullets: [
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "You drop whatever you're holding and fall prone.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws.",
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "Invisible",
        description: "You can't be seen without the aid of magic or a special sense",
        reference: "PHB, pg. 291.",
        bullets: [
            "For the purpose of hiding, you are heavily obscured.",
            "You can still be detected by any noise you make or tracks you leave.",
            "You have advantage on attack rolls.",
            "Attack rolls against you have disadvantage."
        ]
    },
    {
        title: "Paralizado",
        icon: "internal-injury",
        subtitle: "Paralyzed",
        description: "You can't do anything",
        bullets: [
            "You are incapacitated and can't move or speak.",
            "Attack rolls against you have advantage.",
            "Any attack that hits you is a critical hit if the attacker is within 5 feet of you.",
            "You automatically fail Strength and Dexterity saving throws."
        ]
    },
    {
        title: "Petrificado",
        icon: "stone-pile",
        subtitle: "Petrified",
        description: "You are transformed, along with any nonmagical objects you are wearing or carrying, into a solid inanimate substance (usually stone)",
        reference: "PHB, pg. 291.",
        bullets: [
            "Your weight increases by a factor of ten, and you cease aging.",
            "You are incapacitated, can't move or speak, and are unaware of your surroundings.",
            "Attack rolls against you have advantage.",
            "You automatically fail Strength and Dexterity saving throws.",
            "You have resistance to all damage.",
            "You are immune to poison and disease, though a poison or disease already in your system is only suspended, not neutralized."
        ]
    },
    {
        title: "Moribundo",
        icon: "dead-head",
        subtitle: "Dying",
        description: "Tus puntos de golpe se han reducido a 0 y estás muriendo.",
        reference: "PHB, pg. 28.",
        bullets: [
            "Si tus pg se reducen a 0, pero no mueres al instante, tendrás el estado <i>inconsciente</i> hasta que recuperes cualquier cantidad de pg y deberás realizar tiradas de salvación contra muerte.",
            "Siempre que empieces tu turno con 0 pg, deberás de hacer una tirada de salvación contra muerte.",
            "Tira 1d20. Si el resultado es 10 o más, tienes éxito. De lo contrario fallas.",
            "En tu tercer éxito, te estabilizas.",
            "En tu tercer fallo, mueres.",
            "Sacar 1 cuenta como 2 fallos.",
            "Sacar 20 te hace recuperar 1 pg.",
            "<b>Daño.</b> Si recibes daño mientras tienes 0 pg, es igual a fallar una tirada de salvación contra muerte. Si el daño es de un critico, equivale a dos fallos. Si el daño es mayor a tus pg máximos mueres." +
            "<br><i>Nota: Ten en cuenta que cualquier ataque cuerpo a cuerpo contra ti tiene ventaja y se considera crítico si te impacta, por lo que te añadirá dos fallos.</i>",
            "<b>Estabilizar.</b> Acción de ayudar para tratar de estabilizar a una criatura superando una prueba de Sabiduría (Medicina) con CD 10.",
            "Una vez estable, recuperas 1 pg tras 1d4 horas."
        ]
    },
        {
        title: "Muerto",
        icon: "tombstone",
        subtitle: "",
        description: "Mueres en las siguiente situaciones (y mas).",
        reference: "PHB, pg. 28.",
        bullets: [
            "Puntos de golpe máximos reducidos a 0.",
            "El daño reduce los pg a 0, y sigue quedando daño por asignar mayor o igual a tus pg de golpe máximos.",
            "Tienes 0 pg, y recibes daño igual o mayor a tus pg máximos.",
            "Fallas tres tiradas de salvación de muerte.",
            "Alguien vuelve a decir que los combates son 'facilitos'",
            "Erky tira otra bola de fuego en una taberna",
            "Orcus se entera de que habéis perdido su varita"
        ]
    }
]
