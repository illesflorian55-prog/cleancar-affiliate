import Link from 'next/link';
import pseoData from '@/data/pseo.json';

export const metadata = {
  title: 'VPN Unblock Guides | The VPN Shield',
  description: 'A comprehensive directory of guides on how to securely unblock your favorite streaming services, games, and content from any country in the world.',
};

export default function UnblockIndexPage() {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-gray-900 dark:text-white">
          Global <span className="text-blue-500">Unblocking</span> Directory
        </h1>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto">
          Find step-by-step guides on how to access the services you love, no matter where you are traveling or living.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {pseoData.services.map((service) => (
          <div key={service.id} className="bg-gray-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-gray-200 dark:border-slate-700 hover:border-blue-500 transition-colors">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b border-gray-200 dark:border-slate-700 pb-2">
              Unblock {service.name}
            </h2>
            <ul className="space-y-2 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
              {pseoData.countries.map((country) => (
                <li key={country.id}>
                  <Link 
                    href={`/unblock/${service.id}/${country.id}`}
                    className="text-gray-600 dark:text-slate-400 hover:text-blue-500 transition-colors text-sm flex items-center"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-50"></span>
                    in {country.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
