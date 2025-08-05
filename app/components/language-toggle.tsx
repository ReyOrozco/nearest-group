"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

// Definir el tipo para las traducciones
type Translations = {
  [key: string]: {
    es: string
    en: string
  }
}

// Definir las traducciones
const translations: Translations = {
  // Navegación
  inicio: { es: "Inicio", en: "Home" },
  quienesSomos: { es: "Quiénes Somos", en: "About Us" },
  servicios: { es: "Servicios", en: "Services" },
  valorAgregado: { es: "Valor Agregado", en: "Added Value" },
  soluciones: { es: "Soluciones", en: "Solutions" },
  clientes: { es: "Clientes", en: "Clients" },
  nuestrosClientes: { es: "Nuestros Clientes", en: "Our Clients" },
  historiasExito: { es: "Historias de Éxito", en: "Success Stories" },
  noticias: { es: "Noticias", en: "News" },
  contacto: { es: "Contacto", en: "Contact" },
  acceso: { es: "Acceso", en: "Access" },
  portalClientes: { es: "Portal de Clientes", en: "Client Portal" },
  empleados: { es: "Acceso Empleados", en: "Employee Access" },
  proveedores: { es: "Acceso Proveedores", en: "Carrier Access" },
  nuestraCapacidad: { es: "Nuestra Capacidad", en: "Our Capacity" },

  // Hero
  heroTitle: {
    es: "Soluciones logísticas integrales para tu negocio",
    en: "Comprehensive logistics solutions for your business",
  },
  heroSubtitle: {
    es: "Ofrecemos servicios de logística terrestre, aérea, marítima y almacenamiento con cobertura nacional e internacional",
    en: "We offer land, air, sea logistics and storage services with national and international coverage",
  },
  solicitarCotizacion: { es: "Solicitar Cotización", en: "Request a Quote" },
  rastrearEnvio: { es: "Rastrear Envío", en: "Track Shipment" },
  descripcionRastreo: {
    es: "Consulte el estado de su envío en tiempo real con nuestro sistema de rastreo.",
    en: "Check the status of your shipment in real time with our tracking system.",
  },

  // Servicios
  nuestrosServicios: { es: "Nuestros Servicios", en: "Our Services" },
  descripcionServicios: {
    es: "Ofrecemos soluciones logísticas integrales adaptadas a las necesidades específicas de cada cliente",
    en: "We offer comprehensive logistics solutions tailored to the specific needs of each client",
  },
  logisticaTerrestre: { es: "Logística Terrestre", en: "Ground Logistics" },
  logisticaAerea: { es: "Logística Aérea", en: "Air Logistics" },
  logisticaMaritima: { es: "Logística Marítima", en: "Maritime Logistics" },
  almacenamiento: { es: "Almacenamiento", en: "Storage" },
  ftl: { es: "Carga Completa (FTL)", en: "Full Truckload (FTL)" },
  ltl: { es: "Carga Parcial (LTL)", en: "Less Than Truckload (LTL)" },
  transfer: { es: "Transferencias", en: "Transfers" },
  distribucionNacional: { es: "Distribución Nacional", en: "National Distribution" },
  priority: { es: "Servicio Prioritario", en: "Priority Service" },
  economy: { es: "Servicio Económico", en: "Economy Service" },
  charter: { es: "Vuelos Charter", en: "Charter Flights" },
  consolidados: { es: "Consolidados", en: "Consolidated" },
  fcl: { es: "Contenedor Completo (FCL)", en: "Full Container Load (FCL)" },
  lcl: { es: "Contenedor Parcial (LCL)", en: "Less Container Load (LCL)" },
  multimodal: { es: "Transporte Multimodal", en: "Multimodal Transport" },
  proyectosEspeciales: { es: "Proyectos Especiales", en: "Special Projects" },
  almacenFiscal: { es: "Almacén Fiscal", en: "Bonded Warehouse" },
  crossDocking: { es: "Cross Docking", en: "Cross Docking" },
  fulfillment: { es: "Fulfillment", en: "Fulfillment" },
  gestionInventario: { es: "Gestión de Inventario", en: "Inventory Management" },

  // Quiénes Somos
  quienesSomosTitle: { es: "Quiénes Somos", en: "About Us" },
  quienesSomosDesc: {
    es: "Somos una empresa líder en soluciones logísticas con más de 15 años de experiencia en el mercado",
    en: "We are a leading company in logistics solutions with more than 15 years of experience in the market",
  },
  mision: { es: "Misión", en: "Mission" },
  misionDesc: {
    es: "Brindar soluciones logísticas integrales que generen valor a nuestros clientes, a través de un servicio de excelencia y tecnología de vanguardia.",
    en: "Provide comprehensive logistics solutions that generate value for our clients, through excellent service and cutting-edge technology.",
  },
  vision: { es: "Visión", en: "Vision" },
  visionDesc: {
    es: "Ser reconocidos como el socio logístico más confiable y eficiente en el mercado, expandiendo nuestra presencia global.",
    en: "To be recognized as the most reliable and efficient logistics partner in the market, expanding our global presence.",
  },
  valores: { es: "Valores", en: "Values" },
  compromiso: { es: "Compromiso", en: "Commitment" },
  puntualidad: { es: "Puntualidad", en: "Punctuality" },
  innovacion: { es: "Innovación", en: "Innovation" },
  responsabilidad: { es: "Responsabilidad", en: "Responsibility" },
  trabajoEquipo: { es: "Trabajo en Equipo", en: "Teamwork" },
  transparencia: { es: "Transparencia", en: "Transparency" },
  excelenciaOperativa: { es: "Excelencia Operativa", en: "Operational Excellence" },

  // Valor Agregado
  valorAgregadoTitle: { es: "Valor Agregado", en: "Added Value" },
  valorAgregadoDesc: {
    es: "Ofrecemos servicios adicionales que complementan nuestras soluciones logísticas principales",
    en: "We offer additional services that complement our main logistics solutions",
  },
  atencionPersonalizada: { es: "Atención Personalizada", en: "Personalized Attention" },
  atencionPersonalizadaDesc: {
    es: "Asignamos un ejecutivo de cuenta dedicado para atender todas sus necesidades logísticas.",
    en: "We assign a dedicated account executive to meet all your logistics needs.",
  },
  puertaAPuerta: { es: "Servicio Puerta a Puerta", en: "Door-to-Door Service" },
  puertaAPuertaDesc: {
    es: "Nos encargamos de todo el proceso logístico desde el origen hasta el destino final.",
    en: "We take care of the entire logistics process from origin to final destination.",
  },
  coberturaGlobal: { es: "Cobertura Global", en: "Global Coverage" },
  coberturaGlobalDesc: {
    es: "Contamos con una red de aliados estratégicos que nos permite ofrecer servicios en más de 30 países.",
    en: "We have a network of strategic allies that allows us to offer services in more than 30 countries.",
  },
  solucionesMedida: { es: "Soluciones a Medida", en: "Tailored Solutions" },
  solucionesMedidaDesc: {
    es: "Diseñamos soluciones logísticas adaptadas a las necesidades específicas de cada cliente.",
    en: "We design logistics solutions adapted to the specific needs of each client.",
  },

  // Industrias especializadas
  industriasTitle: {
    es: "Soluciones logísticas especializadas por industria",
    en: "Specialized logistics solutions by industry",
  },
  industriasDesc: {
    es: "Cumplimos con las normas operativas y la infraestructura adecuada para atender las necesidades de nuestros clientes en diferentes industrias",
    en: "We comply with the operational standards and appropriate infrastructure to meet the needs of our clients in different industries",
  },
  textilTitle: { es: "Ropa y Textil", en: "Clothing and Textile" },
  textilDesc: {
    es: "Experiencia, tecnología y conocimiento para las necesidades específicas de la industria textil.",
    en: "Experience, technology and knowledge for the specific needs of the textile industry.",
  },
  saludTitle: { es: "Salud y Cuidado Personal", en: "Health and Personal Care" },
  saludDesc: {
    es: "Logística especializada para el sector salud con cumplimiento de normativas específicas.",
    en: "Specialized logistics for the health sector with compliance with specific regulations.",
  },
  alimentosTitle: { es: "Alimentos y Bebidas", en: "Food and Beverages" },
  alimentosDesc: {
    es: "Soluciones de clase mundial para la industria alimentaria con control de temperatura.",
    en: "World-class solutions for the food industry with temperature control.",
  },
  automotrizTitle: { es: "Automotriz", en: "Automotive" },
  automotrizDesc: {
    es: "Control preciso de cada lote y número de serie para la industria automotriz.",
    en: "Precise control of each batch and serial number for the automotive industry.",
  },
  electronicaTitle: { es: "Electrónica", en: "Electronics" },
  electronicaDesc: {
    es: "Protocolos de seguridad y capacidad adaptativa para productos tecnológicos.",
    en: "Security protocols and adaptive capacity for technological products.",
  },
  verMas: { es: "Ver más", en: "See more" },

  // Nuestra Capacidad
  capacidadTitle: { es: "Nuestra Capacidad", en: "Our Capacity" },
  capacidadDesc: {
    es: "Somos un gran equipo de trabajo constantemente entregado de sol a sol a llevar la excelencia logística.",
    en: "We are a great team constantly dedicated from sunrise to sunset to deliver logistics excellence.",
  },
  crossDocksTitle: { es: "Cross Docks", en: "Cross Docks" },
  crossDocksDesc: { es: "Operaciones semanales", en: "Weekly operations" },
  colaboradoresTitle: { es: "Colaboradores", en: "Collaborators" },
  colaboradoresDesc: { es: "Profesionales en logística", en: "Logistics professionals" },
  almacenamientoTitle: { es: "Almacenamiento", en: "Storage" },
  almacenamientoDesc: { es: "Espacio de almacén", en: "Warehouse space" },
  viajesTitle: { es: "Viajes por Año", en: "Trips per Year" },
  viajesDesc: { es: "Envíos completados", en: "Completed shipments" },
  paisesTitle: { es: "Países", en: "Countries" },
  paisesDesc: { es: "Cobertura global", en: "Global coverage" },
  "m2 Almacen": { es: "m² de Almacén", en: "Warehouse m²" },
  Colaboradores: { es: "Colaboradores", en: "Collaborators" },
  Clientes: { es: "Clientes", en: "Clients" },
  CrossDocks: { es: "Cross Docks", en: "Cross Docks" },
  "Viajes Año": { es: "Viajes por Año", en: "Trips per Year" },
  paises: { es: "Países", en: "Countries" },
  flotaTitle: { es: "Flota", en: "Fleet" },
  flotaDesc: { es: "Unidades disponibles", en: "Available units" },
  m2Almacen: { es: "m² de Almacén", en: "Warehouse m²" },
  camiones: { es: "Camiones", en: "Trucks" },
  operacionesSemanales: { es: "Operaciones semanales", en: "Weekly operations" },
  profesionalesLogistica: { es: "Profesionales en logística", en: "Logistics professionals" },
  espacioAlmacen: { es: "Espacio de almacén", en: "Warehouse space" },
  enviosCompletados: { es: "Envíos completados", en: "Completed shipments" },
  coberturaGlobalText: { es: "Cobertura global", en: "Global coverage" },
  unidadesDisponibles: { es: "Unidades disponibles", en: "Available units" },

  // Contacto
  solicitudServicio: { es: "Solicitud de Servicio", en: "Service Request" },
  solicitudServicioDesc: {
    es: "Complete el formulario y uno de nuestros ejecutivos se pondrá en contacto con usted a la brevedad",
    en: "Complete the form and one of our executives will contact you as soon as possible",
  },
  nombre: { es: "Nombre", en: "Name" },
  empresa: { es: "Empresa", en: "Company" },
  email: { es: "Email", en: "Email" },
  telefono: { es: "Teléfono", en: "Phone" },
  tipoServicio: { es: "Tipo de Servicio", en: "Service Type" },
  seleccioneServicio: { es: "Seleccione un servicio", en: "Select a service" },
  origen: { es: "Origen", en: "Origin" },
  destino: { es: "Destino", en: "Destination" },
  mensaje: { es: "Mensaje", en: "Message" },
  detallesAdicionales: { es: "Detalles adicionales", en: "Additional details" },
  enviarSolicitud: { es: "Enviar Solicitud", en: "Send Request" },
  informacionContacto: { es: "Información de Contacto", en: "Contact Information" },
  oficinasMty: { es: "Oficinas Monterrey", en: "Monterrey Offices" },
  direccionMty: {
    es: "Av. Constitución 1100, Centro, 64000 Monterrey, N.L.",
    en: "Av. Constitución 1100, Centro, 64000 Monterrey, N.L.",
  },
  horario: { es: "Horario de Atención", en: "Service Hours" },
  horarioDesc: { es: "Lunes a Viernes: 9:00 AM - 6:00 PM", en: "Monday to Friday: 9:00 AM - 6:00 PM" },
  derechosReservados: { es: "Todos los derechos reservados", en: "All rights reserved" },

  // Rastreo
  ingresarNumeroRastreo: {
    es: "Ingrese su número de rastreo para ver el estado de su envío",
    en: "Enter your tracking number to see the status of your shipment",
  },
  rastrearButton: { es: "Rastrear", en: "Track" },
  resultadoRastreo: { es: "Resultado del rastreo", en: "Tracking Result" },
  estadoEnvio: { es: "Estado del envío", en: "Shipment Status" },
  ultimaActualizacion: { es: "Última actualización", en: "Last Update" },
  historialEnvio: { es: "Historial del envío", en: "Shipment History" },
  noEncontrado: {
    es: "No se encontró información para el número de rastreo proporcionado.",
    en: "No information was found for the provided tracking number.",
  },
  intenteNuevamente: {
    es: "Por favor, verifique el número e intente nuevamente.",
    en: "Please verify the number and try again.",
  },
  progresoEmbarque: { es: "Progreso del Embarque", en: "Shipment Progress" },
  lineaTiempo: { es: "Línea de Tiempo", en: "Timeline" },
  solicitudCreada: { es: "Solicitud Creada", en: "Request Created" },
  citaCarga: { es: "Cita de Carga", en: "Loading Appointment" },
  llegadaOrigen: { es: "Llegada a Origen", en: "Arrival at Origin" },
  salidaOrigen: { es: "Salida de Origen", en: "Departure from Origin" },
  enTransito: { es: "En Tránsito", en: "In Transit" },
  llegadaDestino: { es: "Llegada a Destino", en: "Arrival at Destination" },
  actual: { es: "Actual", en: "Current" },

  // Traducciones para la página de rastreo
  rastrearEnvioTitle: { es: "Rastrear su envío", en: "Track your shipment" },
  rastrearEnvioDesc: {
    es: "Ingrese su número de rastreo para ver el estado de su envío",
    en: "Enter your tracking number to see the status of your shipment",
  },
  numeroRastreo: { es: "Número de rastreo", en: "Tracking number" },
  buscando: { es: "Buscando...", en: "Searching..." },
  rastrear: { es: "Rastrear", en: "Track" },
  detallesEnvio: { es: "Detalles del Envío", en: "Shipment Details" },
  informacionEnvio: { es: "Información del Envío", en: "Shipment Information" },
  estado: { es: "Estado", en: "Status" },
  servicio: { es: "Servicio", en: "Service" },
  terrestre: { es: "Terrestre", en: "Ground" },
  fechaEstimada: { es: "Fecha Estimada de Entrega", en: "Estimated Delivery Date" },
  direcciones: { es: "Direcciones", en: "Addresses" },
  origen: { es: "Origen", en: "Origin" },
  destino: { es: "Destino", en: "Destination" },
  ciudadOrigen: { es: "Ciudad de México, México", en: "Mexico City, Mexico" },
  ciudadDestino: { es: "Monterrey, México", en: "Monterrey, Mexico" },

  // Secciones específicas que necesitan corrección
  newsUpdates: { es: "Noticias y Actualizaciones", en: "News and Updates" },
  stayUpToDate: {
    es: "Mantente al día con las últimas novedades y desarrollos de Nearest Group",
    en: "Stay up to date with the latest news and developments from Nearest Group",
  },
  empresasConfian: {
    es: "Empresas que confían en Nearest Group para sus necesidades logísticas",
    en: "Companies that trust Nearest Group for their logistics needs",
  },
  clientReviews: { es: "Lo que dicen nuestros clientes", en: "What our clients say" },
  successStories: {
    es: "Historias de éxito de empresas que confían en nuestras soluciones logísticas",
    en: "Success stories from companies that trust our logistics solutions",
  },
  descripcionCapacidad: {
    es: "Somos un gran equipo de trabajo constantemente entregado de sol a sol a llevar la excelencia logística.",
    en: "We are a great team constantly dedicated from sunrise to sunset to deliver logistics excellence.",
  },
  anteriorResena: { es: "Reseña anterior", en: "Previous review" },
  siguienteResena: { es: "Siguiente reseña", en: "Next review" },
}

// Crear el contexto para el idioma
type LanguageContextType = {
  language: string
  setLanguage: (lang: string) => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: "es",
  setLanguage: () => {},
  t: () => "",
})

// Proveedor del contexto
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState("es")

  // Cargar el idioma guardado en localStorage al iniciar
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language")
    if (savedLanguage) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Función para cambiar el idioma
  const setLanguageHandler = (lang: string) => {
    setLanguage(lang)
    localStorage.setItem("language", lang)
  }

  // Función para obtener la traducción
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation key not found: ${key}`)
      return key
    }
    return translations[key][language as keyof (typeof translations)[typeof key]] || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: setLanguageHandler, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook para usar el contexto
export const useLanguage = () => useContext(LanguageContext)

// Componente para cambiar el idioma
export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="h-8 gap-1 text-base">
          {language === "es" ? "ES" : "EN"}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("es")}>
          <div className="flex w-full items-center justify-between">
            ES {language === "es" && <Check className="h-4 w-4" />}
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("en")}>
          <div className="flex w-full items-center justify-between">
            EN {language === "en" && <Check className="h-4 w-4" />}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
