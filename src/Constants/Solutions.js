import OEE from '../assets/solution/OEE.jpg'
import DOJO from '../assets/solution/dojo.jpg'
import automation from '../assets/solution/automation.jpg'
import digital_shopfloor from "../assets/services/digital shopfloor.jpg";
import IOT from "../assets/services/IOT.jpg";
import MES from "../assets/services/MES.jpg";
import software_services from "../assets/services/software_services.jpg";
import EMS from '../assets/EMS/HTM_device.png'


export const SERVICES = [
    {
        index: "01",
        title: "Shopfloor Digitization",
        tagline: "From clipboards to dashboards",
        desc: "Replace manual processes with digital workflows, real-time tracking, and operator-friendly interfaces built for the factory floor — not the office.",
        img: digital_shopfloor,
        tag: "Operational",
        bullets: [
            "Digital work orders",
            "Operator interfaces",
            "Real-time tracking",
        ],
    },
    {
        index: "02",
        title: "MES",
        tagline: "Full production visibility",
        desc: "Manage production runs, track work orders from start to finish, and maintain complete traceability across your manufacturing operations.",
        img: MES,
        tag: "Core Platform",
        bullets: ["Work order management", "Production scheduling", "Traceability"],
    },
    {
        index: "03",
        title: "IoT Device Integration",
        tagline: "Your machines, connected",
        desc: "Connect CNC machines, sensors and PLCs to collect real-time data, enabling predictive maintenance and smart factory capabilities.",
        img: IOT,
        tag: "Connectivity",
        bullets: [
            "PLC & CNC integration",
            "Sensor data ingestion",
            "Edge computing",
        ],
    },
    {
        index: "04",
        title: "Custom Software",
        tagline: "Built around your process",
        desc: "When off-the-shelf doesn't fit, we build. Scalable, maintainable software solutions designed specifically for your operations and workflow.",
        img: software_services,
        tag: "Development",
        bullets: ["Web & mobile apps", "API development", "Legacy modernisation"],
    },
];


export const solutions = [
    {
        title: "Environment Monitoring System (EMS)",
        description:
            "Monitor and control temperature, humidity, and environmental conditions in real-time to ensure product quality and compliance.",
        features: [
            "Real-time temperature & humidity tracking",
            "Custom threshold configuration",
            "Multi-location device monitoring",
            "Instant alerts & notifications",
            "Data logging & compliance reporting"
        ],
        link: "/solutions/environment-monitoring-system",
        category: "Quality",
        image: EMS,
    },

    {
        title: "Manufacturing Execution System (MES)",
        description:
            "Digitize and control your entire production lifecycle from order to dispatch.",
        features: [
            "Work order management", ,
            "Digital Production Recording",
            "Rejection Analysis",
            "Production planning",
            "Dispatch Monitoring"
        ],
        link: "/solutions/manufacturing-execution-system",
        category: "Production",
        image: MES,
    },
    {
        title: "Real Time Production Monitoring & OEE",
        description:
            "Gain complete visibility into.",
        features: [
            "Availability",
            "Performance ", ,
            "Quality",
            "Downtime Analysis",
            "Shift-wise & Hour-wise Production ",
        ],
        link: "/solutions/oee-monitoring-software",
        category: "Production",
        image: OEE,
    },

    {
        title: "DOJO 2.0 - Advanced Manpower Planning & Management",
        description:
            "Optimize manpower productivity with real-time tracking and skill management.",
        features: [
            "Skill matrix",
            "Shift - Mapping & attendance",
            "Training Management",
            "KPI/KRA Monitoring",
            "Attrition Tracking",
            "Real-Time Productivity Analysis"
        ],
        link: "/solutions/dojo-workforce-intelligence",
        category: "Workforce",
        image: DOJO,
    },
    {
        title: "Custom Software",
        description: "When off-the-shelf doesn't fit, we build. Scalable, maintainable software solutions designed specifically for your operations and workflow.",
        image: software_services,
        category: "Others",
        features: ["Web & mobile apps", "API development", "Legacy modernisation"],
    },
    {
        title: "Industry 4.0 & AI",
        description:
            "Enable smart manufacturing with connected machines and predictive insights.",
        features: [
            "Machine connectivity",
            "Predictive maintenance",
            "Data analytics",
        ],
        link: "/solutions/shopfloor-digitization",
        category: "Automation",
        image: automation,
    },

];