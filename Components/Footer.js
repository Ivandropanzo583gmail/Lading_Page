export default function Footer() {
    return (
      <footer className="bg-white py-8 px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="flex flex-col space-y-4">
            <div className="flex items-center space-x-2">
              {/* Substituir com seu ícone de logo */}
              <img src="/NavBar/email.png" alt="Sendpay Logo" className="h-8 w-auto" />
              <span className="text-2xl font-semibold text-blue-600">Sendpay</span>
            </div>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis in aliquet justo.
            </p>
          </div>
  
          {/* Produtos, About, Catalog */}
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold">Products</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Products</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Products</a></li>
            </ul>
          </div>
  
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold">About</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">About</a></li>
            </ul>
          </div>
  
          <div className="flex flex-col space-y-2">
            <h3 className="text-lg font-semibold">Catalog</h3>
            <ul className="space-y-1">
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Catalog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Catalog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-blue-600">Catalog</a></li>
            </ul>
          </div>
  
          {/* Contatos Sociais */}

          <div className="bg-blue-600 text-white p-6 rounded-xl  flex-col space-y-4" id="contact">
            <h3 className="text-lg font-semibold">Social Contacts</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                {/* Ícone do Facebook */}
                <img src="./Footer/Facebook.png" alt="Facebook" className="h-6 w-6" />
                <a href="#" className="hover:underline">Facebook</a>
              </li>
              <li className="flex items-center space-x-2">
                {/* Ícone do GitHub */}
                <img src="./Footer/Github.png" alt="GitHub" className="h-6 w-6" />
                <a href="#" className="hover:underline">GitHub</a>
              </li>
              <li className="flex items-center space-x-2">
                {/* Ícone do Twitter */}
                <img src="./Footer/Twitter.png" alt="Twitter" className="h-6 w-6" />
                <a href="#" className="hover:underline">Twitter</a>
              </li>
            </ul>
          </div>
  
        </div>
      </footer>
    );
  }
  