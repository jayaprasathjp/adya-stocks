export const Brand = () => (
  <a href="/" className="flex items-center gap-4">
    <img
      className="h-8"
      src="https://adya.ai/assets/Logo-6c607c84.png"
      alt=""
    />
    <span className="font-bold text-lg text-gray-600">Adya Stocks</span>
  </a>
);
export const FormInput = ({ id, name, type, autoComplete, placeholder }) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-gray-700">
      {placeholder}
    </label>
    <div className="mt-1">
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required
        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
      />
    </div>
  </div>
);

export const SubmitButton = ({ text }) => (
  <div>
    <button
      type="submit"
      className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {text}
    </button>
  </div>
);
