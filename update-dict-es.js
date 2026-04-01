const fs = require('fs');
const path = 'C:/Users/Ayoub/Desktop/Asset-Manager/artifacts/autofixdata-next/src/dictionaries/es.json';
const dict = JSON.parse(fs.readFileSync(path, 'utf8'));

dict.alldata = {
  ...dict.alldata,
  statsBar: [
    { value: `44 000+`, label: `Vehículos cubiertos` },
    { value: `Directo-OEM`, label: `Datos sin editar` },
    { value: `La más grande`, label: `Base de TSB` },
    { value: `Por AutoZone`, label: `Estándar de la industria` }
  ],
  featuresHeading: `Qué incluye ALLDATA en su suscripción`,
  featuresSubheading: `ALLDATA es el estándar de oro para los datos de reparación OEM: utilizado por técnicos profesionales y concesionarios autorizados en todo el mundo. Cada dato proviene directamente de los fabricantes de vehículos, sin editar y sin resumir.`,
  features: [
    { title: `Procedimientos de reparación OEM sin editar`, desc: `Acceda a los procedimientos de reparación exactos procedentes directamente de los fabricantes: nada se edita, resume ni interpreta. Los mismos datos que usan los concesionarios autorizados.` },
    { title: `Boletines de Servicio Técnico (TSB)`, desc: `La biblioteca de TSB más completa de la industria. Conozca los problemas reconocidos por el fabricante y sus soluciones oficiales antes de siquiera conectar un escáner.` },
    { title: `Diagramas de cableado`, desc: `Esquemas eléctricos completos para cada sistema de carrocería. Rastreé circuitos de gestión de motor, ABS, SRS y redes de bus CAN con diagramas exactos de fábrica.` },
    { title: `Información sobre retiros (Recalls)`, desc: `Acceso inmediato a todos los retiros de seguridad de la NHTSA por vehículo, ofreciendo a su taller una visión completa de cualquier problema de seguridad conocido.` },
    { title: `Diagramas de diagnóstico`, desc: `Árboles de decisión de diagnóstico OEM paso a paso para todos los DTC principales. Siga la secuencia exacta que usan los técnicos del distribuidor: sin conjeturas, sin pérdida de tiempo.` },
    { title: `Tiempos de mano de obra y presupuestos`, desc: `Tiempos de mano de obra OEM estándar para cada reparación, permitiendo cotizaciones precisas y una programación de trabajo realista para su taller.` }
  ],
  whyHeading: `El estándar de la industria en datos OEM`,
  whyBody: `ALLDATA sirve a más de 400 000 técnicos en todo el mundo y cubre más de 44 000 modelos de vehículos. A diferencia de otros proveedores que resumen la información, ALLDATA ofrece los manuales de fábrica tal como fueron escritos.`,
  whyList: [
    `Datos OEM directos de fábrica: nunca resumidos`,
    `La mayor base de datos de TSB del mercado independiente`,
    `Datos completos de retiros de seguridad y NHTSA`,
    `Diagramas OEM idénticos a los de las agencias oficiales`,
    `Guías de tiempos de reparación para presupuestos exactos`
  ],
  keyStatsHeading: `Estadísticas clave de ALLDATA`,
  keyStats: [
    { label: `Aplicaciones vehiculares`, value: `44 000+` },
    { label: `TSBs de OEM`, value: `6M+` },
    { label: `Usuarios profesionales`, value: `400 000+` },
    { label: `Actualizaciones`, value: `Continuas` },
    { label: `Años de cobertura`, value: `1982–2026` }
  ],
  faqHeading: `Preguntas Frecuentes ALLDATA`,
  faqs: [
    { q: `¿Qué es ALLDATA?`, a: `ALLDATA es la fuente principal de información de reparación OEM sin editar de la industria automotriz, publicada por AutoZone.` },
    { q: `¿Está incluido en todas las suscripciones de Auto Fix Data?`, a: `Sí. Todos los planes incluyen acceso completo a ALLDATA junto con AutoData, Haynes Pro, Mitchell1 e Identifix.` },
    { q: `¿Tiene buena cobertura para vehículos europeos?`, a: `Tiene una excelente cobertura de marcas de importación. Para cobertura europea más especializada, AutoData en su suscripción proporciona profundidad complementaria excelente.` },
    { q: `¿Ayuda ALLDATA con diagnóstico por códigos DTC?`, a: `Sí. Proporciona diagramas OEM completos para diagnóstico paso a paso para todos los códigos DTC principales.` },
    { q: `¿Con qué frecuencia se actualiza ALLDATA?`, a: `Se actualiza continuamente cuando los fabricantes lanzan nuevos TSBs y procedimientos.` }
  ],
  ctaHeading: `Acceda a ALLDATA mediante Auto Fix Data`,
  ctaBody: `Auto Fix Data es un revendedor autorizado de ALLDATA. Su suscripción le otorga pleno acceso a las cinco bases de datos automotrices principales.`,
  ctaCompare: `Compare con las alternativas`
};

