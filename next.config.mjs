/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true
    },
    async redirects() {
        return [
            { source: '/chatbot-voor-:suffix', destination: '/chatbot', permanent: true },
            { source: '/voice-ai-voor-:suffix', destination: '/voice-ai', permanent: true },
            { source: '/reviews-voor-:suffix', destination: '/reviews', permanent: true },
            { source: '/seo-voor-:suffix', destination: '/seo', permanent: true },
            { source: '/social-media-voor-:suffix', destination: '/social-media', permanent: true },
                    { source: '/blog/zware-objecten-verhuizen-kluis-biljart-sauna-verhuizer-specialisme', destination: '/', permanent: true },
            { source: '/blog/huisdier-transport-verhuizing-verhuizer-specialisme-upsell', destination: '/', permanent: true },
            { source: '/blog/schoonmaak-na-verhuizing-eindopname-verhuizer-specialisme', destination: '/', permanent: true },
            { source: '/blog/inpak-service-apart-verhuizer-specialisme', destination: '/', permanent: true },
            { source: '/blog/inboedel-opslag-storage-verhuizer-mkb-groei', destination: '/', permanent: true },
            { source: '/blog/pianoverhuizing-antiek-transport-verhuizer', destination: '/', permanent: true },
            { source: '/blog/studentenverhuizing-verhuisbedrijf-zomer-volume', destination: '/', permanent: true },
            { source: '/blog/senioren-verhuizing-specialisatie-verhuisbedrijf', destination: '/', permanent: true },
            { source: '/blog/verhuisrobots-inboedel', destination: '/', permanent: true },
        ];
    },
};

export default nextConfig;
