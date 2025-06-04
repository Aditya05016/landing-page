import React from 'react';
import {Rocket,ShieldCheck,Smartphone} from "Lucide-react";
function Features() {
    return (
      <section className='bg-gray-100 py-16 px-6'>
        <div className='max-w-6xl mx-auto text-center'>
            <h2 className='text-3xl font-bold mb-12 text-blue-800'>
                Why Choose Us</h2>

                    <div className="grid gap-10 md:grid-cols-3">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Rocket className="text-blue-600 w-10 h-10 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Fast Performance</h3>
            <p className="text-gray-600">Optimized for blazing-fast load times and smooth experience.</p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <ShieldCheck className="text-blue-600 w-10 h-10 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Secure Platform</h3>
            <p className="text-gray-600">Top-level security features to keep your data protected.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Smartphone className="text-blue-600 w-10 h-10 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Mobile Friendly</h3>
            <p className="text-gray-600">Looks great on all devices, from phones to desktops.</p>
          </div>
        </div>
            
        </div>
      </section>
    )
}

export default Features;