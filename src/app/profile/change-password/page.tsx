export default function ChangePass() {
  return (
    <div className="w-screen min-h-[90vh] flex items-center justify-center bg-gray-50 p-6">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-md overflow-hidden grid md:grid-cols-2 gap-6">
        {/* Left: form */}
        <section className="p-8 md:p-10 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold text-gray-900">Change Password</h2>
          <p className="text-sm text-gray-500">
            Use a unique password for this account. Avoid reusing passwords from other sites.
          </p>

          <label className="mt-2 w-full">
            <span className="block text-sm font-medium text-gray-700 mb-2">Old Password</span>
            <input
              type="password"
              placeholder="Old Password"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </label>

          <label className="w-full">
            <span className="block text-sm font-medium text-gray-700 mb-2">New Password</span>
            <input
              type="password"
              placeholder="New Password"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <p className="mt-2 text-xs text-gray-500">
              Do not use something too obvious. Include at least eight characters: numbers, letters, and special symbols.
            </p>
          </label>

          <label className="w-full">
            <span className="block text-sm font-medium text-gray-700 mb-2">Confirm New Password</span>
            <input
              type="password"
              placeholder="Confirm New Password"
              className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            />
          </label>

          <div className="mt-4 flex items-center justify-between gap-4">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-300"
            >
              Change Password
            </button>

            <div className="text-sm text-gray-500">
              <span className="font-medium text-gray-700">Tip:</span> Use a password manager to store long passphrases.
            </div>
          </div>
        </section>

        {/* Right: recommendations */}
        <aside className="p-8 md:p-10 bg-gray-50 border-l md:border-l-0 md:border-l-transparent">
          <h3 className="text-lg font-bold text-gray-900 mb-3">Meet Password Recommendations</h3>

          <p className="text-sm text-gray-600 leading-relaxed">
            The key to creating a strong and memorable password is to prioritize length over complexity and use a unique passphrase for each account.
            Security experts suggest creating a phrase of at least <span className="font-semibold">15 characters</span>, such as three or four random, unrelated words.
          </p>

          <div className="mt-4 p-4 bg-white rounded-lg border border-gray-100 shadow-sm">
            <p className="text-sm text-gray-700">
              Example passphrase:
            </p>
            <code className="mt-2 block w-full rounded-md bg-gray-100 px-3 py-2 text-sm text-gray-800">
              Horse Purple Hat Run Bay Lifting
            </code>
            <p className="mt-3 text-xs text-gray-500">
              Avoid personal information, common dictionary words, or predictable patterns like <span className="italic">password123</span>.
            </p>
          </div>

          <ul className="mt-6 space-y-3 text-sm text-gray-600">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded bg-green-100 text-green-700 text-xs font-semibold">✓</span>
              Use at least <span className="font-medium">15 characters</span> when possible.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded bg-yellow-100 text-yellow-700 text-xs font-semibold">⚠</span>
              Prefer a passphrase of unrelated words over complex substitutions.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded bg-blue-100 text-blue-700 text-xs font-semibold">🔒</span>
              Use a unique password per account and consider a password manager.
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}