import {
    IconBattery2,
    IconCar,
    IconCpu,
    IconPackage,
    IconShirt,
} from "@tabler/icons-react";

export const industries = [
    {
        id: "automotive-manufacturing",
        icon: IconCar,
        number: "01",
        title: "Automotive Manufacturing",
        summary:
            "Improve production visibility, machine performance, quality control, and component traceability across automotive manufacturing operations.",
        description: [
            "Automotive manufacturers need accurate production data, stable cycle times, controlled rejection, and complete traceability across machining, assembly, inspection, testing, packing, and dispatch.",
            "DigiFabrix helps automotive plants monitor machine status, production output, downtime, rejection, cycle time, OEE, and target achievement in real time. Production teams can identify hidden losses, compare shift performance, and respond quickly to machine stoppages and process deviations.",
            "The platform can also capture barcode and serial-number data, operator activity, process-stage completion, inspection results, and machine parameters to create reliable part and component traceability.",
        ],
        capabilities: [
            "Machine and production-line OEE monitoring",
            "Cycle-time and target monitoring",
            "Downtime and stoppage analysis",
            "Part and component traceability",
            "Rejection and rework tracking",
            "PLC and machine integration",
            "Operator and shift performance",
            "Quality inspection data capture",
        ],
        useCases:
            "Suitable for machining, press shops, welding, assembly lines, inspection stations, testing operations, and component manufacturing.",
    },
    {
        id: "fmcg-manufacturing",
        icon: IconPackage,
        number: "02",
        title: "FMCG Manufacturing",
        summary:
            "Monitor high-volume production lines, changeovers, downtime, batch performance, quality losses, and production targets in real time.",
        description: [
            "FMCG manufacturing depends on high-speed production, consistent quality, fast changeovers, and accurate batch-level reporting.",
            "DigiFabrix enables manufacturers to monitor production output, line efficiency, machine stoppages, rejection, changeover duration, and shift performance from one dashboard.",
            "Digital production reports help reduce dependency on paper records and spreadsheets while giving supervisors and management faster access to accurate operational data.",
        ],
        capabilities: [
            "Real-time production-line monitoring",
            "Batch and shift production reporting",
            "Changeover-time analysis",
            "Downtime-reason capture",
            "Quality and rejection monitoring",
            "Production-target comparison",
            "Automated management reports",
            "Line efficiency analysis",
        ],
        useCases:
            "Suitable for packaging, filling, bottling, processing, inspection, labeling, and high-volume consumer-product manufacturing.",
    },
    {
        id: "textile-manufacturing",
        icon: IconShirt,
        number: "03",
        title: "Textile Manufacturing",
        summary:
            "Track machine utilization, production quantity, stoppages, operator activity, quality issues, and shift-level performance.",
        description: [
            "Textile plants often operate a large number of machines across multiple shifts, making manual production tracking difficult and time-consuming.",
            "DigiFabrix provides real-time visibility into machine utilization, production quantity, downtime, idle time, operator performance, and quality losses.",
            "The system helps production teams identify underperforming machines, frequent stoppages, and shift-wise performance differences while replacing manual reporting with structured digital records.",
        ],
        capabilities: [
            "Machine utilization monitoring",
            "Shift-wise production tracking",
            "Downtime and idle-time analysis",
            "Operator performance monitoring",
            "Production target tracking",
            "Quality-loss recording",
            "Automated shift reports",
            "Machine-wise performance comparison",
        ],
        useCases:
            "Suitable for spinning, weaving, knitting, dyeing, finishing, garment production, and textile-processing operations.",
    },
    {
        id: "electronics-manufacturing",
        icon: IconCpu,
        number: "04",
        title: "Electronics Manufacturing",
        summary:
            "Enable serial-number traceability, process validation, testing integration, quality-data capture, and live production monitoring.",
        description: [
            "Electronics manufacturing requires strict process control, accurate product identification, testing-data capture, and complete production history.",
            "DigiFabrix helps manufacturers track serial numbers, operators, process stages, machines, test results, inspection records, and quality status throughout production.",
            "The platform can validate previous processes before allowing the next operation, reducing missed stages and improving product genealogy and quality control.",
        ],
        capabilities: [
            "Serial-number and barcode traceability",
            "Process-stage validation",
            "Testing-equipment integration",
            "Quality-result capture",
            "Operator and workstation tracking",
            "Production genealogy",
            "Defect and rework tracking",
            "Real-time production dashboards",
        ],
        useCases:
            "Suitable for PCB assembly, electronic products, control panels, testing stations, inspection, final assembly, packing, and dispatch.",
    },
    {
        id: "battery-manufacturing",
        icon: IconBattery2,
        number: "05",
        title: "Battery Manufacturing",
        summary:
            "Track cells, components, BMS, assembly stages, test results, quality checks, battery serial numbers, packing, and dispatch.",
        description: [
            "Battery manufacturing requires complete traceability from cells and components through assembly, testing, quality inspection, packing, and dispatch.",
            "DigiFabrix creates a detailed product genealogy by linking cell codes, BMS information, battery serial numbers, operators, machines, process stages, and testing results.",
            "The system can validate process completion, capture test-machine data, block invalid production flow, and provide complete manufacturing history for every finished battery.",
        ],
        capabilities: [
            "Cell and component traceability",
            "BMS and battery serial-number mapping",
            "Assembly-stage validation",
            "OCV and testing-data capture",
            "Quality inspection history",
            "Product genealogy",
            "Packing and dispatch traceability",
            "Process blocking and validation",
        ],
        useCases:
            "Suitable for lithium-ion battery packs, lead-acid batteries, battery assembly, testing, quality inspection, packing, and dispatch operations.",
    },
];

export const commonCapabilities = [
    "Real-time production monitoring",
    "OEE and downtime analysis",
    "Automated digital reporting",
    "Machine, PLC, and sensor integration",
    "Barcode and serial-number traceability",
    "Quality and rejection monitoring",
    "Operator and shift performance",
    "Cloud and on-premise deployment",
];