dict.autodata = {
  ...dict.autodata,
  statsBar: [
    { value: `35+ Años`, label: `Datos Europeos` },
    { value: `150M+`, label: `Vehículos` },
    { value: `OEM`, label: `Especificaciones` },
    { value: `Estándar`, label: `Plataforma global` }
  ],
  featuresHeading: `Qué incluye AutoData en su suscripción`,
  featuresSubheading: `AutoData ha sido el referente de datos técnicos en Europa por más de 35 años. Desde capacidades de fluidos hasta distribución, ofrece las métricas exactas requeridas por talleres de todo el mundo.`,
  features: [
    { title: `Programas de servicio`, desc: `Intervalos completos de mantenimiento según OEM, tipos de aceite y cambios programados para correas y filtros.` },
    { title: `Procedimientos de mantenimiento`, desc: `Mantenimiento paso a paso para correas de distribución y correas de transmisión, con referencias de herramientas y fuerza de torque.` },
    { title: `Especificaciones técnicas`, desc: `Datos sobre neumáticos, alineación, especificaciones de batería y sistemas de refrigeración y aire acondicionado.` },
    { title: `Diagramas eléctricos`, desc: `Cientos de diagramas de color cubriendo sistemas clave, motor, frenos ABS y más.` },
    { title: `Ubicación de componentes`, desc: `Diagramas interactivos mostrando el lugar exacto de fusibles, sensores y módulos relé.` },
    { title: `Búsqueda de códigos DTC`, desc: `Búsqueda completa con el estándar OBD2 y definiciones específicas por fabricante con soluciones.` }
  ],
  whyHeading: `El estándar en el taller europeo`,
  whyBody: `AutoData es fuerte en su enfoque con los mercados y fabricantes europeos, siendo la base técnica sobre marcas como Renault, Peugeot, Volkswagen, SEAT y Alfa Romeo a nivel OEM. Es ampliamente utilizado por los talleres de inspección MOT.`,
  whyList: [
    `Especialista en marcas europeas`,
    `Estándar para ITV y servicios europeos de revisión periódica`,
    `Remplazo de correas de tiempo precisos con herramientas OEM`,
    `Datos específicos sobre aire acondicionado y gases (A/C)`,
    `Compatible con todas las estaciones locales`
  ],
  keyStatsHeading: `Estadísticas AutoData`,
  keyStats: [
    { label: `Años de información`, value: `35+` },
    { label: `Modelos de Europa`, value: `Completos` },
    { label: `Indicadores por Auto`, value: `10 000+` },
    { label: `Actualizaciones`, value: `Semanales` },
    { label: `Países Soportados`, value: `50+` }
  ],
  ctaHeading: `Obtenga AutoData en Auto Fix Data`,
  ctaBody: `Auto Fix Data vende suscripciones completas de la base AutoData. Acceda no solo a AutoData sino a 4 plataformas adicionales.`,
  ctaCompare: `Compare con las alternativas`
};

