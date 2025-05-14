// Estructura de datos mejorada con tendencias por unidad de negocio
const kpiDetails = {
    'ventas': {
        title: 'Ventas Totales',
        value: '4.85M$',
        status: 'status-good',
        statusData: 'good',
        statusText: '7.8% sobre meta',
        context: 'Mes Actual (Meta: 4.5M$)',
        description: 'Total de ingresos generados por fletes en el periodo.',
        salesData: {
            today: {
                value: '885,000',
                prev: '832,500',
                change: '+6.3%'
            },
            month: {
                value: '4,850,000',
                prev: '4,450,000',
                change: '+9.0%'
            }
        },
        quarterlyComparison: {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            currentYear: {
                year: '2025',
                data: [14800000, 15200000, 15900000, 'N/A']
            },
            previousYear: {
                year: '2024',
                data: [13200000, 14500000, 14100000, 16200000]
            }
        },
        segments: [
            {name: 'Foráneo', value: '2.6M$', trend: 'up', color: '--foraneo-color'},
            {name: 'Cruce (Transfronterizo)', value: '1.7M$', trend: 'neutral', color: '--cruce-color'},
            {name: 'Local', value: '0.55M$', trend: 'up', color: '--local-color'}
        ],
        trendsBySegment: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            series: [
                {
                    name: 'Foráneo',
                    color: '--foraneo-color',
                    data: [2.4, 2.45, 2.5, 2.52, 2.55, 2.58, 2.6, 2.6, 2.6, 2.6, 2.6, 2.6]
                },
                {
                    name: 'Cruce (Transfronterizo)',
                    color: '--cruce-color',
                    data: [1.6, 1.62, 1.65, 1.68, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7, 1.7]
                },
                {
                    name: 'Local',
                    color: '--local-color',
                    data: [0.48, 0.5, 0.52, 0.53, 0.54, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55, 0.55]
                }
            ]
        },
        metrics: [
            {label: 'Meta anual', value: '58M$'},
            {label: 'YTD', value: '14.6M$ (25.2%)'},
            {label: 'Proyección anual', value: '62.4M$ (+7.6%)'}
        ]
    },
    'margen': {
        title: 'Margen Operativo',
        value: '12.5%',
        status: 'status-good',
        statusData: 'good',
        statusText: 'Tendencia Positiva',
        context: 'Mes Acumulado (Ayer: 11.8%)',
        description: 'El margen operativo es la ganancia como porcentaje de los ingresos, después de deducir todos los costos operativos.',
        segments: [
            {name: 'Foráneo', value: '15.2%', trend: 'up', color: '--foraneo-color'},
            {name: 'Cruce (Transfronterizo)', value: '10.1%', trend: 'neutral', color: '--cruce-color'},
            {name: 'Local', value: '11.5%', trend: 'up', color: '--local-color'},
            {name: 'Marítimo (Drayage)', value: '8.9%', trend: 'down', color: '--maritimo-color'}
        ],
        trendsBySegment: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            series: [
                {
                    name: 'Foráneo',
                    color: '--foraneo-color',
                    data: [14.2, 14.3, 14.5, 14.4, 14.5, 14.8, 14.9, 15.0, 15.1, 15.2, 15.2, 15.2]
                },
                {
                    name: 'Cruce (Transfronterizo)',
                    color: '--cruce-color',
                    data: [9.8, 9.9, 10.0, 9.9, 9.8, 9.9, 10.0, 10.1, 10.1, 10.1, 10.1, 10.1]
                },
                {
                    name: 'Local',
                    color: '--local-color',
                    data: [10.5, 10.6, 10.7, 10.8, 10.9, 11.0, 11.1, 11.2, 11.3, 11.4, 11.4, 11.5]
                },
                {
                    name: 'Marítimo (Drayage)',
                    color: '--maritimo-color',
                    data: [9.5, 9.4, 9.3, 9.2, 9.1, 9.0, 8.9, 8.9, 8.9, 8.9, 8.9, 8.9]
                }
            ]
        },
        metrics: [
            {label: 'Meta anual', value: '12.0%'},
            {label: 'Promedio año anterior', value: '11.5%'},
            {label: 'Tendencia mensual', value: '+0.7%'}
        ]
    },
    'utilizacion': {
        title: 'Utilización de Flota',
        value: '88%',
        status: 'status-good',
        statusData: 'good',
        statusText: 'Óptimo',
        context: '440 / 500 Unidades Activas',
        description: 'Porcentaje de unidades utilizadas del total de la flota. Un valor óptimo indica eficiencia operativa.',
        gaugeData: {
            value: 88,
            min: 0,
            max: 100,
            lowThreshold: 70,
            highThreshold: 85
        },
        fleetData: {
            total: 500,
            active: 440,
            maintenance: 35,
            available: 25,
            avgAge: 4.2,
            avgMileage: '320,450 km'
        },
        segments: [
            {name: 'Foráneo', value: '90%', trend: 'up', color: '--foraneo-color'},
            {name: 'Cruce (Transfronterizo)', value: '85%', trend: 'neutral', color: '--cruce-color'},
            {name: 'Local', value: '92%', trend: 'up', color: '--local-color'}
        ],
        trendsBySegment: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            series: [
                {
                    name: 'Foráneo',
                    color: '--foraneo-color',
                    data: [86, 87, 87, 88, 88, 89, 89, 90, 90, 90, 90, 90]
                },
                {
                    name: 'Cruce (Transfronterizo)',
                    color: '--cruce-color',
                    data: [82, 82, 83, 83, 84, 84, 84, 85, 85, 85, 85, 85]
                },
                {
                    name: 'Local',
                    color: '--local-color',
                    data: [87, 87, 88, 89, 89, 90, 90, 91, 91, 92, 92, 92]
                }
            ]
        },
        metrics: [
            {label: 'Meta', value: '85%'},
            {label: 'Unidades en mantenimiento', value: '35 (7%)'},
            {label: 'Unidades sin asignar', value: '25 (5%)'}
        ],
        maintenanceCosts: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            currentYear: [25000, 28000, 26000, 24000, 27000, 22000, 25000, 36000, 32000, 26000, 24000, 21000],
            previousYear: [22000, 23000, 24000, 22000, 23000, 21000, 22000, 24000, 25000, 23000, 22000, 21000]
        },
        fuelCosts: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            currentYear: [580000, 590000, 600000, 585000, 595000, 570000, 580000, 650000, 620000, 590000, 575000, 560000],
            previousYear: [550000, 560000, 560000, 550000, 560000, 545000, 550000, 565000, 560000, 555000, 550000, 540000]
        }
    },
    'otd': {
        title: 'Entregas a Tiempo (OTD)',
        value: '96.2%',
        status: 'status-good',
        statusData: 'good',
        statusText: 'Excelente',
        context: 'Últimas 24 horas (Meta: >95%)',
        description: 'Porcentaje de envíos entregados dentro de la ventana de tiempo comprometida con el cliente.',
        donutData: {
            percentage: 96.2,
            onTime: 1258,
            outOfTime: 48
        },
        segments: [
            {name: 'Foráneo', value: '97.0%', trend: 'up', color: '--foraneo-color'},
            {name: 'Cruce (Transfronterizo)', value: '95.1%', trend: 'neutral', color: '--cruce-color'},
            {name: 'Local', value: '98.5%', trend: 'up', color: '--local-color'}
        ],
        trendsBySegment: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            series: [
                {
                    name: 'Foráneo',
                    color: '--foraneo-color',
                    data: [95.2, 95.5, 95.7, 95.9, 96.0, 96.2, 96.4, 96.6, 96.8, 97.0, 97.0, 97.0]
                },
                {
                    name: 'Cruce (Transfronterizo)',
                    color: '--cruce-color',
                    data: [93.8, 94.0, 94.2, 94.3, 94.5, 94.6, 94.7, 94.9, 95.0, 95.0, 95.1, 95.1]
                },
                {
                    name: 'Local',
                    color: '--local-color',
                    data: [97.5, 97.6, 97.7, 97.8, 97.9, 98.0, 98.1, 98.2, 98.3, 98.4, 98.5, 98.5]
                }
            ]
        },
        metrics: [
            {label: 'Meta', value: '95.0%'},
            {label: 'Entregas totales ayer', value: '1,258'},
            {label: 'Fuera de tiempo', value: '48 (3.8%)'}
        ]
    },
    'cruce': {
        title: 'Tiempo Prom. Cruce Fronterizo',
        value: '4h 15m',
        status: 'status-warning',
        statusData: 'warning',
        statusText: 'Elevado vs Prom. Hist. 3h 30m',
        context: 'Promedio Laredo (Ayer)',
        description: 'Tiempo promedio que tardan las unidades en completar el proceso de cruce fronterizo.',
        segments: [
            {name: 'Laredo (Comercio Mundial)', value: '4h 15m', trend: 'down', color: '--system-red'},
            {name: 'Pharr', value: '3h 50m', trend: 'neutral', color: '--system-orange'},
            {name: 'Otay Mesa', value: '5h 05m', trend: 'down', color: '--system-yellow'}
        ],
        trendsBySegment: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            series: [
                {
                    name: 'Laredo',
                    color: '--system-red',
                    data: [3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.25]
                },
                {
                    name: 'Pharr',
                    color: '--system-orange',
                    data: [3.6, 3.6, 3.6, 3.6, 3.7, 3.7, 3.7, 3.8, 3.8, 3.8, 3.8, 3.83]
                },
                {
                    name: 'Otay Mesa',
                    color: '--system-yellow',
                    data: [4.7, 4.7, 4.8, 4.8, 4.9, 4.9, 5.0, 5.0, 5.0, 5.0, 5.0, 5.08]
                }
            ]
        },
        metrics: [
            {label: 'Promedio histórico', value: '3h 30m'},
            {label: 'Cruces completados ayer', value: '87'},
            {label: 'Variación vs promedio', value: '+45 min (21%)'}
        ]
    },
    'costo-km': {
        title: 'Costo por Kilómetro (CPK)',
        value: '1.95 $/km',
        status: 'status-bad',
        statusData: 'bad',
        statusText: 'Incremento 5% vs Mes Ant.',
        context: 'Promedio Flota (Mes Actual)',
        description: 'Costo total de operación dividido por los kilómetros recorridos. Incluye combustible, mantenimiento, salarios y gastos indirectos.',
        segments: [
            {name: 'Foráneo', value: '1.80 $/km', trend: 'down', color: '--foraneo-color'},
            {name: 'Cruce (Transfronterizo)', value: '2.10 $/km', trend: 'down', color: '--cruce-color'},
            {name: 'Local', value: '2.35 $/km', trend: 'down', color: '--local-color'}
        ],
        trendsBySegment: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            series: [
                {
                    name: 'Foráneo',
                    color: '--foraneo-color',
                    data: [1.75, 1.75, 1.76, 1.77, 1.77, 1.78, 1.78, 1.79, 1.79, 1.80, 1.80, 1.80]
                },
                {
                    name: 'Cruce (Transfronterizo)',
                    color: '--cruce-color',
                    data: [2.05, 2.05, 2.06, 2.07, 2.07, 2.08, 2.08, 2.09, 2.09, 2.10, 2.10, 2.10]
                },
                {
                    name: 'Local',
                    color: '--local-color',
                    data: [2.30, 2.30, 2.31, 2.32, 2.32, 2.33, 2.33, 2.34, 2.34, 2.35, 2.35, 2.35]
                }
            ]
        },
        metrics: [
            {label: 'Mes anterior', value: '1.86 $/km'},
            {label: 'Combustible', value: '0.85 $/km (44%)'},
            {label: 'Mantenimiento', value: '0.18 $/km (9%)'},
            {label: 'Operador', value: '0.58 $/km (30%)'},
            {label: 'Otros', value: '0.34 $/km (17%)'}
        ]
    },
    'rpm': {
        title: 'Ingreso por Kilómetro (RPM)',
        value: '2.25 $/km',
        status: 'status-good',
        statusData: 'good',
        statusText: 'Estable vs Meta',
        context: 'Promedio Flota (Mes Actual)',
        description: 'Ingreso total generado dividido por los kilómetros recorridos. Indicador clave de la rentabilidad por distancia.',
        segments: [
            {name: 'Foráneo', value: '2.15 $/km', trend: 'up', color: '--foraneo-color'},
            {name: 'Cruce (Transfronterizo)', value: '2.40 $/km', trend: 'neutral', color: '--cruce-color'},
            {name: 'Local', value: '2.60 $/km', trend: 'up', color: '--local-color'}
        ],
        trendsBySegment: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            series: [
                {
                    name: 'Foráneo',
                    color: '--foraneo-color',
                    data: [2.10, 2.10, 2.11, 2.12, 2.12, 2.13, 2.13, 2.14, 2.14, 2.15, 2.15, 2.15]
                },
                {
                    name: 'Cruce (Transfronterizo)',
                    color: '--cruce-color',
                    data: [2.38, 2.38, 2.39, 2.39, 2.39, 2.39, 2.40, 2.40, 2.40, 2.40, 2.40, 2.40]
                },
                {
                    name: 'Local',
                    color: '--local-color',
                    data: [2.52, 2.53, 2.54, 2.55, 2.56, 2.57, 2.57, 2.58, 2.58, 2.59, 2.60, 2.60]
                }
            ]
        },
        metrics: [
            {label: 'Meta', value: '2.20 $/km'},
            {label: 'Mes anterior', value: '2.24 $/km'},
            {label: 'Mejor mes histórico', value: '2.32 $/km (Oct 2024)'}
        ]
    },
    'ingreso-camion': {
        title: 'Ingreso Prom. por Camión',
        value: '1,250 $/día',
        status: 'status-warning',
        statusData: 'warning',
        statusText: 'Bajo Meta',
        context: 'Promedio mes actual (Meta: $1,350/día)',
        description: 'Ingreso total generado dividido por el número de unidades activas y días operativos.',
        segments: [
            {name: 'Foráneo', value: '1,350 $/día', trend: 'up', color: '--foraneo-color'},
            {name: 'Cruce (Transfronterizo)', value: '1,200 $/día', trend: 'down', color: '--cruce-color'},
            {name: 'Local', value: '1,100 $/día', trend: 'neutral', color: '--local-color'}
        ],
        trendsBySegment: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            series: [
                {
                    name: 'Foráneo',
                    color: '--foraneo-color',
                    data: [1300, 1310, 1320, 1330, 1340, 1345, 1345, 1350, 1350, 1350, 1350, 1350]
                },
                {
                    name: 'Cruce (Transfronterizo)',
                    color: '--cruce-color',
                    data: [1250, 1240, 1235, 1230, 1225, 1220, 1215, 1210, 1205, 1200, 1200, 1200]
                },
                {
                    name: 'Local',
                    color: '--local-color',
                    data: [1090, 1090, 1095, 1095, 1100, 1100, 1100, 1100, 1100, 1100, 1100, 1100]
                }
            ]
        },
        metrics: [
            {label: 'Meta', value: '$1,350/día'},
            {label: 'Mejor mes', value: '$1,380/día (Mar 2024)'},
            {label: 'Gap vs meta', value: '$100/día (7.4%)'}
        ]
    },
    'costo-mtto': {
        title: 'Costo Mtto. por Kilómetro',
        value: '0.18 $/km',
        status: 'status-neutral',
        statusData: 'neutral',
        statusText: 'Estable vs Mes Ant.',
        context: 'Acumulado mes (Prev + Correctivo)',
        description: 'Costo total de mantenimiento dividido por los kilómetros recorridos.',
        segments: [
            {name: 'Preventivo', value: '0.11 $/km', trend: 'neutral', color: '--system-blue'},
            {name: 'Correctivo', value: '0.07 $/km', trend: 'neutral', color: '--system-orange'}
        ],
        trendsBySegment: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            series: [
                {
                    name: 'Preventivo',
                    color: '--system-blue',
                    data: [0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11, 0.11]
                },
                {
                    name: 'Correctivo',
                    color: '--system-orange',
                    data: [0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07, 0.07]
                }
            ]
        },
        metrics: [
            {label: 'Meta', value: '0.18 $/km'},
            {label: 'Edad promedio flota', value: '3.2 años'},
            {label: 'MTBF', value: '12,500 km'}
        ],
        maintenanceCosts: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            currentYear: [25000, 28000, 26000, 24000, 27000, 22000, 25000, 36000, 32000, 26000, 24000, 21000],
            previousYear: [22000, 23000, 24000, 22000, 23000, 21000, 22000, 24000, 25000, 23000, 22000, 21000]
        }
    },
    'dso': {
        title: 'Días Cuentas por Cobrar (DSO)',
        value: '42 días',
        status: 'status-bad',
        statusData: 'bad',
        statusText: 'Alto',
        context: 'Al cierre de ayer (Meta: <35 días)',
        description: 'Promedio de días que se tarda en cobrar las facturas emitidas.',
        segments: [
            {name: 'Corporativos', value: '45 días', trend: 'down', color: '--system-purple'},
            {name: 'PYMES', value: '38 días', trend: 'neutral', color: '--system-teal'},
            {name: 'Spot', value: '30 días', trend: 'up', color: '--system-green'}
        ],
        trendsBySegment: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            series: [
                {
                    name: 'Corporativos',
                    color: '--system-purple',
                    data: [40, 41, 42, 42, 43, 43, 44, 44, 45, 45, 45, 45]
                },
                {
                    name: 'PYMES',
                    color: '--system-teal',
                    data: [37, 37, 37, 38, 38, 38, 38, 38, 38, 38, 38, 38]
                },
                {
                    name: 'Spot',
                    color: '--system-green',
                    data: [34, 33, 33, 32, 32, 31, 31, 30, 30, 30, 30, 30]
                }
            ]
        },
        metrics: [
            {label: 'Meta', value: '35 días'},
            {label: 'Cartera vencida', value: '$12.5M (18%)'},
            {label: 'Cuentas en litigio', value: '$2.1M (3%)'}
        ]
    },
    'seguridad': {
        title: 'Incidentes Seguridad / MMkm',
        value: '1.2',
        status: 'status-warning',
        statusData: 'warning',
        statusText: 'Requiere Atención',
        context: 'Últimos 12 meses (Meta: <1.0)',
        description: 'Número de incidentes de seguridad por cada millón de kilómetros recorridos.',
        segments: [
            {name: 'Accidentes menores', value: '0.8', trend: 'down', color: '--system-orange'},
            {name: 'Accidentes graves', value: '0.3', trend: 'neutral', color: '--system-red'},
            {name: 'Incidentes sin daño', value: '0.1', trend: 'up', color: '--system-yellow'}
        ],
        trendsBySegment: {
            labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
            series: [
                {
                    name: 'Accidentes menores',
                    color: '--system-orange',
                    data: [0.9, 0.9, 0.9, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8, 0.8]
                },
                {
                    name: 'Accidentes graves',
                    color: '--system-red',
                    data: [0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3]
                },
                {
                    name: 'Incidentes sin daño',
                    color: '--system-yellow',
                    data: [0.08, 0.08, 0.09, 0.09, 0.09, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1]
                }
            ]
        },
        metrics: [
            {label: 'Meta', value: '<1.0'},
            {label: 'Mejor desempeño histórico', value: '0.8 (2023)'},
            {label: 'Fatalidades último año', value: '0'}
        ]
    },
    'satisfaccion': {
        title: 'Satisfacción Operador',
        value: '4.1/5',
        status: 'status-neutral',
        statusData: 'neutral',
        statusText: 'Mejorable',
        context: 'Encuesta Trim. (Rotación: 8% Anual)',
        description: 'Nivel de satisfacción reportado por los operadores en encuestas trimestrales.',
        segments: [
            {name: 'Compensación', value: '3.8/5', trend: 'neutral', color: '--system-pink'},
            {name: 'Rutas y Horarios', value: '4.2/5', trend: 'up', color: '--system-indigo'},
            {name: 'Mantenimiento unidades', value: '4.3/5', trend: 'up', color: '--system-teal'}
        ],
        trendsBySegment: {
            labels: ['Q1-23', 'Q2-23', 'Q3-23', 'Q4-23', 'Q1-24', 'Q2-24', 'Q3-24', 'Q4-24'],
            series: [
                {
                    name: 'Compensación',
                    color: '--system-pink',
                    data: [3.6, 3.6, 3.7, 3.7, 3.7, 3.8, 3.8, 3.8]
                },
                {
                    name: 'Rutas y Horarios',
                    color: '--system-indigo',
                    data: [4.0, 4.0, 4.1, 4.1, 4.1, 4.2, 4.2, 4.2]
                },
                {
                    name: 'Mtto. unidades',
                    color: '--system-teal',
                    data: [4.0, 4.1, 4.1, 4.2, 4.2, 4.3, 4.3, 4.3]
                }
            ]
        },
        metrics: [
            {label: 'Meta', value: '4.5/5'},
            {label: 'Participación encuesta', value: '87%'},
            {label: 'Rotación anual', value: '8%'}
        ]
    }
};

