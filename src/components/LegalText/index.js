import React, { Component } from "react";

import { Legal } from "./styles";

export default class LegalText extends Component {
  render() {
    return (
      <Legal>
        Todas as ofertas mencionadas em nosso site são as mesmas de nossos
        encartes impressos, exceto as ofertas da TV. Para solicitação de alguma
        dessas ofertas, é necessário ter em mãos os encartes originais.
        Impressões das páginas do site não serão válidas. As fotos são meramente
        ilustrativas. Os preços referem-se a valores unitários em fotos de
        produtos repetidos. Os supermercados Mundial reservam-se o direito de
        limitar por cliente a quantidade dos produtos anunciados. SAC Mundial:
        2131-7001
      </Legal>
    );
  }
}