dict.haynesPro = {
  ...dict.haynesPro,
  statsBar: [
    { value: `80+ Años`, label: `Historia Haynes` },
    { value: `Profesional`, label: `Grado técnico` },
    { value: `Ilustrado`, label: `Diagramas` },
    { value: `OEM`, label: `Origen del dato` }
  ],
  featuresHeading: `Haynes Pro — Mucho más que el manual de usuario`,
  featuresSubheading: `La versión integral diseñada a la medida de los profesionales modernos combinando facilidad de Haynes y detalle robusto de fabricantes.`,
  features: [
    { title: `Manuales de Taller`, desc: `Manuales que guían reparaciones en profundidad paso a paso basados en OEM.` },
    { title: `Detalles Técnicos`, desc: `Alineaciones, fluidos recomendados, medidas, dimensiones de todos los carros.` },
    { title: `Mapas Eléctricos`, desc: `Búsqueda y mapeo funcional de todas las computadoras automotrices, con diagramas de pines.` },
    { title: `Calendario de inspección`, desc: `Planillas y recordatorios impresos de las revisiones mandatorias según fabricante.` },
    { title: `Despiece Visual`, desc: `Increíble motor que dibuja y muestra todas las partes internas paso a paso visual.` },
    { title: `Renovación de Motores`, desc: `Diagramas y secuencias completas para rehacer un motor desde cero usando parámetros exactos.` }
  ],
  whyHeading: `¿A quién beneficia más Haynes Pro?`,
  whyBody: `Revisado y valorado por las agencias y mecánicos del mundo por que ofrece claridad de procedimientos técnicos.`,
  whyList: [
    `Mecánicos independientes y auto-empleados`,
    `Gente buscando su certificación automotriz`,
    `Colegios para la vocación y estudio automotriz`,
    `Centros de rápida inspección`
  ],
  keyStatsHeading: `Estadísticas Haynes Pro`,
  keyStats: [
    { label: `Historia de editor`, value: `80+ Años` },
    { label: `Carros soportados`, value: `150M+` },
    { label: `Cobertura visual`, value: `100%` },
    { label: `Acceso global`, value: `Web & Móvil` }
  ],
  faqHeading: `Preguntas Frecuentes sobre Haynes Pro`,
  faqs: [
    { q: `¿Es igual al manual físico que se vende al público?`, a: `No. Haynes Pro es la evolución profesional enfocada al mundo técnico que utiliza información que solo está disponible via talleres directos de fábrica.` },
    { q: `¿Hay diagramas e imágenes precisos?`, a: `Sí. Casi la totalidad cuenta con ilustraciones especializadas del grupo Haynes de altísima calidad visual.` },
    { q: `¿Qué marcas cubre mayormente?`, a: `Tiene mucha influencia global y excelente contenido sobre Europa, Asia y las marcas regulares de Estados Unidos.` },
    { q: `¿Viene incluido en mi plan general con ustedes?`, a: `Sí, todas las plataformas vienen sin recargo alguno en todas las suscripciones activas del sistema.` }
  ],
  ctaHeading: `Consiga Haynes Pro en 1 Clic`,
  ctaBody: `Toda la facilidad en una suite. A diferencia de las plataformas costosas, Auto Fix Data se lo entrega de primer plano.`,
  ctaCompare: `Compare con las alternativas`
};

dict.mitchell1 = {
  ...dict.mitchell1,
  statsBar: [
    { value: `ProDemand`, label: `Plataforma base` },
    { value: `SureTrack`, label: `Casos de estudio` },
    { value: `1983–2026`, label: `Años activos` },
    { value: `Snap-on®`, label: `Integrado por` }
  ],
  featuresHeading: `Mitchell1 ProDemand — Funcionalidad Completa`,
  featuresSubheading: `Mitchell1 integra todo lo necesario de las marcas sumando el enorme soporte técnico y registros comunitarios de SureTrack en el mismo sistema.`,
  features: [
    { title: `Información de Reparación`, desc: `ProDemand tiene de primera mano manuales completos sin fallas de redacción desde 1983.` },
    { title: `Ingenio SureTrack`, desc: `Bases comunitarias y confirmaciones profesionales para acelerar fallas críticas de sistemas intermitentes.` },
    { title: `Eléctricos y Redes`, desc: `Gráficas vectoriales interactivas donde puedes rastrear las fallas entre varios componentes del auto.` },
    { title: `Boletines Técnicos de Servicio`, desc: `La base de gobierno de servicio NHTSA americana con fallas en masa integradas.` },
    { title: `Tiempos de Trabajo`, desc: `Cuantos minutos se invierten en la reparación basado en estándar de piso oficial de agencia.` },
    { title: `Referencia OEM Piezas`, desc: `Precios y guías que aseguran al usuario que se pide la parte correcta del vehículo.` }
  ],
  whyHeading: `SureTrack: La tecnología detrás de la eficiencia del fallo`,
  whyBody: `Mitchell1 implementó SureTrack, algo que agrupa un historial inigualable (casi 70 millones) de mecánicas de taller aprobadas, enseñando no solo la falla sino estadísticamente cual parte falló primero en otros mecánicos alrededor del continente.`,
  whyList: [
    `70+ Millones de registros estadísticos sobre carros reales`,
    `Patrones preestablecidos para un grupo de códigos mixtos`,
    `Notas comunitarias dadas por profesionales del ramo automotriz con años de práctica viva`,
    `Conexiones lógicas entre múltiples módulos computadora y tableros electrónicos con códigos`
  ],
  keyStatsHeading: `Estadísticas Mitchell1`,
  keyStats: [
    { label: `Lapso de Modelos`, value: `1983–2026` },
    { label: `Base SureTrack`, value: `70 Millones` },
    { label: `Familias Auto`, value: `100+ Marcas` },
    { label: `Boletines OEM`, value: `1.5M+ Archivos` },
    { label: `Manejado por`, value: `Snap-on y Mitchell` }
  ],
  ctaHeading: `Ingrese a Mitchell1 Ahora mismo`,
  ctaBody: `Somos sus aliados; brindamos ProDemand mediante Auto Fix Data sin ninguna restricción técnica para acelerar su rentabilidad de inmediato al costo ideal.`,
  ctaCompare: `Compare alternativas`
};

