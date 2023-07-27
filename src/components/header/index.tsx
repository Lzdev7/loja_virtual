import { BackGroundFooter } from "../backgrounFooter";
import { CardMain } from "../cardMain";
import { Footer } from "../footer";
import { CardApresentation } from "../products/cardApresentation";
import { SectionProduts } from "../products/sectionProduts";
import { Card } from "../products/sectionProduts/cardProduts";
import { MoreProduts } from "../products/sectionProduts/moreProduts";
import { CartContainerMain, ContentCartMain, HeaderContainer } from "./styles";
import { ShoppingCart } from "phosphor-react"

export function Header() {
  return (
    <>
      <HeaderContainer>

        <div className="listaHeader">

          <h1>Lhz<span>Store/</span></h1>
          <ul>
            <li>Produtos</li>
            <li>Contato</li>
            <li>Sobre</li>
          </ul>

        </div>

        <div className="contentCart">

          <h1>cart</h1>
          <ShoppingCart size="22" />
          <div className="cartQuantity">
            <span>2</span>
          </div>
        </div>

      </HeaderContainer>

      <CartContainerMain>
        <CardMain />
      </CartContainerMain>


      <ContentCartMain>
        <CardApresentation />
        <CardApresentation />
      </ContentCartMain>

      <SectionProduts/>
      <Card/>
      <MoreProduts/>

      <SectionProduts/>
      <Card/>
      <MoreProduts/>


      <BackGroundFooter/>

      <Footer/>    
    </>
  )
}