// Función para mostrar la pantalla de detalle
function showDetail(kpiId) {
    console.log(`Showing detail for KPI: ${kpiId}`);
    
    // Obtener datos del KPI
    const kpiData = kpiDetails[kpiId] || {
        title: 'Detalles del KPI',
        value: 'N/A',
        context: 'Información no disponible',
        description: 'No hay detalles disponibles para este KPI.'
    };
    
    // Actualizar título
    document.getElementById('detail-screen-title').textContent = kpiData.title;
    
    // Generar contenido HTML para el detalle según el tipo de KPI
    let detailHTML = '';
    
    // Contenido de la vista de detalle específico para cada KPI
    if (kpiId === 'ventas') {
        detailHTML = generateSalesDetail(kpiData);
    } else if (kpiId === 'utilizacion') {
        detailHTML = generateFleetDetail(kpiData);
    } else if (kpiId === 'otd') {
        detailHTML = generateOTDDetail(kpiData);
    } else if (kpiId === 'costo-mtto') {
        detailHTML = generateMaintenanceDetail(kpiData);
    } else {
        // Vista genérica para los demás KPIs
        detailHTML = generateGenericDetail(kpiData);
    }
    
    // Actualizar el contenido
    document.getElementById('detail-content').innerHTML = detailHTML;
    
    // Transición a la pantalla de detalle
    document.getElementById('main-screen').classList.remove('active');
    document.getElementById('main-screen').classList.add('offscreen-left');
    document.getElementById('detail-screen').classList.remove('offscreen-right');
    document.getElementById('detail-screen').classList.add('active');
    
    // Inicializar gráficos y visualizaciones específicas después de renderizar el contenido
    setTimeout(() => {
        console.log(`Rendering charts for KPI: ${kpiId}`);
        
        // Inicializar visualizaciones comunes si existen los datos
        if (kpiData.trendsBySegment) {
            console.log(`Creating bar chart for ${kpiId}`);
            createBarChart(kpiId, kpiData.trendsBySegment);
        }
        
        // Visualizaciones específicas por tipo de KPI
        if (kpiId === 'ventas' && kpiData.quarterlyComparison) {
            console.log('Rendering sales chart');
            renderSalesChart(kpiData.quarterlyComparison);
        } 
        
        if (kpiId === 'utilizacion') {
            console.log('Rendering gauge chart');
            if (kpiData.gaugeData) {
                renderGauge(kpiData.gaugeData);
            }
            
            // Renderizar gráficos de costos si existen
            if (kpiData.maintenanceCosts && kpiData.fuelCosts) {
                console.log('Rendering cost charts');
                renderCostCharts(kpiData.maintenanceCosts, kpiData.fuelCosts);
            }
        } 
        
        if (kpiId === 'otd' && kpiData.donutData) {
            console.log('Rendering donut chart');
            renderDonutChart(kpiData.donutData);
        } 
        
        if (kpiId === 'costo-mtto' && kpiData.maintenanceCosts) {
            console.log('Rendering maintenance cost chart');
            renderMaintenanceCostChart(kpiData.maintenanceCosts);
        }
        
        // Para otros KPIs, también podemos renderizar gráficos genéricos
    }, 300);
}