dict.identifix = {
  ...dict.identifix,
  statsBar: [
    { value: `Direct-Hit`, label: `Plataforma Directa` },
    { value: `70M+`, label: `Mecánicas de piso` },
    { value: `Clasificador`, label: `Sintomatologías` },
    { value: `Por Solera`, label: `Fuerza Automotriz` }
  ],
  featuresHeading: `Identifix Direct-Hit — Diagnósticos Reales Que Sí Funcionan`,
  featuresSubheading: `La principal fuerza de Identifix está en su enorme base comunitaria, brindando estadísticas certeras para cambiar partes de manera asertiva eliminando la prueba y error.`,
  features: [
    { title: `Casos Direct-Hit Vivos`, desc: `Entrega un diagrama del motor en la falla precisa, permitiendo corroborar la resolución del taller original. Muy útil contra códigos complejos.` },
    { title: `Detección a Base de Síntoma`, desc: `¿No hay código presente? Sin problema. Busque el síntoma del auto exacto (jaloneo, calentamiento, cascabel) para su diagnóstico correcto de entrada.` },
    { title: `Manuales Regulares`, desc: `Incluye también las reparaciones estándar, diagramas técnicos y eléctricos completos con origen OEM del auto original para terminar el reemplazo adecuado.` },
    { title: `Avisos Críticos Ocultos`, desc: `Alerte de fallas críticas conocidas de origen de fábrica que provocan efectos inesperados (fuga parasitaria).` },
    { title: `Conexión de Soporte Experto`, desc: `Acceda a líneas comunitarias y revisiones por expertos dedicados cuando una falla resiste todos los escáneres.` },
    { title: `Toma Concreta de TSB`, desc: `Boletines técnicos TSB en el caso necesario, uniendo síntomas a las recomendaciones de fábrica y agencias corporativas con manuales PDF y acciones requeridas.` }
  ],
  whyHeading: `La Elección Preferida por Reparadores de Check Engine`,
  whyBody: `Identifix Direct Hit proporciona una fuerte base que las demás plataformas omiten, que son los registros verificables de especialistas reales, en donde relatan la cura y su tasa de éxito antes de que gastes en piezas automotrices costosas y tiempo valioso del taller mecánico.`,
  whyList: [
    `La forma más corta a arreglar un Check Engine (MIL) entre 1 a 3 días menor a base estándar`,
    `Avisos directos contra fallos muy específicos sin perder tiempo en la plataforma técnica completa`,
    `Cientos de miles de registros exitosos catalogados en sus computadoras cada día nuevo de reparación`,
    `Es primordial contra redes modernas vehiculares posteriores al año límite 2000 en todo el panorama automotriz`
  ],
  keyStatsHeading: `Los Números de Identifix`,
  keyStats: [
    { label: `Base Reparable`, value: `70M+ Casos Activos` },
    { label: `Registro de Éxito`, value: `Verificable` },
    { label: `Búsqueda en Falla`, value: `Instantánea Predictiva` },
    { label: `Motor Centraliza`, value: `Direct-Hit de Solera` }
  ],
  ctaHeading: `Únase a Direct-Hit Identifix vía Auto Fix Data`,
  ctaBody: `Reemplace su cuenta actual de Identifix invirtiendo el valor exacto pero obteniendo cuatro bases premium automotrices que cubren cada ángulo faltante.`,
  ctaCompare: `Ver Comparativas Adicionales`
};

fs.writeFileSync(path, JSON.stringify(dict, null, 2));
