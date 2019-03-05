<template lang="html">
  <div id="root" class="h-full flex flex-column items-center justify-start">
    <h1 class="font-5xl w-full">Actividades</h1>
    <ul id="activities-list" class="h-4/5 flex flex-wrap justify-content-center align-items-center">
      <li class="w-1/4 h-1/6" v-for="(value, key) in this.activities">
        <div @click="value.visible = true" class="w-4/5 h-4/5 flex justify-content-center align-items-center activity">
          {{ value.title }}
        </div>
        <el-dialog
          id="dialog"
          :title="value.title"
          :visible.sync="value.visible"
          width="50%"
          :modal=false
          >
          <p id="description">{{ value.description }}</p>
          <span slot="footer" class="flex justify-content-space-between dialog-footer">
            <pre class="more-info text-left w-3/5"> {{ value.moreinfo }} </pre>
            <el-button type="primary" @click="value.visible = false">Ok</el-button>
          </span>
        </el-dialog>
      </li>
      <div class="hideModal" id="modal"></div>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Activities',
  data: () => ({
    activities: [
      { title: 'Cabalgatas', description: 'Baqueanos con tropillas mansas, acostumbradas a los caminos de montaña, ofrecen a los visitantes una alternativa muy interesante para recorrer los atractivos naturales de la Comarca. Pueden realizarse desde paseos por los alrededores de El Bolsón y otras localidades a travesías de una o varias jornadas, con un fácil acceso a puntos panorámicos o refugios de montaña. Las cabalgatas son unas de las actividades preferidas por muchos visitantes, que les permiten conocer la única forma de transporte con que contaron los viejos pobladores, hasta no hace muchos años.', visible: false },
      { title: 'Trekking', moreinfo: 'Club Andino Piltriquitrón\nAv. Sarmiento y Roca Teléfono\n(0294) 4492600', description: 'El Bolsón es la localidad patagónica con mayor facilidad de acceso a los Refugios de Montaña, dada su ubicación en los cerros cordilleranos. Más de diez refugios ofrecen diferentes alternativas de paseos y maravillosas vistas desde las alturas que rondan los 500 metros hasta los 1.500 metros sobre el nivel del mar. Varios de ellos permanecen abiertos todo el año, brindando al caminante la posibilidad de descubrir otros matices del maravilloso paisaje cordillerano. Paisajes de variado tipo se pueden apreciar desde las alturas de los cerros en donde los refugios de montaña ofrecen la pausa y el descanso, como también la base para nuevos paseos y caminatas. Diversos senderos permiten además, ir de un refugio a otro, en una caminata, que sin dudas maravillará al caminante por sus bellezas paisajísticas. El Cajón del Azul, Retamal, Encanto Blanco, Hielo Azul, Piltriquitrón, Dedo Gordo, Lago Natación y Los Laguitos, son algunos de los Refugios de Montaña que podrá visitar el caminante, que en muchos casos por su facilidad de acceso permite concurrir a toda la familia, incluidos los más chicos y los muy grandes.', visible: false },
      { title: 'Pesca deportiva', moreinfo: 'Opciones o paseos vinculados:\nCajón Azul - Valle El Manso\nHacia Tronador - Paseos Lago Puelo\nCruce los Andes - Lago Epuyén', description: 'Las posibilidades que la región ofrece para la pesca deportiva son numerosas y variadas. En los lagos más importantes -Puelo, Epuyén, Cholila- puede practicarse tanto la pesca desde las orillas como el trolling (pesca de arrastre desde una embarcación). Los principales ríos de la región -el Carrileufu, que nace en el lago Cholila; el Azul, el Turbio y el Epuyén, que desembocan en el lago Puelo; los rápidos de este último lago, cuando cruzan la frontera hacia Chile, o el río Chubut, en la zona de El Maitén, entrando en la meseta- también ofrecen interesantes posibilidades a los aficionados a la pesca, en sus numerosos recodos y pozones.', visible: false },
      { title: 'Spa', description: 'Las más variadas prácticas para el bienestar encuentran en esta región propuestas para que el visitante experimente sensaciones nuevas, técnicas de relajación y depuración, terapias de curación y rehabilitación, productos, cursos y servicios ofrecidos por especialistas experimentados.', visible: false },
      { title: 'Parapente', description: 'El Bolsón es ideal para hacer vuelos en parapente. La pista de despegue para este deporte está ubicada en la Plataforma del Cerro Piltriquitrón, a 1000 metros de altura, y cuenta con un fácil acceso con vehículos, desde la ruta 40 Sur (ex 258), a cinco kilómetros al sur del centro de El Bolsón.', visible: false },
      { title: 'Agroturismo', description: 'La actividad consiste en visitar distintos establecimientos productores en los cuales suelen realizarse visitas guiadas y recorridos por el predio y/o la fabrica si la hubiera. Los productos de la comarca se caracterizan por ser artesanales y elaborados a partir de frutos orgánicos cultivados dentro de "La Comarca Andina del Paralelo 42". Las visitas resultan muy instructivas y divertidas, acercando al visitante al corazón de la producción y el estilo de vida local.' ,visible: false },
      { title: 'Esqui', moreinfo: 'http://www.cerro-peritomoreno.com/', description: 'Para quienes deseen iniciarse en la práctica de esquí o perfeccionarse en la misma, el Club Andino Piltriquitrón, ente encargado de todas las actividades del Cerro, cuenta con una Escuela de Esquí que funciona durante las vacaciones de invierno.', visible: false },
      { title: 'Escalada', description: 'Escalada en roca y descenso en rappel son algunas de las actividades que se realizan en los cerros de la Comarca. Los guías especializados cuentan con paredes preparadas y equipadas para practicar en lugar seguro y de fácil acceso para los visitantes, donde se dan las instrucciones básicas a quienes se inician en el deporte.', visible: false },
      { title: 'Mountain bike', description: 'Los hermosos paisajes de El Bolsón y la Comarca se pueden disfrutar en bicicleta. Las hondonadas, cerros y valles presentan la escenografía adecuada para la práctica del ciclismo de montaña.', visible: false },
      { title: 'Rafting', description: '', visible: false },
      { title: 'Canopy', description: 'Hacer canopy es "volar" suspendido de un arnés, haciendo un recorrido de variable longitud entre las copas de coihues centenarios, por donde sólo vuelan los pájaros.',visible: false },
      { title: 'Feria artesanal', description: 'Quien pase por El Bolsón no puede dejar de visitar la Feria Artesanal, con su infinidad de variedades en artesanías en todos los materiales, lanas, flores secas, maderas, pinturas, cueros, metales, telas, etc. y sus productores regionales que también exponen allí, vendiendo sus dulces, verduras, quesos, cerveza casera, etc.',visible: false },
      { title: 'Paseos lacustres', description: 'El lago Puelo da nombre al Parque Nacional, que presenta diversos atractivos naturales, como ser el paso cordillerano más bajo hacia la vecina República de Chile. La particularidad es que el recorrido se puede realizar en embarcaciones de diverso tipo. Desde paseos cercanos a la costa del lago, como también arribar al límite con Chile o cruzar el lago hacia El Turbio, en donde una población rural ofrece otras alternativas de paseos, hacen de este lago, un atractivo natural, más que interesante para toda la familia.',visible: false },
      { title: 'Avistaje de aves', description: 'Los numerosos espejos de agua, como el Lago Puelo o la Laguna Salamín en El Hoyo, concentran una interesante cantidad de aves, que pueden apreciarse a través de guías expertos en el tema.',visible: false },
    ],
    modalVisible: false,
  }),
  methods: {
    
  },
};
</script>

<style lang="css" scoped>
h1 {
  background-color: blueviolet;
  color:white;
  padding-bottom: 15px;
}

#activities-list {
  list-style-type: none;
}

.activity {
  background-color: blueviolet;
  box-shadow: 0px 0px 10px 1px blueviolet;
  border-radius: 10px;
  color: white;
}

#description {
  text-align: left;
}

.more-info {
  white-space: pre-line;
  font-family: inherit;
}
</style>