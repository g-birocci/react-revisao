// Formik facilita a criação de formulários com validação
// Para instalar o formik primeiro tens de executar `npm install formik`no terminal
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default function ComponenteComFormik() {
  
  // VALORES INICIAIS do formulário
  const valoresIniciais = { nome: '', email: '', idade: '', aceita: false }
  
  // FUNÇÃO DE VALIDAÇÃO - verifica se os dados estão corretos
  const validar = (valores) => {
    const erros = {}
    
    // Validar nome
    if (!valores.nome) {
      erros.nome = 'Nome é obrigatório'
    } else if (valores.nome.length < 2) {
      erros.nome = 'Nome deve ter pelo menos 2 caracteres'
    }
    
    // Validar email
    if (!valores.email) {
      erros.email = 'Email é obrigatório'
    }
    
    // Validar idade
    if (!valores.idade) {
      erros.idade = 'Idade é obrigatória'
    } else if (valores.idade < 18) {
      erros.idade = 'Deve ter pelo menos 18 anos'
    }
    
    // Validar checkbox
    if (!valores.aceita) {
      erros.aceita = 'Deve aceitar os termos!'
    }
    
    return erros
  }
  
  // Função padrão de envio de formulário formik que simula envio para servidor e limpa os dados
  const aoSubmeter = (valores, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert("Formulário enviado!\n\nDados:\n${JSON.stringify(valores, null, 2)}")
      setSubmitting(false)
      resetForm()
    }, 2000)
  }
  
  return (
    <div className="bg-pink-100 border border-pink-400 text-pink-700 px-4 py-3 rounded mb-4">
      <h2 className="text-xl font-semibold">Formik - Formulário Avançado</h2>
      
      <Formik initialValues={valoresIniciais} validate={validar} onSubmit={aoSubmeter} >
        {({ isSubmitting, errors, touched }) => (
          <Form className="mt-4 space-y-4">
            
            {/* CAMPO NOME */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Nome:</label>
              <Field type="text" name="nome" className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 text-black" placeholder="O teu nome" />
              <ErrorMessage name="nome" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            
            {/* CAMPO EMAIL */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email:</label>
              <Field type="email" name="email" className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 text-black" placeholder="exemplo@email.com" />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            
            {/* CAMPO IDADE */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Idade:</label>
              <Field type="number" name="idade" className="mt-1 block w-full border border-gray-300 rounded px-3 py-2 text-black" placeholder="18" />
              <ErrorMessage name="idade" component="div" className="text-red-500 text-sm mt-1" />
            </div>
            
            {/* CHECKBOX */}
            <div className="flex items-center">
              <Field type="checkbox" name="aceita" className="mr-2" />
              <label className="text-sm">Aceito os termos e condições</label>
              <ErrorMessage name="aceita" component="div" className="text-red-500 text-sm ml-2" />
            </div>
            
            {/* BOTÃO SUBMIT */}
            <button type="submit" disabled={isSubmitting} className="bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50">
              {isSubmitting ? 'A enviar...' : 'Enviar'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
