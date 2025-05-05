function PostCreator({ isDarkMode }) {
    const inputBg = isDarkMode ? "bg-gray-900" : "bg-white";
    const inputText = isDarkMode ? "text-white" : "text-gray-700";
    const cardBg = isDarkMode ? "bg-gray-800" : "bg-white";
    const cardText = isDarkMode ? "text-white" : "text-gray-900";
    const borderColor = isDarkMode ? "border-gray-700" : "border-gray-300";
    const shadow = "shadow-md shadow-black/10 dark:shadow-black/30";
  
    return (
      <div className={`max-w-screen-xl mx-auto p-5 ${isDarkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"} transition-colors duration-300`}>
        {/* Card */}
        <div className={`rounded-2xl p-6 ${cardBg} ${cardText} ${shadow} transition`}>
          {/* Top - Profile and Input */}
          <div className={`flex items-center gap-4 border ${borderColor} rounded-full px-4 py-3 ${inputBg}`}>
            <img
              className="w-11 h-11 rounded-full object-cover"
              src="https://storage.googleapis.com/a1aa/image/736b6626-af59-41c1-0207-e90822baa620.jpg"
              alt="Profile"
            />
            <input
              type="text"
              placeholder="What's on your mind?"
              className={`flex-grow rounded-full px-4 py-2 text-sm border ${borderColor} focus:outline-none focus:ring-2 focus:ring-blue-500 ${inputText} ${inputBg}`}
            />
          </div>
  
          {/* Divider */}
          <hr className={`my-5 border-t ${isDarkMode ? "border-gray-700" : "border-gray-200"}`} />
  
          {/* Action Buttons */}
          <div className="flex justify-around flex-wrap gap-4">
            <ActionButton icon="far fa-image" label="Photo" color="text-blue-500" />
            <ActionButton icon="fas fa-video" label="Video" color="text-red-500" />
            <ActionButton icon="fas fa-calendar-alt" label="Event" color="text-yellow-500" />
            <ActionButton icon="fas fa-newspaper" label="Write Article" color="text-green-500" />
          </div>
        </div>
      </div>
    );
  }
  
  // Sub-component for action buttons
  function ActionButton({ icon, label, color }) {
    return (
      <button
        className={`flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition ${color} text-sm font-semibold`}
      >
        <i className={`${icon} text-lg`} />
        {label}
      </button>
    );
  }
  
  export default PostCreator;
  