// Generador de detalle para Ventas
function generateSalesDetail(kpiData) {
    return `
        <div class="detail-card">
            <div class="detail-value-large">${kpiData.value}</div>
            <div class="kpi-context">${kpiData.context}</div>
            <div class="kpi-status ${kpiData.status}">${kpiData.statusText}</div>
            <p style="margin-top: 16px; color: var(--secondary-label-color);">${kpiData.description || ''}</p>
        </div>
        <div class="detail-card">
            <div class="detail-section-title">Ventas por Periodo</div>
            <div class="sales-detail-grid">
                <div class="sales-metric">
                    <div class="sales-metric-value blue">${formatCurrency(kpiData.salesData.today.value)}</div>
                    <div class="sales-metric-label">Ventas del día</div>
                    <div class="sales-metric-prev">Anterior: ${formatCurrency(kpiData.salesData.today.prev)} (${kpiData.salesData.today.change})</div>
                </div>
                <div class="sales-metric">
                    <div class="sales-metric-value orange">${formatCurrency(kpiData.salesData.month.value)}</div>
                    <div class="sales-metric-label">Ventas del mes</div>
                    <div class="sales-metric-prev">Anterior: ${formatCurrency(kpiData.salesData.month.prev)} (${kpiData.salesData.month.change})</div>
                </div>
            </div>
        </div>
        <div class="detail-card">
            <div class="detail-section-title">Meta Global</div>
            <div class="goal-card">
                <div class="goal-value">${kpiData.metrics.find(m => m.label === 'Meta anual')?.value || '58M$'}</div>
                <div class="goal-progress">
                    <div class="progress-bar" style="width: ${kpiData.metrics.find(m => m.label === 'YTD')?.value.includes('(') ? kpiData.metrics.find(m => m.label === 'YTD')?.value.split('(')[1].replace('%)', '') : '25.2'}%;"></div>
                </div>
                <div class="goal-stats">
                    <div>Acumulado: ${kpiData.metrics.find(m => m.label === 'YTD')?.value || '14.6M$ (25.2%)'}</div>
                    <div>Proyección: ${kpiData.metrics.find(m => m.label === 'Proyección anual')?.value || '62.4M$ (+7.6%)'}</div>
                </div>
            </div>
        </div>
        <div class="detail-card">
            <div class="detail-section-title">Comparativo Trimestral (${kpiData.quarterlyComparison.currentYear.year} vs ${kpiData.quarterlyComparison.previousYear.year})</div>
            <div id="sales-chart" class="sales-chart-container"></div>
        </div>
        <div class="detail-card">
            <div class="detail-section-title">Desglose por Tipo de Operación</div>
            ${kpiData.segments.map(segment => `
                <div class="detail-row">
                    <span class="detail-label">${segment.name}</span>
                    <span class="detail-value">${segment.value}
                        ${segment.trend === 'up' ?
                            `<span class="detail-trend"><span class="trend-icon trend-up">▲</span></span>` :
                            segment.trend === 'down' ?
                            `<span class="detail-trend"><span class="trend-icon trend-down">▼</span></span>` :
                            `<span class="detail-trend"><span class="trend-icon trend-neutral">■</span></span>`}
                    </span>
                </div>
            `).join('')}
            <div class="detail-section-subtitle">Metas por Unidad de Negocio</div>
            <div class="goals-by-segment">
                <div class="segment-goal">
                    <div class="segment-name"><div class="color-dot" style="background-color: var(--foraneo-color);"></div>Foráneo</div>
                    <div class="segment-target">Meta: 2.8M$</div>
                    <div class="goal-progress"><div class="progress-bar" style="width: 93%; background-color: var(--foraneo-color);"></div></div>
                </div>
                <div class="segment-goal">
                    <div class="segment-name"><div class="color-dot" style="background-color: var(--cruce-color);"></div>Cruce (Transfronterizo)</div>
                    <div class="segment-target">Meta: 1.8M$</div>
                    <div class="goal-progress"><div class="progress-bar" style="width: 94%; background-color: var(--cruce-color);"></div></div>
                </div>
                <div class="segment-goal">
                    <div class="segment-name"><div class="color-dot" style="background-color: var(--local-color);"></div>Local</div>
                    <div class="segment-target">Meta: 0.6M$</div>
                    <div class="goal-progress"><div class="progress-bar" style="width: 92%; background-color: var(--local-color);"></div></div>
                </div>
            </div>
        </div>
        <div class="detail-card">
            <div class="detail-section-title">Tendencia por Unidad de Negocio</div>
            <div id="chart-container-ventas" class="chart-container"></div>
            <div class="chart-legend">
                ${kpiData.trendsBySegment.series.map(series => `
                    <div class="legend-item">
                        <div class="legend-color" style="background-color: var(${series.color});"></div>
                        ${series.name}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Generador de detalle para Utilización de Flota
function generateFleetDetail(kpiData) {
    return `
        <div class="detail-card">
            <div class="gauge-container">
                <div class="gauge-background"></div>
                <div class="gauge-fill"></div>
                <div class="gauge-needle"></div>
                <div class="gauge-center"></div>
                <div class="gauge-value">${kpiData.value}</div>
                <div class="gauge-label">Eficiencia de Flota</div>
            </div>
            <div class="kpi-context" style="text-align: center; margin-top: 60px;">${kpiData.context}</div>
            <p style="margin-top: 16px; color: var(--secondary-label-color); text-align: center;">${kpiData.description || ''}</p>
        </div>
        <div class="detail-card">
            <div class="detail-section-title">Meta Global</div>
            <div class="goal-card">
                <div class="goal-value">${kpiData.metrics.find(m => m.label === 'Meta')?.value || '85%'}</div>
                <div class="goal-progress">
                    <div class="progress-bar" style="width: ${parseInt(kpiData.value)/0.85}%;"></div>
                </div>
                <div class="goal-stats">
                    <div>Actual: ${kpiData.value} (${Math.round(parseInt(kpiData.value)/0.85)}% de meta)</div>
                    <div>Umbral óptimo: >85%</div>
                </div>
            </div>
        </div>
        <div class="detail-card">
            <div class="detail-section-title">Estado de la Flota</div>
            <div class="fleet-info-grid">
                <div class="fleet-metric">
                    <div class="fleet-metric-value">${kpiData.fleetData.total}</div>
                    <div class="fleet-metric-label">Total flota</div>
                </div>
                <div class="fleet-metric">
                    <div class="fleet-metric-value">${kpiData.fleetData.active}</div>
                    <div class="fleet-metric-label">En operación</div>
                </div>
                <div class="fleet-metric">
                    <div class="fleet-metric-value">${kpiData.fleetData.maintenance}</div>
                    <div class="fleet-metric-label">En mantenimiento</div>
                </div>
                <div class="fleet-metric">
                    <div class="fleet-metric-value">${kpiData.fleetData.available}</div>
                    <div class="fleet-metric-label">Disponibles</div>
                </div>
            </div>
        </div>
        <div class="detail-card">
            <div class="detail-section-title">Utilización por Tipo de Operación</div>
            ${kpiData.segments.map(segment => `
                <div class="detail-row">
                    <span class="detail-label">${segment.name}</span>
                    <span class="detail-value">${segment.value}
                        ${segment.trend === 'up' ?
                            `<span class="detail-trend"><span class="trend-icon trend-up">▲</span></span>` :
                            segment.trend === 'down' ?
                            `<span class="detail-trend"><span class="trend-icon trend-down">▼</span></span>` :
                            `<span class="detail-trend"><span class="trend-icon trend-neutral">■</span></span>`}
                    </span>
                </div>
            `).join('')}
            <div class="detail-section-subtitle">Metas por Unidad de Negocio</div>
            <div class="goals-by-segment">
                <div class="segment-goal">
                    <div class="segment-name"><div class="color-dot" style="background-color: var(--foraneo-color);"></div>Foráneo</div>
                    <div class="segment-target">Meta: 88%</div>
                    <div class="goal-progress"><div class="progress-bar" style="width: ${90/0.88*100}%; background-color: var(--foraneo-color);"></div></div>
                </div>
                <div class="segment-goal">
                    <div class="segment-name"><div class="color-dot" style="background-color: var(--cruce-color);"></div>Cruce (Transfronterizo)</div>
                    <div class="segment-target">Meta: 82%</div>
                    <div class="goal-progress"><div class="progress-bar" style="width: ${85/0.82*100}%; background-color: var(--cruce-color);"></div></div>
                </div>
                <div class="segment-goal">
                    <div class="segment-name"><div class="color-dot" style="background-color: var(--local-color);"></div>Local</div>
                    <div class="segment-target">Meta: 90%</div>
                    <div class="goal-progress"><div class="progress-bar" style="width: ${92/0.90*100}%; background-color: var(--local-color);"></div></div>
                </div>
            </div>
        </div>
        <div class="detail-card">
            <div class="detail-section-title">Tendencia por Unidad de Negocio</div>
            <div id="chart-container-utilizacion" class="chart-container"></div>
            <div class="chart-legend">
                ${kpiData.trendsBySegment.series.map(series => `
                    <div class="legend-item">
                        <div class="legend-color" style="background-color: var(${series.color});"></div>
                        ${series.name}
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="detail-card">
            <div class="detail-section-title">Costos Mensuales</div>
            <div class="monthly-costs-container">
                <div>
                    <div class="cost-chart-title">Mantenimiento ($/mes)</div>
                    <div id="maintenance-cost-chart" class="cost-chart-container"></div>
                </div>
                <div>
                    <div class="cost-chart-title">Combustible ($/mes)</div>
                    <div id="fuel-cost-chart" class="cost-chart-container"></div>
                </div>
            </div>
            <div class="chart-legend" style="margin-top: 20px;">
                <div class="legend-item">
                    <div class="legend-color" style="background-color: var(--current-year-color);"></div>
                    2025
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background-color: var(--previous-year-color);"></div>
                    2024
                </div>
            </div>
        </div>
    `;
}

// Generador de detalle para OTD (On-Time Delivery)
function generateOTDDetail(kpiData) {
    return `
        <div class="detail-card">
            <div class="donut-chart-container">
                <div class="donut-chart" style="--percentage: ${kpiData.donutData.percentage}%">
                    <div class="donut-chart-hole">
                        <div class="donut-chart-value">${kpiData.value}</div>
                        <div class="donut-chart-label">Entregas a tiempo</div>
                    </div>
                </div>
            </div>
            <div class="kpi-context" style="text-align: center; margin-top: 20px;">${kpiData.context}</div>
            <p style="margin-top: 16px; color: var(--secondary-label-color); text-align: center;">${kpiData.description || ''}</p>
        </div>
        <div class="detail-card">
            <div class="detail-section-title">Meta Global</div>
            <div class="goal-card">
                <div class="goal-value">${kpiData.metrics.find(m => m.label === 'Meta')?.value || '95.0%'}</div>
                <div class="goal-progress">
                    <div class="progress-bar" style="width: ${parseFloat(kpiData.value)/0.95*100}%;"></div>
                </div>
                <div class="goal-stats">
                    <div>Actual: ${kpiData.value} (${Math.round(parseFloat(kpiData.value)/0.95*100)}% de meta)</div>
                    <div>Umbral excelente: >95%</div>
                </div>
            </div>
        </div>
        <div class="detail-card">
            <div class="detail-section-title">Estado de Entregas</div>
            <div class="fleet-info-grid">
                <div class="fleet-metric">
                    <div class="fleet-metric-value">${kpiData.donutData.onTime}</div>
                    <div class="fleet-metric-label">Dentro de tiempo</div>
                </div>
                <div class="fleet-metric">
                    <div class="fleet-metric-value">${kpiData.donutData.outOfTime}</div>
                    <div class="fleet-metric-label">Fuera de tiempo</div>
                </div>
            </div>
        </div>
        <div class="detail-card">
            <div class="detail-section-title">OTD por Tipo de Operación</div>
            ${kpiData.segments.map(segment => `
                <div class="detail-row">
                    <span class="detail-label">${segment.name}</span>
                    <span class="detail-value">${segment.value}
                        ${segment.trend === 'up' ?
                            `<span class="detail-trend"><span class="trend-icon trend-up">▲</span></span>` :
                            segment.trend === 'down' ?
                            `<span class="detail-trend"><span class="trend-icon trend-down">▼</span></span>` :
                            `<span class="detail-trend"><span class="trend-icon trend-neutral">■</span></span>`}
                    </span>
                </div>
            `).join('')}
            <div class="detail-section-subtitle">Metas por Unidad de Negocio</div>
            <div class="goals-by-segment">
                <div class="segment-goal">
                    <div class="segment-name"><div class="color-dot" style="background-color: var(--foraneo-color);"></div>Foráneo</div>
                    <div class="segment-target">Meta: 96%</div>
                    <div class="goal-progress"><div class="progress-bar" style="width: ${97.0/0.96*100}%; background-color: var(--foraneo-color);"></div></div>
                </div>
                <div class="segment-goal">
                    <div class="segment-name"><div class="color-dot" style="background-color: var(--cruce-color);"></div>Cruce (Transfronterizo)</div>
                    <div class="segment-target">Meta: 94%</div>
                    <div class="goal-progress"><div class="progress-bar" style="width: ${95.1/0.94*100}%; background-color: var(--cruce-color);"></div></div>
                </div>
                <div class="segment-goal">
                    <div class="segment-name"><div class="color-dot" style="background-color: var(--local-color);"></div>Local</div>
                    <div class="segment-target">Meta: 98%</div>
                    <div class="goal-progress"><div class="progress-bar" style="width: ${98.5/0.98*100}%; background-color: var(--local-color);"></div></div>
                </div>
            </div>
        </div>
        <div class="detail-card">
            <div class="detail-section-title">Tendencia por Unidad de Negocio</div>
            <div id="chart-container-otd" class="chart-container"></div>
            <div class="chart-legend">
                ${kpiData.trendsBySegment.series.map(series => `
                    <div class="legend-item">
                        <div class="legend-color" style="background-color: var(${series.color});"></div>
                        ${series.name}
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// Generador de detalle para Costos de Mantenimiento
function generateMaintenanceDetail(kpiData) {
    return `
        <div class="detail-card">
            <div class="detail-value-large">${kpiData.value}</div>
            <div class="kpi-context">${kpiData.context}</div>
            <div class="kpi-status ${kpiData.status}">${kpiData.statusText}</div>
            <p style="margin-top: 16px; color: var(--secondary-label-color);">${kpiData.description || ''}</p>
        </div>
        <div class="detail-card">
            <div class="detail-section-title">Desglose por Tipo de Mantenimiento</div>
            ${kpiData.segments.map(segment => `
                <div class="detail-row">
                    <span class="detail-label">${segment.name}</span>
                    <span class="detail-value">${segment.value}
                        ${segment.trend === 'up' ?
                            `<span class="detail-trend"><span class="trend-icon trend-up">▲</span></span>` :
                            segment.trend === 'down' ?
                            `<span class="detail-trend"><span class="trend-icon trend-down">▼</span></span>` :
                            `<span class="detail-trend"><span class="trend-icon trend-neutral">■</span></span>`}
                    </span>
                </div>
            `).join('')}
        </div>
        <div class="detail-card">
            <div class="detail-section-title">Tendencia por Tipo de Mantenimiento</div>
            <div id="chart-container-costo-mtto" class="chart-container"></div>
            <div class="chart-legend">
                ${kpiData.trendsBySegment.series.map(series => `
                    <div class="legend-item">
                        <div class="legend-color" style="background-color: var(${series.color});"></div>
                        ${series.name}
                    </div>
                `).join('')}
            </div>
        </div>
        <div class="detail-card">
            <div class="detail-section-title">Costo de Mantenimiento Mensual</div>
            <div id="maintenance-monthly-chart" class="cost-chart-container" style="height: 200px;"></div>
            <div class="chart-legend" style="margin-top: 20px;">
                <div class="legend-item">
                    <div class="legend-color" style="background-color: var(--current-year-color);"></div>
                    2025
                </div>
                <div class="legend-item">
                    <div class="legend-color" style="background-color: var(--previous-year-color);"></div>
                    2024
                </div>
            </div>
        </div>
        <div class="detail-card">
            <div class="detail-section-title">Métricas Adicionales</div>
            ${kpiData.metrics.map(metric => `
                <div class="detail-row">
                    <span class="detail-label">${metric.label}</span>
                    <span class="detail-value">${metric.value}</span>
                </div>
            `).join('')}
        </div>
    `;
}

// Generador de detalle genérico para otros KPIs
function generateGenericDetail(kpiData) {
    return `
        <div class="detail-card">
            <div class="detail-value-large">${kpiData.value}</div>
            <div class="kpi-context">${kpiData.context}</div>
            ${kpiData.status ? `<div class="kpi-status ${kpiData.status}">${kpiData.statusText}</div>` : ''}
            <p style="margin-top: 16px; color: var(--secondary-label-color);">${kpiData.description || ''}</p>
        </div>
        ${kpiData.metrics && kpiData.metrics.length > 0 ? `
        <div class="detail-card">
            <div class="detail-section-title">Meta Global</div>
            <div class="goal-card">
                <div class="goal-value">${kpiData.metrics.find(m => m.label.includes('Meta'))?.value || 'N/A'}</div>
                ${kpiData.metrics.find(m => m.label.includes('Meta'))?.value ? `
                <div class="goal-progress">
                    <div class="progress-bar" style="width: ${calculateProgressPercent(kpiData.value, kpiData.metrics.find(m => m.label.includes('Meta'))?.value)}%;"></div>
                </div>
                <div class="goal-stats">
                    <div>Actual: ${kpiData.value}</div>
                    <div>Meta: ${kpiData.metrics.find(m => m.label.includes('Meta'))?.value}</div>
                </div>
                ` : ''}
            </div>
        </div>
        ` : ''}
        ${kpiData.segments && kpiData.segments.length > 0 ? `
        <div class="detail-card">
            <div class="detail-section-title">Desglose por Tipo de Operación</div>
            ${kpiData.segments.map(segment => `
                <div class="detail-row">
                    <span class="detail-label">${segment.name}</span>
                    <span class="detail-value">${segment.value}
                        ${segment.trend === 'up' ?
                            `<span class="detail-trend"><span class="trend-icon trend-up">▲</span></span>` :
                            segment.trend === 'down' ?
                            `<span class="detail-trend"><span class="trend-icon trend-down">▼</span></span>` :
                            `<span class="detail-trend"><span class="trend-icon trend-neutral">■</span></span>`}
                    </span>
                </div>
            `).join('')}
            ${kpiData.segments.length > 1 ? `
            <div class="detail-section-subtitle">Metas por Unidad de Negocio</div>
            <div class="goals-by-segment">
                ${kpiData.segments.map((segment, index) => {
                    const metaValues = ['95%', '90%', '92%', '88%'];
                    const segmentValue = parseFloat(segment.value);
                    const metaValue = parseFloat(metaValues[index % metaValues.length]);
                    const progressPercent = segmentValue && metaValue ? (segmentValue / metaValue) * 100 : 90;
                    const colors = ['--foraneo-color', '--cruce-color', '--local-color', '--system-purple'];
                    return `
                    <div class="segment-goal">
                        <div class="segment-name">
                            <div class="color-dot" style="background-color: var(${segment.color || colors[index % colors.length]});"></div>
                            ${segment.name}
                        </div>
                        <div class="segment-target">Meta: ${metaValues[index % metaValues.length]}</div>
                        <div class="goal-progress">
                            <div class="progress-bar" style="width: ${Math.min(progressPercent, 120)}%; background-color: var(${segment.color || colors[index % colors.length]});"></div>
                        </div>
                    </div>
                    `;
                }).join('')}
            </div>
            ` : ''}
        </div>
        ` : ''}
        ${kpiData.trendsBySegment && kpiData.trendsBySegment.series ? `
        <div class="detail-card">
            <div class="detail-section-title">Tendencia por Unidad de Negocio</div>
            <div id="chart-container-${kpiData.title.toLowerCase().replace(/\s+/g, '-')}" class="chart-container"></div>
            <div class="chart-legend">
                ${kpiData.trendsBySegment.series.map(series => `
                    <div class="legend-item">
                        <div class="legend-color" style="background-color: var(${series.color});"></div>
                        ${series.name}
                    </div>
                `).join('')}
            </div>
        </div>
        ` : ''}
        ${kpiData.metrics && kpiData.metrics.length > 0 ? `
        <div class="detail-card">
            <div class="detail-section-title">Métricas Adicionales</div>
            ${kpiData.metrics.map(metric => `
                <div class="detail-row">
                    <span class="detail-label">${metric.label}</span>
                    <span class="detail-value">${metric.value}</span>
                </div>
            `).join('')}
        </div>
        ` : ''}
    `;
}

// Función para renderizar el gráfico de barras
function createBarChart(kpiId, data) {
    const container = document.getElementById(`chart-container-${kpiId}`);
    if (!container) return;

    // Encontrar el valor máximo para escalar correctamente
    const maxValue = Math.max(...data.series.flatMap(series => series.data)) * 1.1;

    // Limpiar contenedor
    container.innerHTML = '';

    // Crear contenedor para las barras
    const barsContainer = document.createElement('div');
    barsContainer.style.position = 'relative';
    barsContainer.style.height = '200px';
    barsContainer.style.marginBottom = '30px';
    barsContainer.style.marginTop = '20px';

    // Crear grupos de barras para cada mes
    data.labels.forEach((label, monthIndex) => {
        const monthGroup = document.createElement('div');
        monthGroup.style.position = 'absolute';
        monthGroup.style.bottom = '0';
        monthGroup.style.left = `${(monthIndex / data.labels.length) * 100}%`;
        monthGroup.style.width = `${100 / data.labels.length}%`;
        monthGroup.style.height = '100%';
        monthGroup.style.display = 'flex';
        monthGroup.style.justifyContent = 'center';
        monthGroup.style.alignItems = 'flex-end';

        // Crear barras para cada serie
        data.series.forEach((series, seriesIndex) => {
            const value = series.data[monthIndex];
            const height = (value / maxValue) * 180;
            const bar = document.createElement('div');
            bar.style.width = `${70 / data.series.length}%`;
            bar.style.height = `${height}px`;
            bar.style.backgroundColor = `var(${series.color})`;
            bar.style.margin = '0 2px';
            bar.style.borderRadius = '4px 4px 0 0';
            bar.style.position = 'relative';

            // Tooltip con el valor
            bar.title = `${series.name}: ${value}`;

            monthGroup.appendChild(bar);
        });

        // Etiqueta del mes
        const monthLabel = document.createElement('div');
        monthLabel.style.position = 'absolute';
        monthLabel.style.bottom = '-25px';
        monthLabel.style.width = '100%';
        monthLabel.style.textAlign = 'center';
        monthLabel.style.fontSize = '12px';
        monthLabel.textContent = label;

        monthGroup.appendChild(monthLabel);
        barsContainer.appendChild(monthGroup);
    });

    container.appendChild(barsContainer);
}

// Función para renderizar el gráfico de dona
function renderDonutChart(data) {
    const donutChart = document.querySelector('.donut-chart');
    if (!donutChart) return;

    donutChart.style.setProperty('--percentage', data.percentage);
}

// Función para renderizar el medidor (gauge)
function renderGauge(data) {
    // Verificar si el contenedor existe
    const container = document.querySelector('.gauge-container');
    if (!container) {
        console.error('Gauge container not found');
        return;
    }

    // Limpiar marcas existentes
    const existingMarks = container.querySelector('.gauge-marks');
    if (existingMarks) {
        existingMarks.remove();
    }

    // Actualizar el valor en el medidor
    const gaugeValue = container.querySelector('.gauge-value');
    if (gaugeValue) {
        gaugeValue.textContent = `${data.value}%`;
    }

    // Calcular posición de la aguja
    const percentage = ((data.value - data.min) / (data.max - data.min));
    const rotation = percentage * 180 - 90;

    // Actualizar la aguja
    const gaugeNeedle = container.querySelector('.gauge-needle');
    if (gaugeNeedle) {
        gaugeNeedle.style.transform = `rotate(${rotation}deg)`;
    }

    // Actualizar el color de relleno basado en umbrales
    const gaugeFill = container.querySelector('.gauge-fill');
    if (gaugeFill) {
        let fillColor;
        if (data.value >= data.highThreshold) {
            fillColor = 'var(--system-green)';
        } else if (data.value >= data.lowThreshold) {
            fillColor = 'var(--system-yellow)';
        } else {
            fillColor = 'var(--system-red)';
        }

        gaugeFill.style.background = `conic-gradient(
            ${fillColor} 0deg,
            ${fillColor} ${(percentage * 180)}deg,
            transparent ${(percentage * 180)}deg,
            transparent 180deg
        )`;
    }
}

// Función para renderizar gráficos de costos
function renderCostCharts(maintenanceCosts, fuelCosts) {
    const maintenanceChart = document.getElementById('maintenance-cost-chart');
    const fuelChart = document.getElementById('fuel-cost-chart');
    if (!maintenanceChart || !fuelChart) return;

    createCostChart(maintenanceChart, maintenanceCosts);
    createCostChart(fuelChart, fuelCosts);
}

// Función auxiliar para crear gráficos de costos
function createCostChart(container, data) {
    const maxValue = Math.max(
        ...data.currentYear,
        ...data.previousYear
    ) * 1.1;

    container.innerHTML = '';
    const barsContainer = document.createElement('div');
    barsContainer.style.position = 'relative';
    barsContainer.style.height = '150px';
    barsContainer.style.marginTop = '20px';

    data.labels.forEach((label, index) => {
        const monthGroup = document.createElement('div');
        monthGroup.style.position = 'absolute';
        monthGroup.style.bottom = '0';
        monthGroup.style.left = `${(index / data.labels.length) * 100}%`;
        monthGroup.style.width = `${100 / data.labels.length}%`;
        monthGroup.style.height = '100%';
        monthGroup.style.display = 'flex';
        monthGroup.style.justifyContent = 'center';
        monthGroup.style.alignItems = 'flex-end';

        // Barra año actual
        const currentHeight = (data.currentYear[index] / maxValue) * 130;
        const currentBar = document.createElement('div');
        currentBar.style.width = '35%';
        currentBar.style.height = `${currentHeight}px`;
        currentBar.style.backgroundColor = 'var(--current-year-color)';
        currentBar.style.margin = '0 2px';
        currentBar.style.borderRadius = '4px 4px 0 0';
        currentBar.title = `${data.currentYear[index].toLocaleString()}`;

        // Barra año anterior
        const prevHeight = (data.previousYear[index] / maxValue) * 130;
        const prevBar = document.createElement('div');
        prevBar.style.width = '35%';
        prevBar.style.height = `${prevHeight}px`;
        prevBar.style.backgroundColor = 'var(--previous-year-color)';
        prevBar.style.margin = '0 2px';
        prevBar.style.borderRadius = '4px 4px 0 0';
        prevBar.title = `${data.previousYear[index].toLocaleString()}`;

        monthGroup.appendChild(currentBar);
        monthGroup.appendChild(prevBar);

        // Etiqueta del mes
        const monthLabel = document.createElement('div');
        monthLabel.style.position = 'absolute';
        monthLabel.style.bottom = '-20px';
        monthLabel.style.width = '100%';
        monthLabel.style.textAlign = 'center';
        monthLabel.style.fontSize = '12px';
        monthLabel.textContent = label;

        monthGroup.appendChild(monthLabel);
        barsContainer.appendChild(monthGroup);
    });

    container.appendChild(barsContainer);
}

// Función para renderizar el gráfico de mantenimiento
function renderMaintenanceCostChart(data) {
    const container = document.getElementById('maintenance-monthly-chart');
    if (!container) return;
    createCostChart(container, data);
}

// Función para renderizar el gráfico de barras comparativo de ventas trimestrales
function renderSalesChart(data) {
    const container = document.getElementById('sales-chart');
    if (!container) return;

    // Encontrar el valor máximo para escalar correctamente
    const allValues = [
        ...data.currentYear.data.filter(val => val !== 'N/A'),
        ...data.previousYear.data
    ];
    const maxValue = Math.max(...allValues) * 1.1;

    // Limpiar contenedor
    container.innerHTML = '';

    // Crear contenedor para las barras
    const barsContainer = document.createElement('div');
    barsContainer.style.position = 'relative';
    barsContainer.style.height = '240px';
    barsContainer.style.marginBottom = '40px';
    barsContainer.style.marginTop = '40px';

    // Crear grupos de barras para cada trimestre
    data.labels.forEach((label, idx) => {
        const quarterGroup = document.createElement('div');
        quarterGroup.style.position = 'absolute';
        quarterGroup.style.bottom = '0';
        quarterGroup.style.left = `${(idx / data.labels.length) * 100}%`;
        quarterGroup.style.width = `${100 / data.labels.length}%`;
        quarterGroup.style.height = '100%';
        quarterGroup.style.display = 'flex';
        quarterGroup.style.justifyContent = 'center';
        quarterGroup.style.alignItems = 'flex-end';

        // Crear barra para año actual si el valor no es N/A
        const currentValue = data.currentYear.data[idx];
        if (currentValue !== 'N/A') {
            const currentHeight = (currentValue / maxValue) * 200;
            const currentBar = document.createElement('div');
            currentBar.style.width = '40px';
            currentBar.style.height = `${currentHeight}px`;
            currentBar.style.backgroundColor = 'var(--current-year-color)';
            currentBar.style.margin = '0 5px';
            currentBar.style.borderRadius = '4px 4px 0 0';
            currentBar.style.position = 'relative';

            // Valor sobre la barra
            const currentValueLabel = document.createElement('div');
            currentValueLabel.textContent = formatCurrency(currentValue);
            currentValueLabel.style.position = 'absolute';
            currentValueLabel.style.top = '-24px';
            currentValueLabel.style.left = '0';
            currentValueLabel.style.right = '0';
            currentValueLabel.style.textAlign = 'center';
            currentValueLabel.style.fontSize = '12px';
            currentValueLabel.style.fontWeight = '600';
            currentBar.appendChild(currentValueLabel);
            quarterGroup.appendChild(currentBar);
        }

        // Crear barra para año anterior
        const prevValue = data.previousYear.data[idx];
        const prevHeight = (prevValue / maxValue) * 200;
        const prevBar = document.createElement('div');
        prevBar.style.width = '40px';
        prevBar.style.height = `${prevHeight}px`;
        prevBar.style.backgroundColor = 'var(--previous-year-color)';
        prevBar.style.margin = '0 5px';
        prevBar.style.borderRadius = '4px 4px 0 0';
        prevBar.style.position = 'relative';

        // Valor sobre la barra
        const prevValueLabel = document.createElement('div');
        prevValueLabel.textContent = formatCurrency(prevValue);
        prevValueLabel.style.position = 'absolute';
        prevValueLabel.style.top = '-24px';
        prevValueLabel.style.left = '0';
        prevValueLabel.style.right = '0';
        prevValueLabel.style.textAlign = 'center';
        prevValueLabel.style.fontSize = '12px';
        prevValueLabel.style.fontWeight = '600';
        prevBar.appendChild(prevValueLabel);
        quarterGroup.appendChild(prevBar);

        // Etiqueta del trimestre
        const quarterLabel = document.createElement('div');
        quarterLabel.style.position = 'absolute';
        quarterLabel.style.bottom = '-30px';
        quarterLabel.style.width = '100%';
        quarterLabel.style.textAlign = 'center';
        quarterLabel.style.fontSize = '12px';
        quarterLabel.textContent = label;
        quarterGroup.appendChild(quarterLabel);

        barsContainer.appendChild(quarterGroup);
    });

    // Crear leyenda
    const legend = document.createElement('div');
    legend.className = 'chart-legend';
    legend.style.marginTop = '40px';
    legend.style.display = 'flex';
    legend.style.justifyContent = 'center';
    legend.style.gap = '20px';

    const currentYearItem = document.createElement('div');
    currentYearItem.className = 'legend-item';
    currentYearItem.innerHTML = `<div class="legend-color" style="background-color: var(--current-year-color);"></div>${data.currentYear.year}`;

    const prevYearItem = document.createElement('div');
    prevYearItem.className = 'legend-item';
    prevYearItem.innerHTML = `<div class="legend-color" style="background-color: var(--previous-year-color);"></div>${data.previousYear.year}`;

    legend.appendChild(currentYearItem);
    legend.appendChild(prevYearItem);
    container.appendChild(barsContainer);
    container.appendChild(legend);
}

// Función para volver a la pantalla principal
function goBack() {
    document.getElementById('detail-screen').classList.remove('active');
    document.getElementById('detail-screen').classList.add('offscreen-right');
    document.getElementById('main-screen').classList.remove('offscreen-left');
    document.getElementById('main-screen').classList.add('active');
}

// Función para dar formato a cantidades monetarias
function formatCurrency(value) {
    // Convertir a número si es una cadena
    const numValue = typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : value;
    // Para valores grandes (millones), dar formato con M
    if (numValue >= 1000000) {
        return (numValue / 1000000).toFixed(1) + 'M$';
    }
    // Para valores medios (miles), dar formato con separadores de miles
    else if (numValue >= 1000) {
        return numValue.toLocaleString('es-MX') + '$';
    }
    // Para valores pequeños, mostrar como están
    else {
        return numValue + '$';
    }
}

// Función para calcular el porcentaje de progreso
function calculateProgressPercent(currentValue, targetValue) {
    // Procesar los valores para extraer los números
    let current = currentValue;
    let target = targetValue;
    
    // Si son cadenas, extraer los números
    if (typeof current === 'string') {
        current = current.replace(/[^\d.-]/g, '');
        current = parseFloat(current);
    }
    
    if (typeof target === 'string') {
        // Manejar casos como "<1.0" o ">95%"
        if (target.includes('<') || target.includes('>')) {
            target = target.replace(/[<>]/g, '');
        }
        target = target.replace(/[^\d.-]/g, '');
        target = parseFloat(target);
    }
    
    if (isNaN(current) || isNaN(target) || target === 0) {
        return 0;
    }
    
    // Calcular el porcentaje (limitado a valores entre 0 y 150%)
    const percent = (current / target) * 100;
    return Math.min(Math.max(percent, 0), 150);
}

// Add event listeners when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add click event listeners to all KPI cards
    document.querySelectorAll('.kpi-card').forEach(card => {
        card.addEventListener('click', function() {
            const kpiId = this.getAttribute('data-id');
            showDetail(kpiId);
        });
    });

    // Add click event listener to back button
    document.querySelector('.back-button').addEventListener('click', goBack);
    
    // Ensure all KPIs have the necessary data for charts
    Object.keys(kpiDetails).forEach(kpiId => {
        const kpi = kpiDetails[kpiId];
        
        // Check if trendsBySegment exists and has proper data
        if (!kpi.trendsBySegment || !kpi.trendsBySegment.series || kpi.trendsBySegment.series.length === 0) {
            console.warn(`KPI ${kpiId} is missing trendsBySegment data`);
            
            // Create default data if needed
            if (!kpi.trendsBySegment) {
                kpi.trendsBySegment = {
                    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
                    series: [
                        {
                            name: 'Tendencia',
                            color: '--system-blue',
                            data: [70, 72, 75, 78, 80, 82, 84, 85, 86, 88, 89, 90]
                        }
                    ]
                };
            }
        }
        
        // Check specific data for each KPI type
        if (kpiId === 'utilizacion' && (!kpi.gaugeData || !kpi.fleetData)) {
            console.warn('Utilización KPI is missing gauge or fleet data');
        }
        
        if (kpiId === 'otd' && !kpi.donutData) {
            console.warn('OTD KPI is missing donut chart data');
        }
        
        if (kpiId === 'ventas' && !kpi.quarterlyComparison) {
            console.warn('Ventas KPI is missing quarterly comparison data');
        }
    });
}); 