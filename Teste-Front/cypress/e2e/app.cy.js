class RegistroForm {
  elements ={
    titleInput: () => cy.get('#title'),
    titleFeedback: () => cy.get('#titleFeedback'),
    imageUrlInput: () => cy.get('#imageUrl'),
    imageUrlInputFeedback: () => cy.get('#urlFeedback'),
    submitBtn: () => cy.get('#btnSubmit')
  }

  clickSubmit() {
    this.elements.submitBtn().click()
  }

  typeTitle(text){
    if(!text) return;
    this.elements.titleInput().type(text)
  }

  typeUrl(url){
    if(!url) return;
    this.elements.imageUrlInput().type(url )
  }

}

const registroForm = new RegistroForm();

describe('Registro de imagem', () => {
  describe('Enviar uma imagem com entradas invalidas', () => {
    const imagem = {
      titulo: '',
      url: ''
    }

    it('estou na pagina de cadastro de imagens', () => {
      cy.visit('/')
    })
    it(`Quando eu digito "${imagem.titulo}" no campo do titulo`, () => {
      registroForm.typeTitle(imagem.titulo)  
    })
    it(`Quando eu digito "${imagem.url}" no campo de url`, () => {
      registroForm.typeUrl(imagem.url)
    })
    it('eu clico no botao de envio', () => {
      registroForm.clickSubmit()
    })
    it('eu nao devo ver a mensagem "Please type a title for the image" acima do campo de titulo', () => {
      registroForm.elements.titleFeedback().should("contains.text", "Please type a title for the image")
    })

    it('e eu devo ver a mensagem "Please type a valid URL" acima do campo URL da imagem', () => {
      registroForm.elements.imageUrlInputFeedback().should("contains.text", "Please type a valid URL")
    })
  })

  describe('Enviar uma imagem com entradas invalidas', () => {
    const imagem = {
      titulo: 'peppa',
      url: 'https://occ-0-8407-2218.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABZGd2-18LXIQ1zulKRCbwI5_wupf8w-Og05VwmRj5nuF69KHu5NzYPMdKYEkHXGiK9-mLNJ2c4N3yKmPrsi_xnnG-9ucWL1pdxcn.jpg?r=d6b'
    }

    it('estou na pagina de cadastro de imagens', () => {
      cy.visit('/')
    })
    it(`Quando eu digito "${imagem.titulo}" no campo do titulo`, () => {
      registroForm.typeTitle(imagem.titulo)  
    })
    it(`Quando eu digito "${imagem.url}" no campo de url`, () => {
      registroForm.typeUrl(imagem.url)
    })
    it('eu clico no botao de envio', () => {
      registroForm.clickSubmit()
    })
    it('eu nao devo ver a mensagem "Please type a title for the image" acima do campo de titulo', () => {
      registroForm.elements.titleFeedback().should("contains.text", "Please type a title for the image")
    })

    it('e eu devo ver a mensagem "Please type a valid URL" acima do campo URL da imagem', () => {
      registroForm.elements.imageUrlInputFeedback().should("contains.text", "Please type a valid URL")
    })
  })
})