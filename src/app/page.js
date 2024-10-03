import Image from "next/image"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function Home() {
  return (
    <>
      <Header />
        <main className="p-5">
          <h1 className="text-2xl">Sobre o React</h1>
          <Image
            src={'/img/logo_react.png'}
            width={300}
            height={300}
            alt="Logo React"
          />

          <p>
            O React é uma biblioteca JavaScript de código aberto, amplamente utilizada para criar interfaces de usuário (UIs) interativas e eficientes para aplicações web. Desenvolvedo pelo Facebook, o React revolucionou a forma como as interfaces são construídas, tornando-as mais fáceis de manter e escalar. Uma das principais características do React é a sua abordagem baseada em componentes, onde a interface é dividida em partes menores e reutilizáveis, chamadas de componentes. Cada componente é responsável por renderizar uma parte específica da UI, e a composição desses componentes forma a interface completa.
          </p>
          <p>
            Essa modularização traz diversos benefícios, como a maior organização do código, a facilidade de reutilização de componentes e a melhor compreensão da estrutura da aplicação. Além disso, o React utiliza uma técnica chamada "virtual DOM", que otimiza as atualizações da interface, comparando a versão virtual do DOM com a versão real e aplicando apenas as mudanças necessárias. Isso resulta em um desempenho superior e uma experiência do usuário mais suave. O React é uma ferramenta poderosa e versátil, utilizada por grandes empresas como Facebook, Instagram, Netflix e muitas outras, e continua sendo uma das bibliotecas JavaScript mais populares e em constante evolução.
          </p>
        </main>
      <Footer />
    </>
  )
}
