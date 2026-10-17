import {
    AlarmClock,
    Cake,
    Calendar,
    Car,
    Cat,
    Clipboard,
    CreditCard,
    File,
    Gift,
    HeartPlus,
    Landmark,
    ListChecks,
    NotebookTabs,
    PencilRuler,
    Pin,
    Plane,
    PlantPot,
    Receipt,
    Refrigerator,
    ShoppingBasket,
    Trash,
    UtensilsCrossed,
    type LucideIcon,
} from '@lucide/vue'

interface Item {
    label: string
    icon: LucideIcon
    path: string
    gradient: string[]
}

export const items: Item[] = [
    {
        label: 'Courses',
        icon: ShoppingBasket,
        path: '/courses',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Calendrier',
        icon: Calendar,
        path: '/calendrier',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Notes',
        icon: NotebookTabs,
        path: '/notes',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Frigo',
        icon: Refrigerator,
        path: '/frigo',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Tâches',
        icon: ListChecks,
        path: '/taches',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Routines',
        icon: AlarmClock,
        path: '/routines',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Ordures',
        icon: Trash,
        path: '/ordures',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Recettes',
        icon: Receipt,
        path: '/recettes',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Ardoises',
        icon: Clipboard,
        path: '/ardoises',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Budget',
        icon: Landmark,
        path: '/budgets',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Cadeaux',
        icon: Gift,
        path: '/cadeaux',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Anniversaires',
        icon: Cake,
        path: '/anniversaires',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Animaux',
        icon: Cat,
        path: '/animaux',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Extérieur',
        icon: PlantPot,
        path: '/exterieur',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Bien-être',
        icon: HeartPlus,
        path: '/bien-etre',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Adresses',
        icon: Pin,
        path: '/adresses',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Documents',
        icon: File,
        path: '/documents',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Prestataires',
        icon: PencilRuler,
        path: '/prestataires',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Menu',
        icon: UtensilsCrossed,
        path: '/menu',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Fidélité',
        icon: CreditCard,
        path: '/fidelite',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Véhicules',
        icon: Car,
        path: '/vehicule',
        gradient: ['#da983d', '#b17c31'],
    },
    {
        label: 'Voyage',
        icon: Plane,
        path: '/voyage',
        gradient: ['#da983d', '#b17c31'],
    },
]
