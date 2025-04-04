export function ContactSection() {
  return (
    <div>
      <h2 className="text-xl mb-4 text-blue-400">CONTACT.SYS</h2>

      <div className="border border-green-500 p-4 mb-6 bg-black">
        <p className="mb-2">
          <span className="text-yellow-400">EMAIL:</span> astronautmarkus@example.com
        </p>
        <p className="mb-2">
          <span className="text-yellow-400">GITHUB:</span> github.com/astronautmarkus
        </p>
        <p className="mb-2">
          <span className="text-yellow-400">LINKEDIN:</span> linkedin.com/in/astronautmarkus
        </p>
        <p>
          <span className="text-yellow-400">LOCATION:</span> San Francisco, CA
        </p>
      </div>

      <h3 className="text-lg mb-2 text-blue-400">MESSAGE.EXE</h3>
      <div className="border border-green-500 p-4 bg-black">
        <form className="space-y-4">
          <div>
            <label className="block text-yellow-400 mb-1">NAME:</label>
            <input
              type="text"
              className="w-full bg-gray-900 border border-green-500 p-2 text-green-500 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div>
            <label className="block text-yellow-400 mb-1">EMAIL:</label>
            <input
              type="email"
              className="w-full bg-gray-900 border border-green-500 p-2 text-green-500 focus:outline-none focus:border-blue-400"
            />
          </div>
          <div>
            <label className="block text-yellow-400 mb-1">MESSAGE:</label>
            <textarea
              rows={4}
              className="w-full bg-gray-900 border border-green-500 p-2 text-green-500 focus:outline-none focus:border-blue-400"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-900 text-white px-4 py-2 hover:bg-blue-800 border border-blue-700">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </div>
  )
}

