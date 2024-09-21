
import {  FaMobileAlt, FaClock, FaTruck} from 'react-icons/fa';
import { MdAccountBalance } from 'react-icons/md';

export default function Serviço() {
  return (
    <div className="flex flex-col items-center justify-center py-12 bg-gray-50 mt-20 " id='service'>
      <h2 className="text-4xl font-semibold mb-8">
        We are giving Services <span className="text-blue-600">Sendpay</span>
      </h2>

      <div className="md:grid block justify-center items-center md:grid-cols-2 md:gap-10 md:max-w-4xl">
        
        <div className="flex  justify-center items-center">
            <MdAccountBalance className='text-6xl text-blue-600 mr-4' />
          
          <div>
            <h3 className="text-xl font-bold">Bank Transfer</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nunc eu.</p>
          </div>
        </div>

        
        <div className="flex items-center">
         <FaClock className="text-6xl text-blue-600 mr-4" />
          <div>
            <h3 className="text-xl font-bold">Fast Transfer</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nunc eu.</p>
          </div>
        </div>

      
        <div className="flex  items-center">
          <FaMobileAlt className="text-6xl text-blue-600 mr-4 " />
          <div>
            <h3 className="text-xl font-bold">Mobile Recharge</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nunc eu.</p>
          </div>
        </div>

       
        <div className="flex items-center">
          <FaTruck className="text-6xl text-blue-600 mr-4" />
          <div>
            <h3 className="text-xl font-bold">Easy and Fast</h3>
            <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a nunc eu.</p>
           
          </div>
        </div>
      </div>
    </div>
  );
}
