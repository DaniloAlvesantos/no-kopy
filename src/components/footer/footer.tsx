import Image from "next/image";

// type footerDataProps = {
//     text:string;
//     url?:string;
// }

// const footerData: footerDataProps[] = [

// ];

// interface LiComponentProps {

// }

// const LiComponent = ({  }) => {
//     return (
//         <li></li>
//     )
// }

const Footer: React.FC = () => {
    return (
        <footer className="">
            <div>
                <Image src="/assets/LOGO-2.png" width={80} height={30} alt="Secondary Logo" />
                <p>A agência para empresas do futuro.</p>
            </div>
            <ul>
                <li>Vejo no mapa</li>
            </ul>
        </footer>
    )
}

export { Footer };