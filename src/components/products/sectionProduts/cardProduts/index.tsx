import { CardProdutsContainer } from "./style";
import secaocsa from "../../../../assets/xicara.jpg"
import { ShoppingCartSimple } from "phosphor-react"

export function Card() {
  return (
    <>
      <CardProdutsContainer>

        <div className="card">
          <img src={secaocsa} className="imgCardProduts" />
          <h1>Xícara de Café</h1>
          <div className="cardSectionIcon" >
            <button>R$ 10,90</button>
            <ShoppingCartSimple size={24} />
          </div>
        </div>
        <div className="card">
          <img src={secaocsa} className="imgCardProduts" />
          <h1>Xícara de Café</h1>
          <div className="cardSectionIcon" >
            <button>R$ 10,90</button>
            <ShoppingCartSimple size={24} />
          </div>
        </div>
        <div className="card">
          <img src={secaocsa} className="imgCardProduts" />
          <h1>Xícara de Café</h1>
          <div className="cardSectionIcon" >
            <button>R$ 10,90</button>
            <ShoppingCartSimple size={24} />
          </div>
        </div>
        <div className="card">
          <img src={secaocsa} className="imgCardProduts" />
          <h1>Xícara de Café</h1>
          <div className="cardSectionIcon" >
            <button>R$ 10,90</button>
            <ShoppingCartSimple size={24} />
          </div>
        </div>

      </CardProdutsContainer>
    </>
  )
}