import { IMenuItem } from "@/types";

export const menuItems: IMenuItem[] = [
    {
        text: "Diensten",
        url: "#",
        children: [
            { text: "Chatbot voor Verhuizers", url: "/chatbot" },
            { text: "Voice AI voor Verhuizers", url: "/voice-ai" },
            { text: "SEO voor Verhuizers", url: "/seo" },
            { text: "Social Media voor Verhuizers", url: "/social-media" },
            { text: "Reviews voor Verhuizers", url: "/reviews" },
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
