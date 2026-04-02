import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Verhuizers", url: "/chatbot-voor-verhuizers" },
            { text: "Voice AI voor Verhuizers", url: "/voice-ai-voor-verhuizers" },
            { text: "SEO voor Verhuizers", url: "/seo-voor-verhuizers" },
            { text: "Social Media voor Verhuizers", url: "/social-media-voor-verhuizers" },
            { text: "Reviews voor Verhuizers", url: "/reviews-voor-verhuizers" },
            { text: "Review Pakket", url: "/review-pakket" },
        ]
    },
    {
        text: "Tarieven",
        url: "/tarieven"
    },
    {
        text: "Gratis Scan",
        url: "/gratis-scan"
    },
    {
        text: "Gratis Website",
        url: "/gratis-website"
    },
    {
        text: "Blog",
        url: "/blog"
    }
];
