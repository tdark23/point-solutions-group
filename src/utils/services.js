import dmark from "./../assets/images/dmark.jpeg"
import psbanner from "./../assets/images/pscbanner.jpg";
import psdmark from "./../assets/images/psdigital.jpg";
import psmusik from "./../assets/images/musique.webp";

const psservices = [
    {
        id: "/01",
        headerName: "Photographie",
        name: "PS Studio Creative",
        short_description: "Découvrez notre studio créatif.",
        image: psbanner,
        link: "/services/pscreative"
    },
    {
        id: "/02",
        headerName: "Marketing Digital",
        name: "PS Digital",
        short_description: "Explorez nos services de marketing digital.",
        image: psdmark,
        link: "/services/psdigital"
    },
    {
        id: "/03",
        headerName: "Production Musicale",
        name: "PSG zik",
        short_description: "Découvrez nos services dédiés à l'industrie musicale.",
        image: psmusik,
        link: "/services/psgzik"
    },
    {
        id: "/04",
        headerName: "AfriJeune Tv",
        name: "Afrijeune Tv",
        short_description: "Découvrez notre chaîne de télévision.",
        image: dmark,
        link: "/services/afrijeunetv"
    },
]

export default psservices;