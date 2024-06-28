import { Button } from "@/components/ui/button";

const Services: React.FC = () => {
    return (
        <section className="bg-gradient-to-b from-NKBlack-500 to-[#0c301b]">
            <div>
                <span className="font-montserrat font-bold">
                    <p className="text-NKGreen-300">Nossos serviços</p>
                    <h2>O que podemos constuir juntos ?</h2>
                </span>
                <p className="font-firaSans">Impulsione sua marca com estratégias digitais, design profissional, desenvolvimento sob medida e campanhas de tráfego pago. Invista no futuro do seu negócio hoje!</p>
            </div>
            <Button variant="outline" className="border-2 border-NKGreen-300 hover:bg-NKGreen-300 duration-300 transition-colors ease-in-out rounded-full">Saiba mais</Button>
        </section>
    )
}

export { Services };