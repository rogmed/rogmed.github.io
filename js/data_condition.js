data_condition = [
    {
        title: "Agarrado",
        icon: "grab",
        subtitle: "Grappled",
        description: "Estás agarrad",
        reference: "PHB, pg. 360.",
        bullets: [
            "Tu velocidad es 0 y no se puede aumentar.",
            "Tienes desventaja en las tiradas de ataque contra cualquier objetivo que no sea quien te agarra.",
            "Quien te agarra puede arrastrarte o transportarte al moverse, pero cada pie de movimiento le cuesta 1 pie adicional, salvo que seas Diminuto o tu tamaño  sea dos o mas categorías inferior al suyo."
        ]
    },
    {
        title: "Apresado",
        icon: "imprisoned",
        subtitle: "Restrained",
        description: "Estás apresado",
        reference: "PHB, pg. 361.",
        bullets: [
            "Tu velocidad es 0 y no se puede aumentar.",
            "Las tiradas de ataque contra ti tienen ventaja y tus tiradas de ataque tienen desventaja.",
            "Tienes desventaja en las tiradas de salvación de Destreza."
        ]
    },
    {
        title: "Asustado",
        icon: "sharp-smile",
        subtitle: "Frightened",
        description: "Estás asustado",
        reference: "PHB, pg. 362.",
        bullets: [
            "Tienes desventaja en pruebas de característica y tiradas de ataque mientras la fuente de tu miedo esté en tu línea de visión.",
            "No puedes acercarte voluntariamente a la fuente de tu miedo."
        ]
    },
    {
        title: "Aturdido",
        icon: "internal-injury",
        subtitle: "Stunned",
        description: "Estás aturdido",
        reference: "PHB, pg. 362.",
        bullets: [
            "Tienes el estado de <i>incapacitado</i>.",
            "Fallas automáticamente las tiradas de salvación de Fuerza y Destreza.",
            "Las tiradas de ataque contra ti tienen ventaja."
        ]
    },
    {
        title: "Cansancio",
        icon: "crawl",
        subtitle: "Exhaustion",
        description: "El cansancio se mide en 6 niveles",
        reference: "PHB, pg. 363.",
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
            "<b>Niveles de cansancio.</b> Este estado es acumulativo. Cuando lo recibas, suma 1 nivel de cansancio. Mueres si tu nivel de Cansancio es 6.",
            "<b>Pruebas de d20 afectadas.</b> Cuando haces una prueba con d20, la tirada se reduce en 2 &#215; tu nivel de cansancio.",
            "<b>Velocidad reducida.</b> Tu velocidad se reduce en 5 pies &#215; tu nivel de cansancio.",
            "<b>Reducir nivel de cansancio.</b> Al terminar un descanso largo reduces en 1 tu nivel de cansancio. Cuando llega a 0, el estado acaba."
        ]
    },
    {
        title: "Cegado",
        icon: "one-eyed",
        subtitle: "Blinded",
        description: "No puedes ver",
        reference: "PHB, pg. 364.",
        bullets: [
            "Fallas automáticamente todas las pruebas de característica que requieran la vista.",
            "Las tiradas de ataque contra ti tienen ventaja y tus tiradas de ataque tienen desventaja."
        ]
    },
    {
        title: "Derribado",
        icon: "crawl",
        subtitle: "Prone",
        description: "Estás derribado",
        reference: "PHB, pg. 365.",
        bullets: [
            "Puedes arrastrarte.",
            "Puedes levantarte gastando la mitad de tu velocidad. Si tu velocidad es 0, no puedes levantarte.",
            "Tienes desventaja en las tiradas de ataque.",
            "Las tiradas de ataque contra ti tienen ventaja si el atacante está a 5 pies o menos de ti. De lo contrario, tienen desventaja."
        ]
    },
    {
        title: "Ensordecido",
        icon: "elf-ear",
        subtitle: "Deafened",
        description: "No puedes oír",
        reference: "PHB, pg. 367.",
        bullets: [
            "Fallas automáticamente cualquier prueba de característica que requiera el oído."
        ]
    },
    {
        title: "Envenenado",
        icon: "deathcab",
        subtitle: "Poisoned",
        description: "Estás envenenado",
        reference: "PHB, pg. 367.",
        bullets: [
            "Tienes desventaja en las tiradas de ataque y las pruebas de característica."
        ]
    },
    {
        title: "Hechizado",
        icon: "smitten",
        subtitle: "Charmed",
        description: "Estás hechizado por otra criatura",
        reference: "PHB, pg. 368.",
        bullets: [
            "No puedes atacar ni elegir como objetivo de efectos dañinos o mágicos a quiente haya hechizado.",
            "Quien te haya hezhicado tiene ventaja en las pruebas de característica para interactuar socialmente contigo."
        ]
    },
    {
        title: "Incapacitado",
        icon: "internal-injury",
        subtitle: "Incapacitated",
        description: "Estás incapacitado",
        reference: "PHB, pg. 368.",
        bullets: [
            "No puedes llevar a cabo ninguna acción, acción adicional o reacción.",
            "Pierdes la concentración.",
            "Tienes desventaja en tiradas de iniciativa."
        ]
    },
        {
        title: "Inconsciente",
        icon: "coma",
        subtitle: "Unconscious",
        description: "Estás inconsciente",
        reference: "PHB, pg. 369.",
        bullets: [
            "Tienes los estados <i>derribado</i> e <i>incapacitado</i>.",
            "Sueltas lo que estés sujetando.",
            "Cuando concluya este estado, sigues <i>derribado</i>",
            "Tu velocidad es 0 y no puede aumentar",
            "Las tiradas de ataque contra ti tienen ventaja.",
            "Fallas automáticamente las salvaciones de Fuerza y Destreza.",
            "Cualquier tirada de ataque que te acierte es un crítico si el atacante está a 5' o menos de ti.",
            "No eres consciente de tu entorno"
        ]
    },
    {
        title: "Invisible",
        icon: "invisible",
        subtitle: "Invisible",
        description: "Eres invisible",
        reference: "PHB, pg. 369.",
        bullets: [
            "Tienes ventaja en tiradas de iniciativa.",
            "No te afecta ningún efecto que requiera ver a su objetivo, salvo que el creador del efecto pueda verte de alguna forma",
            "Cualquier equipo que vistas o lleves contigo también se oculta",
            "Las tiradas de ataque contra ti tienen desventaja y tus tiradas de ataque tienen ventaja. Si una criatura puede verte de alguna forma, no obtienes este beneficio contra esa criatura"
        ]
    },
    {
        title: "Paralizado",
        icon: "internal-injury",
        subtitle: "Paralyzed",
        description: "Estás paralizado",
        reference: "PHB, pg. 371.",
        bullets: [
            "Tienes el estado <i>incapacitado</i>.",
            "Tu velocidad es 0 y no puede aumentar",
            "Las tiradas de ataque contra ti tienen ventaja.",
            "Fallas automáticamente las salvaciones de Fuerza y Destreza.",
            "Cualquier tirada de ataque que te acierte es un crítico si el atacante está a 5' o menos de ti."
        ]
    },
    {
        title: "Petrificado",
        icon: "stone-pile",
        subtitle: "Petrified",
        description: "Estás petrificado",
        reference: "PHB, pg. 372.",
        bullets: [
            "Te transformas, junto a cualquier objeto no mágico que vistas o lleves contigo, en una sustancia sólida e inanimada (normalmente piedra)",
            "Tu peso se multiplica por diez y dejas de envejecer.",
            "Tu velocidad es 0 y no puede aumentar",
            "Las tiradas de ataque contra ti tienen ventaja.",
            "Fallas automáticamente las salvaciones de Fuerza y Destreza.",
            "Tienes resistencia a todo el daño",
            "Tienes inmunidad al estado <i>envenenado</i>."
        ]
    },
    {
        title: "Moribundo",
        icon: "dead-head",
        subtitle: "Dying",
        description: "Tus puntos de golpe se han reducido a 0 y estás muriendo.",
        reference: "PHB, pg. 28.",
        bullets: [
            "Si tus pg se reducen a 0, pero no mueres al instante, tendrás el estado <i>inconsciente</i> hasta que recuperes cualquier cantidad de pg.",
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
