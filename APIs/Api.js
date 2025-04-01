// bestproducts APIs
export const bestProducts = [
    {
        id: 1,
        name: "Premium Honey",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscin elit ut elit tellus luctus nec ullamcorper m pulvinar dapibus leo convallis orci ac.",
        price: '20.00 USD',
        imageUrl: "/IMAGES/honey101.jpg"
    },
    {
        id: 2,
        name: "Manuka Honey",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscin elit ut elit tellus luctus nec ullamcorper m pulvinar dapibus leo convallis orci ac.",
        price: '20.00 USD',
        imageUrl: "/IMAGES/honey102.jpg"
    },
    {
        id: 2,
        name: "Organic Honey",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscin elit ut elit tellus luctus nec ullamcorper m pulvinar dapibus leo convallis orci ac.",
        price: '20.00 USD',
        imageUrl: "/IMAGES/honey103.jpg"
    }
];

// FeedBack APIs
export const FeedBackData = [
    {
        id: 1,
        name: 'Sarah Johnson',
        profileImage: '/IMAGES/SarahProfile.jpg',
        profession: 'Beekeeping Enthusiast',
        feedback: "As a beekeeping hobbyist, I rely on Beekeepers top-quality equipment to maintain my hives. Their beekeeping suit is comfortable and durable, allowing me to work with my bees with confidence."
    },
    {
        id: 2,
        name: 'Michael Rodriguez',
        profileImage: '/IMAGES/MichaelProfile.jpg',
        profession: 'Home Chef',
        feedback: "Ive been buying honey from Beekeeper for years, and it never disappoints! The raw honey is deliciously flavorful and has become a staple in my kitchen. I wouldnt go anywhere else for my honey fix."
    },
    {
        id: 3,
        name: 'Michael Rodriguez',
        profileImage: '/IMAGES/EmilyChenProfile.jpg',
        profession: 'Wellness Advocate',
        feedback: "I started using propolis tincture from Beekeeper to support my immune system, and Ive noticed a significant improvement in my overall health. Their products are truly exceptional."
    },
]


// Service Data
export const servicesData = [
    {
        title: "Swarm Removal",
        icon: '/IMAGES/Icon-3.png',
        description: "Lorem ipsum consectetur adipiscing eli ullamcorper mattis pulvinar."
    },
    {
        title: "Harvesting",
        icon: '/IMAGES/Icon-4.png',
        description: "Lorem ipsum consectetur adipiscing eli ullamcorper mattis pulvinar."
    },
    {
        title: "Specialization",
        icon: '/IMAGES/Icon-5.png',
        description: "Lorem ipsum consectetur adipiscing eli ullamcorper mattis pulvinar."
    },
    {
        title: "Workshops",
        icon: '/IMAGES/Icon-6.png',
        description: "Lorem ipsum consectetur adipiscing eli ullamcorper mattis pulvinar."
    }
];

// Why Choose Us
export const beekeepingServices = [
    {
        title: "Hive Inspection",
        icon: "/IMAGES/Icon-7.png",
    },
    {
        title: "Queen Management",
        icon: "/IMAGES/Icon-8.png",
    },
    {
        title: "Harvesting Honey",
        icon: "/IMAGES/Icon-9.png",
    },
    {
        title: "Winter Preparation",
        icon: "/IMAGES/Icon-10.png",
    },
];


export const statsData = [
    { number: "50", label: "The Biggest Farms" },
    { number: "69", label: "The Expertise Team" },
    { number: "23", label: "More Best Product" },
    { number: "50", label: "Stores All Over City" },
];

// use to Delivery Screen
import { FaShippingFast, FaHome } from "react-icons/fa";
export const services = [
    {
        title: "Free Shipping",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        icon: FaShippingFast, // Store the component reference instead of JSX
    },
    {
        title: "Home Delivery",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
        icon: FaHome,
    }
];

// use to Type of Bee screen

export const beeSpecies = [
    {
        name: "Italian Honey Bee",
        description: "Known for their gentle nature and prolific honey production.",
        icon: "/IMAGES/Icon-7.png",
    },
    {
        name: "Carniolan Honey Bee",
        description: "These bees are favored because they can produce a lot of honey.",
        icon: "/IMAGES/Icon-7.png",
    },
    {
        name: "Caucasian Honey Bee",
        description: "Caucasian bees are known for their long proboscis.",
        icon: "/IMAGES/Icon-7.png",
    },
    {
        name: "Russian Honey Bee",
        description: "These bees are prized for their resistance to Varroa mites.",
        icon: "/IMAGES/Icon-7.png",
    },
    {
        name: "Buckfast Bee",
        description: "These bees are known for their hardiness and disease resistance.",
        icon: "/IMAGES/Icon-7.png",
    },
    {
        name: "German Honey Bee",
        description: "Its ability to produce honey in challenging climates.",
        icon: "/IMAGES/Icon-7.png",
    },
];


// our blog screen
export const blogData = [
    {
        img: '/IMAGES/joyful-beekeeper-holding.jpg',
        alt: 'joyful-beekeeper-holding',
        date: 'May 20, 2024',
        category: 'Beekeeping',
        title: 'Common Beekeeping Mistakes and How to Avoid Them',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui nisi, posuere a sodales eget, ornare ut dolor. Fusce porta eget ligula a efficitur. Proin…'
    },
    {
        img: '/IMAGES/father-and-daughter-beekeeping.jpg',
        alt: 'father-and-daughter-beekeeping',
        date: 'jan 10, 2025',
        category: 'Honey',
        title: 'The Role of Bees in Environmental Sustainability',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui nisi, posuere a sodales eget, ornare ut dolor. Fusce porta eget ligula a efficitur. Proin…'
    },

    {
        img: '/IMAGES/couple-of-happy-smiling-beekeepers.jpg',
        alt: 'couple-of-happy-smiling-beekeepers',
        date: 'Apr 12, 2022',
        category: 'Honey',
        title: 'Best Flowers for Optimal Honey Production',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus dui nisi, posuere a sodales eget, ornare ut dolor. Fusce porta eget ligula a efficitur. Proin…'
    },

]