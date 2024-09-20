import Image from 'next/image';
import React from 'react';

const Table: React.FC = () => {
  return (
    <div className="border rounded-lg w-full px-4 mb-5">
      <h1 className="pt-2 pb-3">Item(s)</h1>

      <div className="border rounded-lg w-full mb-3">
        <table className="w-full table-auto border-collapse">
          <thead className='text-slate-400 bg-[#F9FAFB] border-[#E4E7EC]'>
            <tr className="text-sm">
              <th className="py-4 px-6 pl-4">
                <input type="checkbox" />
              </th>
              <th className="text-start text-xs py-3">Items</th>
              <th className="text-start text-xs py-3 px-6 ">Variants</th>
              <th className="text-start text-xs py-3 px-6 ">Quantity</th>
              <th className="text-start text-xs py-3 px-6 ">Price</th>
              <th className="text-start text-xs py-3 px-6 ">Amount</th>
              <th className="text-start text-xs py-3 px-6 ">Expected Delivery Date</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t text-sm text-[#344054]">
            <td className="py-4 px-6 pl-4">
                <input type="checkbox" />
              </td>
              <td className="py-4">
                <div className="flex items-center gap-3">
                  <Image src="/assets/Misc.png" alt="logo" width={40} height={20} />
                  <div>
                    <p className='text-black font-medium truncate'>Oxygen concentration</p>
                    <p className="text-xs text-gray-500">#28373</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">Blue</td>
              <td className="py-4 px-6">100 piece</td>
              <td className="py-4 px-6">$200.00</td>
              <td className="py-4 px-6">$2000.00</td>
              <td className="py-4 px-6">2024-09-20</td>
            </tr>
            <tr className="border-t text-sm text-[#344054]">
              <td className="py-4 px-6 pl-4">
                <input type="checkbox" />
              </td>
              <td className="py-4">
                <div className="flex items-center gap-3">
                  <Image src="/assets/Misc.png" alt="logo" width={40} height={20} />
                  <div>
                    <p className='text-black font-medium truncate'>Mechanical ventila</p>
                    <p className="text-xs text-gray-500">#28373</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">Nil</td>
              <td className="py-4 px-6">25 kg</td>
              <td className="py-4 px-6">$350.00</td>
              <td className="py-4 px-6">$2500.00</td>
              <td className="py-4 px-6">2024-09-22</td>
            </tr>

            <tr className="border-t text-sm text-[#344054]">
              <td className="py-4 px-6 pl-4">
                <input type="checkbox" />
              </td>
              <td className="py-4">
                <div className="flex items-center gap-3">
                  <Image src="/assets/Misc.png" alt="logo" width={40} height={20} />
                  <div>
                    <p className='text-black font-medium truncate'>Patient Monitor</p>
                    <p className="text-xs text-gray-500">#28373</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">Blue</td>
              <td className="py-4 px-6">30 Unit</td>
              <td className="py-4 px-6">$300.00</td>
              <td className="py-4 px-6">$1500.0</td>
              <td className="py-4 px-6">2024-09-22</td>
            </tr>
            
            <tr className="border-t border-b text-sm text-[#344054]">
              <td className="py-4 px-6 pl-4">
                <input type="checkbox" />
              </td>
              <td className="py-4">
                <div className="flex items-center gap-3">
                  <Image src="/assets/Misc.png" alt="logo" width={40} height={20} />
                  <div>
                    <p className='text-black font-medium truncate'>Mechanical ventila</p>
                    <p className="text-xs text-gray-500">#28373</p>
                  </div>
                </div>
              </td>
              <td className="py-4 px-6">Blue</td>
              <td className="py-4 px-6">35 Unit</td>
              <td className="py-4 px-6">$200.00</td>
              <td className="py-4 px-6">$1500.0</td>
              <td className="py-4 px-6">2024-09-22</td>
            </tr>

            <tr className="text-start text-sm ">
              <td className="py-4 px-6" colSpan={5}></td>
              <td className="py-4 px-6">Sub total</td>
              <td className="py-4 px-6">$8,000.00</td>

            </tr>
            <tr className="text-start text-sm">
              <td className="py-4 px-6" colSpan={5}></td>
              <td className="py-4 px-6">Total</td>
              <td className="py-4 px-6 font-semibold">$8,750.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
