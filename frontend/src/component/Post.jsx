import React, { useState } from "react";
import {
  FaThumbsUp,
  FaCommentAlt,
  FaShareAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
  FaTimes,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import './post.css';

const Post = ({ post, isDarkMode }) => {
  const [likes, setLikes] = useState(post.likes || 0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [commentName, setCommentName] = useState("");
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showCommentBox, setShowCommentBox] = useState(false);

  const toggleLike = () => {
    setLikes((prev) => liked ? prev - 1 : prev + 1);
    setLiked((prev) => !prev);
  };

  const addComment = () => {
    if (commentText.trim() && commentName.trim()) {
      setComments((prev) => [...prev, { name: commentName, text: commentText }]);
      setCommentText("");
      setCommentName("");
      setError("");
    } else {
      setError("Please enter your name and comment.");
    }
  };

  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${post.image}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.content)}`,
    instagram: `https://www.instagram.com/`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(post.content)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(post.content)}`,
  };

  return (
    <>
      <motion.div
        className={`rounded-xl p-4 space-y-3 border shadow-md max-h-[800px] overflow-y-auto transition-all duration-500 ${
          isDarkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"
        }`}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* User Info */}
        <div className="flex items-center space-x-3">
          <img src={post.avatar} className="w-10 h-10 rounded-full" />
          <div>
            <p className="font-semibold">{post.name}</p>
            <p className="text-xs text-gray-500">{post.title}</p>
          </div>
        </div>

        {/* Content */}
        <p>{post.content}</p>
        {post.image && (
          <img
            src={post.image}
            className="rounded-lg w-full object-cover max-h-120"
          />
        )}

        {/* Interaction Buttons */}
        <div className="flex justify-around pt-2 border-t border-gray-300 text-sm">
          <motion.button
            onClick={toggleLike}
            whileTap={{ scale: 1.3, rotate: 10 }}
            transition={{ type: "spring", stiffness: 300 }}
            className={`flex items-center gap-1 transition-colors duration-300 ${
              liked ? "text-blue-500 font-bold" : "hover:text-blue-600"
            }`}
          >
            <FaThumbsUp /> {liked ? "Liked" : "Like"} ({likes})
          </motion.button>
          <button
            onClick={() => setShowCommentBox((prev) => !prev)}
            className="flex items-center gap-1 hover:text-blue-600"
          >
            <FaCommentAlt /> Comment
          </button>
          <button
            onClick={() => setShowModal(true)}
            className="flex items-center gap-1 hover:text-blue-600"
          >
            <FaShareAlt /> Share
          </button>
        </div>

        {/* Comment Section */}
        <AnimatePresence>
          {showCommentBox && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.5 }}
              className="mt-3 space-y-2"
            >
              <input
                value={commentName}
                onChange={(e) => setCommentName(e.target.value)}
                className="w-full px-3 py-1 rounded border dark:bg-gray-700 dark:text-white"
                placeholder="Your name"
              />
              <input
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addComment()}
                className="w-full px-3 py-1 rounded border dark:bg-gray-700 dark:text-white"
                placeholder="Write a comment..."
              />
              <button
                onClick={addComment}
                className="text-sm bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
              >
                Post
              </button>
              {error && <p className="text-red-500 text-xs">{error}</p>}

              <ul className="mt-3 space-y-2">
                {comments.map((c, idx) => (
                  <li key={idx} className="bg-gray-100 dark:bg-gray-700 p-2 rounded shadow-sm">
                    <strong className="text-sm text-blue-600 dark:text-blue-400">{c.name}</strong>
                    <p className="text-sm text-gray-800 dark:text-white">{c.text}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Share Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              className="modal active"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="modal-header">
                <h1>Share this post</h1>
                <div>
                  <FaTimes className="close" onClick={() => setShowModal(false)} />
                </div>
              </div>

              <h3>Share this via</h3>
              <div className="icon-container">
                <a href={shareUrls.facebook} className="icon" id="facebook" target="_blank" rel="noreferrer">
                  <FaFacebookF />
                </a>
                <a href={shareUrls.twitter} className="icon" id="twitter" target="_blank" rel="noreferrer">
                  <FaTwitter />
                </a>
                <a href={shareUrls.instagram} className="icon" id="instagram" target="_blank" rel="noreferrer">
                  <FaInstagram />
                </a>
                <a href={shareUrls.whatsapp} className="icon" id="whatsapp" target="_blank" rel="noreferrer">
                  <FaWhatsapp />
                </a>
                <a href={shareUrls.telegram} className="icon" id="telegram" target="_blank" rel="noreferrer">
                  <FaTelegram />
                </a>
              </div>
            </motion.div>
            <motion.div
              className="overlay overlayactive"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            />
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Post;
